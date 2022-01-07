import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const result = await prisma.courses.findMany({
      where: {
         name: "Curso de Java 2"
      },

      include: {
         teacher: true,
         CoursesModules: {
            include: {
               module: true,
            }
         }
      }
   });
   console.log(JSON.stringify(result))
}

main();