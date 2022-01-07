import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.coursesModules.create({
      data: {
         course: {
            create: {
               duration: 350,
               name: "Curso de NodeJS 3",
               description: "Curso de NodeJS do zero ao deploy",
               teacher: {
                  create: {
                     name: "Carla Lemes"
                  }
               }
            }
         },
         module: {
            create: {
               name: "Express API REST",
               description: "Criando uma API REST com NodeJS e Express"
            }
         }
      }
   });

   console.log(result);
}

main();