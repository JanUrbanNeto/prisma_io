import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const result = await prisma.courses.update({
      where: {
         id: "d7df749a-8605-49b5-9b5f-eb257e63ec6b"
      },

      data: {
         description: "Curso de Java para backend",
         duration: 240
      }
   });
   
   console.log(result)
}

main();