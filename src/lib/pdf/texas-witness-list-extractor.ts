import OpenAI from "openai";
import { type z } from "zod";

import type { PdfDocument } from "./types";

import { prisma } from "~/prisma/client";
import { WitnessListSchema } from "~/prisma/model";
import { environment } from "~/environment";
import { logger } from "~/application/logger";

import { PdfClient } from "./pdf-client";

const openai = new OpenAI({
  apiKey: environment.get("OPEN_AI_API_KEY"),
});

const createExtraction = (text: string) =>
  "Extract a witness list, returning as a JSON object, that consists of a timestamp field, " +
  "the department name (as field 'department'), and a list of committees, where each committee " +
  "has a 'name', and an array of witnesses (as field 'witnesses'), which should each consist " +
  "of a name (as field 'name'), their optional title (as field 'title'), the organization " +
  "they belong to (as field 'organization'), and their location (as a JSON object with keys " +
  `'city', 'state'), from the following data: ${text}`;

const parseWitnessListDocument = async (
  document: PdfDocument,
): Promise<z.infer<typeof WitnessListSchema>> => {
  const content = document.pages.map(page => page.content.join("\n")).join("\n");
  const extraction = createExtraction(content);
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: extraction,
      },
    ],
    temperature: 0.7,
    /* max_tokens: 64,
       top_p: 1, */
  });
  if (result.choices[0].message.content) {
    const parsed = JSON.parse(result.choices[0].message.content);
    return WitnessListSchema.parse(parsed);
  }
  throw new Error("OpenAPI response unexpectedly returned a message without any content!");
};

export class TexasWitnessListExtractor extends PdfClient {
  constructor() {
    super("https://capitol.texas.gov/tlodocs/88R/witlistmtg/pdf");
  }

  public async extract(id: string) {
    const document = await this.fetchDocument(id);
    const {
      department,
      timestamp,
      committees: _committees,
    } = await parseWitnessListDocument(document);
    return await prisma.$transaction(async tx => {
      const existing = await tx.witnessList.findFirst({
        where: { timestamp, department },
      });
      if (existing) {
        logger.info(
          `Witness list for department '${department}', timestamp '${timestamp}' ` +
            "already exists.  Updating the committees and witnesses for the witness list.",
        );
        /* Note: Ideally, we would update the models in the database rather than deleting and
           recreating them - but that's kind of a pain and probably out of scope for this
           short assignment. */
        await tx.witness.deleteMany({
          where: { committee: { listId: existing.id } },
        });
        await tx.committee.deleteMany({
          where: { listId: existing.id },
        });

        await Promise.all(
          _committees.map(({ witnesses, ...committee }) =>
            tx.committee.create({
              data: {
                ...committee,
                witnesses: {
                  createMany: {
                    data: witnesses.map(({ location, ...witness }) => ({
                      ...witness,
                      city: location.city,
                      state: location.state,
                    })),
                  },
                },
              },
            }),
          ),
        );
        return existing;
      }
      /* Prisma does not support double nested relations when creating many records at the same
         time.  So, we need to create the committees before creating the witness list. */
      const committees = await Promise.all(
        _committees.map(({ witnesses, ...committee }) =>
          tx.committee.create({
            data: {
              ...committee,
              witnesses: {
                createMany: {
                  data: witnesses.map(({ location, ...witness }) => ({
                    ...witness,
                    city: location.city,
                    state: location.state,
                  })),
                },
              },
            },
          }),
        ),
      );
      return await tx.witnessList.create({
        data: {
          timestamp,
          department,
          committees: {
            connect: committees.map(c => ({ id: c.id })),
          },
        },
      });
    });
  }
}

export const texasWitnessListExtractor = new TexasWitnessListExtractor();
