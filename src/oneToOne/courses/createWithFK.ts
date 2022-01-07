import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const result = await prisma.courses.create({
      data: {
         duration: 220,
         name: "Curso de ReactJS",
         description: "Curso fora de série de ReactJS para Frontend",
         fk_id_teacher: "8b949588-bbe6-4fbb-98db-451c8cb698e4"
      }
   });
   console.log(result);
}

main();