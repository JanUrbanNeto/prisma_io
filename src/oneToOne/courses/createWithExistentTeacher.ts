import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.courses.create({
      data: {
         duration: 500,
         name: "Curso de React Native",
         description: "Curso de React Native para desenvolvimento de app mobile",
         teacher: {
            connect: {
               id: "503ea6e5-5140-4f55-8dfe-3723b4e68e9c"
            }
         }
      }
   });

   console.log(result);
}

main();