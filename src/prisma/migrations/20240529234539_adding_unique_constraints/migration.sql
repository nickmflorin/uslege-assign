/*
  Warnings:

  - A unique constraint covering the columns `[listId,name]` on the table `Committee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[committeeId,name]` on the table `Witness` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Committee_listId_name_key" ON "Committee"("listId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Witness_committeeId_name_key" ON "Witness"("committeeId", "name");
