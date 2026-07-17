/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CV" ADD COLUMN     "font" TEXT NOT NULL DEFAULT 'inter',
ADD COLUMN     "template" TEXT NOT NULL DEFAULT 'modern',
ADD COLUMN     "themeColor" TEXT NOT NULL DEFAULT 'blue';

-- AlterTable
ALTER TABLE "User"
ADD COLUMN "username" TEXT;

UPDATE "User"
SET "username" = 'user_' || id
WHERE "username" IS NULL;

ALTER TABLE "User"
ALTER COLUMN "username" SET NOT NULL;


-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
