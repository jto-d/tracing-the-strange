-- CreateTable
CREATE TABLE "motifs" (
    "motif_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "motif_name" TEXT NOT NULL,
    "description" TEXT,
    "image_path" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "characters" (
    "character_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "franchise" TEXT NOT NULL,
    "description" TEXT,
    "image_path" TEXT NOT NULL,
    "motif_id" INTEGER NOT NULL,
    CONSTRAINT "characters_motif_id_fkey" FOREIGN KEY ("motif_id") REFERENCES "motifs" ("motif_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
