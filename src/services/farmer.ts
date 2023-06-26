import { prisma } from "../database/client";
import { Address as AddressModel, Farmer as FarmerModel } from "@prisma/client";
import { RequestError } from "../utils/exceptionHandler";
import { validateDocument } from "../utils/validations";

type GenericStringObject = {
  [name: string]: number;
};

type GetAnalytics = Promise<{
  farmsCount: number;
  farmsTotalAreaCount: number;
  vegetationAreaCount: number;
  arableAreaCount: number;
  farmsCropsCount: GenericStringObject[];
  farmsPerState: GenericStringObject[];
}>;

export class FarmerService {
  async createFarmer(
    farmer: FarmerModel,
    address: AddressModel,
    crops: string[]
  ): Promise<void> {
    try {
      if (!validateDocument(farmer.document)) {
        throw new RequestError("Invalid document");
      }

      if (farmer.arableArea + farmer.vegetationArea > farmer.totalArea) {
        throw new RequestError(
          "Total area is less than the arable and vegetation areas together"
        );
      }

      const newFarmer = await prisma.farmer.create({
        data: farmer,
      });

      await prisma.address.create({
        data: {
          ...address,
          farmerId: newFarmer.id,
        },
      });

      const farmerCrops = crops.map((crop) => ({
        farmerId: newFarmer.id,
        cropId: crop,
      }));

      await prisma.farmerCrop.createMany({
        data: farmerCrops,
      });
    } catch (error) {
      throw new Error();
    }
  }

  async updateFarmer(
    farmer: Partial<FarmerModel>,
    address?: Partial<AddressModel>,
    crops?: string[]
  ): Promise<FarmerModel> {
    try {
      const arableArea = farmer.arableArea || 0;
      const vegetationArea = farmer.vegetationArea || 0;
      const totalArea = farmer.totalArea || 0;

      if (arableArea + vegetationArea > totalArea) {
        throw new RequestError(
          "Total area is less than the arable and vegetation areas together"
        );
      }

      if (address) {
        await prisma.address.update({
          where: {
            id: address.id,
          },
          data: address,
        });
      }

      if (crops) {
        await prisma.farmerCrop.deleteMany({
          where: {
            id: farmer.id,
          },
        });

        const farmerCrops = crops.map((crop) => ({
          farmerId: farmer.id as string,
          cropId: crop,
        }));

        await prisma.farmerCrop.createMany({
          data: farmerCrops,
        });
      }

      const farmerUpdate = await prisma.farmer.update({
        where: {
          id: farmer.id,
        },
        data: farmer,
        include: {
          Address: {
            select: {
              id: true,
              City: {
                select: {
                  id: true,
                  name: true,
                  State: true,
                },
              },
            },
          },
          FarmerCrop: {
            select: {
              id: true,
              Crop: true,
            },
          },
        },
      });

      return farmerUpdate;
    } catch (error) {
      throw new Error();
    }
  }

  async getFarmerById(id: string): Promise<FarmerModel> {
    const farmer = await prisma.farmer.findFirst({
      where: { id },
      include: {
        Address: {
          select: {
            id: true,
            City: {
              select: {
                id: true,
                name: true,
                State: true,
              },
            },
          },
        },
        FarmerCrop: {
          select: {
            id: true,
            Crop: true,
          },
        },
      },
    });

    if (!farmer) throw new RequestError("Farmer does not exists");

    return farmer;
  }

  async getFarmerList(): Promise<FarmerModel[]> {
    try {
      const farmers = await prisma.farmer.findMany({
        orderBy: {
          name: "asc",
        },
        include: {
          Address: {
            select: {
              id: true,
              City: {
                select: {
                  id: true,
                  name: true,
                  State: true,
                },
              },
            },
          },
          FarmerCrop: {
            select: {
              id: true,
              Crop: true,
            },
          },
        },
      });

      if (!farmers) throw new RequestError("No farmers to show");

      return farmers;
    } catch (error) {
      throw new Error();
    }
  }

  async getAnalytics(): GetAnalytics {
    const farmerAggregation = await prisma.farmer.aggregate({
      _sum: {
        totalArea: true,
        vegetationArea: true,
        arableArea: true,
      },
      _count: true,
    });

    const crops = await prisma.farmerCrop.groupBy({
      by: ["cropId"],
      _count: true,
    });

    const address = await prisma.address.groupBy({
      by: ["stateId"],
      _count: true,
    });

    const dbCrops = await prisma.crop.findMany();
    const filteredCrops = crops.map((crop) => ({
      [dbCrops.filter((dbCrop) => dbCrop.id === crop.cropId)[0].name]:
        crop._count,
    }));

    const states = await prisma.state.findMany();
    const filteredAddress = address.map((adr) => ({
      [states.filter((state) => state.id === adr.stateId)[0].name]: adr._count,
    }));

    return {
      farmsCount: farmerAggregation._count,
      farmsTotalAreaCount: farmerAggregation._sum.totalArea as number,
      vegetationAreaCount: farmerAggregation._sum.vegetationArea as number,
      arableAreaCount: farmerAggregation._sum.arableArea as number,
      farmsCropsCount: filteredCrops as GenericStringObject[],
      farmsPerState: filteredAddress as GenericStringObject[],
    };
  }
}
