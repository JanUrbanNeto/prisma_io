import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.books.createMany({
      data: [
         {
            name: "Playing Drums in The Hottest Band in the World.",
            author_id: "1eb68397-eabd-476b-bf3c-988902d26b37"
         },
         {
            name: "My Voice Is My Treasure!",
            author_id: "07d683a7-1d21-45dd-9805-fdbcf05905da"
         }
      ]
   });

   console.log(result)

}

main();