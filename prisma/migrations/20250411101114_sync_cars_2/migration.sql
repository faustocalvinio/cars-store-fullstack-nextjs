/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuelType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_carId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "color" VARCHAR(255) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "fuelType" VARCHAR(255) NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "images" VARCHAR(255)[] DEFAULT ARRAY[]::VARCHAR(255)[],
ADD COLUMN     "location" VARCHAR(255) NOT NULL,
ADD COLUMN     "mileage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "transmission" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Order";
