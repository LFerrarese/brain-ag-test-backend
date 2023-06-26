import { prisma } from "../database/client";
import { Crop as CropModel } from "@prisma/client";

export class CropService {
  async getList(): Promise<CropModel[]> {
    const crops = await prisma.crop.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return crops;
  }
}
