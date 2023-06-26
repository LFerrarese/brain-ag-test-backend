/*
  Warnings:

  - Added the required column `arableArea` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalArea` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vegetationArea` to the `Farmer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Farmer" ADD COLUMN     "arableArea" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "totalArea" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vegetationArea" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Crop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarmerCrop" (
    "id" TEXT NOT NULL,
    "farmerId" TEXT NOT NULL,
    "cropId" TEXT NOT NULL,

    CONSTRAINT "FarmerCrop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Crop_name_key" ON "Crop"("name");

-- AddForeignKey
ALTER TABLE "FarmerCrop" ADD CONSTRAINT "FarmerCrop_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmerCrop" ADD CONSTRAINT "FarmerCrop_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
