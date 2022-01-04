import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.courses.create({
      data: {
         duration: 500,
         name: "Curso de Java 2",
         description: "Curso de Java 17 com Spring e React",
         teacher: {
            connectOrCreate: {
               where: {
                  name: "Jan Dinirso"
               },
               create: {
                  name: "Jan Dinirso"
               }
            }
         }
      }
   });

   console.log(result);
}

main();