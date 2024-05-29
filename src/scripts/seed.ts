import { prisma } from "~/prisma/client";
import { LogLevel } from "~/environment";
import { logger } from "~/application/logger";

logger.level = LogLevel.INFO;

async function main() {
  logger.info("This is a dummy example of seeding the database.");
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
