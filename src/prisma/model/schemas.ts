import { z } from "zod";

export const WitnessSchema = z.object({
  name: z.string(),
  title: z.string().nullable().optional(),
  organization: z.string(),
  location: z.object({
    city: z.string(),
    state: z.string(),
  }),
});

export const CommitteeSchema = z.object({
  name: z.string(),
  witnesses: z.array(WitnessSchema),
});

export const WitnessListSchema = z.object({
  timestamp: z.coerce.date(),
  department: z.string(),
  committees: z.array(CommitteeSchema),
});
