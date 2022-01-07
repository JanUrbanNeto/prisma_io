import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let skip = 0;
let exist = true;

async function main() {

   while (exist) {
      const result = await prisma.courses.findMany({
         skip: skip,
         take: 2,

         include: {
            teacher: true
         }
      });

      skip += 2;

      if (result.length <= 0) {
         exist = false;
      }

      if (exist) {
         console.log(result)
         console.log("-----------------")
      }
   }
}

main();