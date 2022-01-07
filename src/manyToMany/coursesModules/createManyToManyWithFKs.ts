import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const result = await prisma.coursesModules.create({
      data: {
         fk_id_course: "2110158c-54d8-4b40-9542-e162b4ba43a9",
         fk_id_module: "5222d9d5-3635-498e-b6c5-8821bfb521d9"
      }
   });

   console.log(result);
}

main();