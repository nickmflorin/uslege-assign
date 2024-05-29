/*
  Warnings:

  - Added the required column `name` to the `Witness` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Witness" ADD COLUMN     "name" TEXT NOT NULL;
