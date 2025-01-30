-- CreateTable
CREATE TABLE "Municipios" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "departament" VARCHAR(80) NOT NULL,

    CONSTRAINT "Municipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documento_identidad" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,

    CONSTRAINT "Documento_identidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tributo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tributo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_persona" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "Tipo_persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_pago" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Tipo_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metodo_Pago" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(60) NOT NULL,

    CONSTRAINT "Metodo_Pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Factura" (
    "id" INTEGER NOT NULL,
    "description" VARCHAR(60) NOT NULL,

    CONSTRAINT "Tipo_Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estandar" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(60) NOT NULL,

    CONSTRAINT "Estandar_pkey" PRIMARY KEY ("id")
);
