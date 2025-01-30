-- CreateTable
CREATE TABLE "Medida" (
    "id" INTEGER NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Medida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Retencion" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(2) NOT NULL,
    "name" VARCHAR(3) NOT NULL,
    "description" VARCHAR(100) NOT NULL,

    CONSTRAINT "Retencion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productos" (
    "code_reference" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "discount_rate" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "tax_rate" VARCHAR(20) NOT NULL,
    "unit_measure_id" INTEGER NOT NULL,
    "standard_code_id" INTEGER NOT NULL,
    "is_excluded" INTEGER NOT NULL,
    "tribute_id" INTEGER NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("code_reference")
);

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_unit_measure_id_fkey" FOREIGN KEY ("unit_measure_id") REFERENCES "Medida"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_standard_code_id_fkey" FOREIGN KEY ("standard_code_id") REFERENCES "Estandar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_is_excluded_fkey" FOREIGN KEY ("is_excluded") REFERENCES "Tributo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_tribute_id_fkey" FOREIGN KEY ("tribute_id") REFERENCES "Retencion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
