import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.modules.create({
      data: {
         name: "Módulo de Firebase",
         description: "Aprendendo Firebase para mobile (React Native)",
         CoursesModules: {
            create: {
               course: {
                  connect: {
                     id: "d28fe6b1-5e4e-4d89-bfe3-cd997bcfb447"
                  }
               }
            }
         }
      }
   });

   console.log(result);
}

main();