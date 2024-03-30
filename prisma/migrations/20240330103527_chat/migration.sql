/*
  Warnings:

  - Added the required column `time` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "response" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
