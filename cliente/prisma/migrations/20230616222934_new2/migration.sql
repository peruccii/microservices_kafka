/*
  Warnings:

  - You are about to drop the column `name` on the `clients` table. All the data in the column will be lost.
  - Added the required column `nome` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_clients" ("email", "id", "password", "phone") SELECT "email", "id", "password", "phone" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
