-- CreateTable
CREATE TABLE "Sensor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "model" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);
