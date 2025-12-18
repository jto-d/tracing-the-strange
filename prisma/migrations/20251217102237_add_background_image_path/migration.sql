/*
  Warnings:

  - Added the required column `background_image_path` to the `motifs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_motifs" (
    "motif_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "motif_name" TEXT NOT NULL,
    "description" TEXT,
    "image_path" TEXT NOT NULL,
    "background_image_path" TEXT NOT NULL
);
INSERT INTO "new_motifs" ("description", "image_path", "motif_id", "motif_name") SELECT "description", "image_path", "motif_id", "motif_name" FROM "motifs";
DROP TABLE "motifs";
ALTER TABLE "new_motifs" RENAME TO "motifs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
