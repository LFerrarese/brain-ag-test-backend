import { PrismaClient } from "@prisma/client";
import mock from "./db.json";

const prisma = new PrismaClient();

console.log("Seeding database with address information");

async function createStates() {
  try {
    await prisma.state.createMany({
      data: mock.states,
    });
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

async function createCities() {
  try {
    const states = await prisma.state.findMany();
    const citiesMock = mock.cities.map((city) => ({
      stateId: states.filter((state) => state.acronym === city.stateId)[0].id,
      name: city.name,
    }));

    await prisma.city.createMany({
      data: citiesMock,
    });
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

createStates()
  .then(async () => {
    await createCities().then(async () => {
      await prisma.$disconnect();
      console.log("Database seeding successfuly completed");
    });
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
