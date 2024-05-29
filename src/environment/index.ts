import { z } from "zod";

import {
  DEFAULT_PRETTY_LOGGING,
  LogLevel,
  DEFAULT_LOG_LEVELS,
  PrismaLogLevelSchema,
} from "./constants";
import { Environment } from "./Environment";
import { environmentLookup, StringBooleanFlagSchema, testRestricted } from "./util";

export * from "./constants";

export const environment = Environment.create(
  {
    runtime: {
      NODE_ENV: process.env.NODE_ENV,
      OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Log Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      PRETTY_LOGGING: process.env.PRETTY_LOGGING,
      LOG_LEVEL: process.env.LOG_LEVEL,
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Database Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      DATABASE_LOG_LEVEL: process.env.DATABASE_LOG_LEVEL,
      POSTGRES_URL: process.env.POSTGRES_URL,
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
      POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
      POSTGRES_USER: process.env.POSTGRES_USER,
      POSTGRES_HOST: process.env.POSTGRES_HOST,
    },
    validators: {
      NODE_ENV: z.enum(["development", "test", "production"]),
      OPEN_AI_API_KEY: z.string().startsWith("sk-"),
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Log Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      PRETTY_LOGGING: StringBooleanFlagSchema.default(environmentLookup(DEFAULT_PRETTY_LOGGING)),
      LOG_LEVEL: z.nativeEnum(LogLevel).default(environmentLookup(DEFAULT_LOG_LEVELS)),
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Database Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      POSTGRES_URL: testRestricted(z.string().url().optional()),
      POSTGRES_PRISMA_URL: testRestricted(z.string().url().optional()),
      POSTGRES_URL_NON_POOLING: testRestricted(z.string().url().optional()),
      POSTGRES_DATABASE: testRestricted(z.string().optional()),
      POSTGRES_PASSWORD: testRestricted(z.string().optional()),
      POSTGRES_USER: testRestricted(z.string().optional()),
      POSTGRES_HOST: testRestricted(z.string().optional()),
      DATABASE_LOG_LEVEL: PrismaLogLevelSchema.optional(),
    },
  },
  {
    errorMessage: {
      title: `Environment Configuration Error: NODE_ENV='${process.env.NODE_ENV}'`,
    },
  },
);
