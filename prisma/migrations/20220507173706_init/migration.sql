/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Logins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Logins" DROP COLUMN "createdAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
