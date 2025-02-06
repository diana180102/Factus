/*
  Warnings:

  - Added the required column `invoice_number` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "invoice_number" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "Retencion" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);
