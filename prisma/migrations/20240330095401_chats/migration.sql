/*
  Warnings:

  - The primary key for the `Chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Chats` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE chats_chatno_seq;
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_pkey",
DROP COLUMN "id",
ALTER COLUMN "chatno" SET DEFAULT nextval('chats_chatno_seq'),
ADD CONSTRAINT "Chats_pkey" PRIMARY KEY ("chatno");
ALTER SEQUENCE chats_chatno_seq OWNED BY "Chats"."chatno";
