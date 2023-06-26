import { PrismaClient } from "@prisma/client";
import mock from "./db.json";

const prisma = new PrismaClient();

console.log("Seeding database with CROPS information");

async function handle() {
  try {
    await prisma.crop.createMany({
      data: mock.crops,
    });
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

handle()
  .then(async () => {
    await prisma.$disconnect();
    console.log("CROPS seeding completed");
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
