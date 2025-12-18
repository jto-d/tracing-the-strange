/*
  Warnings:

  - Made the column `color` on table `motifs` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_motifs" (
    "motif_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "motif_name" TEXT NOT NULL,
    "description" TEXT,
    "image_path" TEXT NOT NULL,
    "background_image_path" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_motifs" ("background_image_path", "color", "description", "image_path", "motif_id", "motif_name") SELECT "background_image_path", "color", "description", "image_path", "motif_id", "motif_name" FROM "motifs";
DROP TABLE "motifs";
ALTER TABLE "new_motifs" RENAME TO "motifs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
