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
                  //ele verifica se existe o professor na base de dados antes
                  name: "Dinirso de Tal"
               },
               create: {
                  name: "Dinirso de Tal"
               }
            }
         }
      }
   });

   console.log(result);
}

main();