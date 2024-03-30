/*
  Warnings:

  - Added the required column `userid` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chats" ADD COLUMN     "userid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
