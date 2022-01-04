import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.authors.create({
      data: {
         name: "Jan Dinirso",
         books: {
            createMany: {
               data: [
                  {
                     name: "Aprendendo Programação do 0."
                  },
                  {
                     name: "Mantendo a Produtividade no Teletrabalho."
                  }
               ]
            }
         }
      }
   });

   console.log(result)

}

main();