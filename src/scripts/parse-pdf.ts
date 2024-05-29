import { prisma } from "~/prisma/client";
import { LogLevel } from "~/environment";
import { texasWitnessListExtractor } from "~/lib/pdf/texas-witness-list-extractor";
import { logger } from "~/application/logger";

logger.level = LogLevel.INFO;

async function main() {
  const doc = await texasWitnessListExtractor.extract("C6102024051410001");
  logger.info(`The witness list ${doc.id} was successfully created/updated.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
