import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.authors.createMany({
      data: [
         {
            name: "Eric Singer",
         },
         {
            name: "Paul Stanley"
         }
      ]
   });

   console.log(result)

}

main();