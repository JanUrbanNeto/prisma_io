import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const result = await prisma.courses.create({
      data: {
         duration: 220,
         name: "Curso de Java",
         description: "Curso de Java"
      }
   });

   console.log(result);
}

main();