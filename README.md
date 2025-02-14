
# Reto - Factura Electrónica Factus

El proyecto consiste en la generación de facturas electrónicas a través de la API de Factus. Se ha desarrollado una interfaz gráfica con un formulario que permite recopilar la información del usuario, los productos y las formas de pago. Estos datos se utilizan posteriormente para emitir la factura en Factus y reportarla a la DIAN. Adicionalmente el usuario podrá ver la lista de las últimas facturas emitidas con número de identificación, nombre, número de factura.






## Stack Tecnológico

**Backend:** Nodejs

**Database:** Postgres

**Backend:** React

**Framework:** Nextjs




## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
  npm install / pnpm install
```

Para instalar realizar la migración de la base de datos con prisma, ejecuta el siguiente comando

```bash
  npm install / pnpm install
```    
## Run Locally

Clone the project

```bash
  git clone https://github.com/diana180102/Factus.git
```

Go to the project directory

```bash
  cd my-project
```

Instalar dependencias

```bash
  npm install / pnpm install
```

Iniciar server

```bash
  npm run dev
```

Ejecutar migraciones con prisma

```bash
 npx prisma migrate dev --name init  
```


## Environment Variables

Agrega la creacion del archivo .env y crear las variables de api client, api secret, url base de datos 

`NEXT_PUBLIC_CLIENT_ID=<tu_api_client>`

`NEXT_PUBLIC_CLIENT_SECRET=<tu_api_secret>`

`DATABASE_URL="postgresql://postgres:<contraseña>@localhost:5432/<nombre_db>"`



Agrega en .env.local tu key secret de next

`NEXTAUTH_SECRET= <tu_key_secret>`



## Demo

[![Ver video](https://cdn-icons-png.flaticon.com/512/2468/2468825.png)](https://youtu.be/hGUdrONerUw)



## Authors

- [@diana180102](https://gitlab.com/diana180102)   Diana Mayorga

