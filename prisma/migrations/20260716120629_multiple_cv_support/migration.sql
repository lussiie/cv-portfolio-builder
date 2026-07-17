/*
  Warnings:

  - You are about to drop the column `field` on the `Education` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "CV_userId_key";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "field";
