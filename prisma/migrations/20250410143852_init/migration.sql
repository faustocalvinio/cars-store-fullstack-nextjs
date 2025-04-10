-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_id_key" ON "Car"("id");
