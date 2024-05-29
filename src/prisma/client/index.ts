/*
This file should *only* be used for instantiating the PrismaClient.

Each instance of PrismaClient manages a connection pool, which means that a large number of clients
can exhaust the database connection limit. This applies to all database connectors.  As such, each
application should generally only need one instance of the PrismaClient.

See: https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient
     /instantiate-prisma-client#the-number-of-prismaclient-instances-matters
*/
import { PrismaClient as RootPrismaClient } from "~/prisma/model";
import { environment } from "~/environment";

import { brandExtension } from "./brand-extension";

export * from "./errors";

export const initializePrismaClient = () => {
  /* eslint-disable-next-line no-console -- The logger is not in context for seeding. */
  console.info("Initializing Prisma Client");
  const prisma = new RootPrismaClient({
    log: environment.get("DATABASE_LOG_LEVEL"),
  });
  return prisma.$extends(brandExtension);
};

export type PrismaClient = ReturnType<typeof initializePrismaClient>;

export let prisma: PrismaClient;

const globalPrisma = globalThis as unknown as { prisma: PrismaClient };

if (process.env.NODE_ENV === "production") {
  prisma = initializePrismaClient();
} else {
  if (!globalPrisma.prisma) {
    prisma = initializePrismaClient();
    /* eslint-disable-next-line no-console -- The logger is not in context for seeding. */
    console.info("Storing Globally Instantiated Prisma Client");
    globalPrisma.prisma = prisma;
  } else {
    prisma = globalPrisma.prisma;
  }
}

export type Transaction = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;
