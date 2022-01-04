import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.authors.createMany({
      data: [
         {
            name: "Eric singer",
         },
         {
            name: "Paul Stanley"
         }
      ]
   });

   console.log(result)

}

main();