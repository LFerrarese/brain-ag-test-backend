import { prisma } from "../database/client";
import { Address as AddressModel, Farmer as FarmerModel } from "@prisma/client";
import { RequestError } from "../utils/exceptionHandler";

export class FarmerService {
  async createFarmer(
    farmer: FarmerModel,
    address: AddressModel
  ): Promise<void> {
    try {
      const newFarmer = await prisma.farmer.create({
        data: farmer,
      });

      await prisma.address.create({
        data: {
          ...address,
          farmerId: newFarmer.id,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }

  async updateFarmer(
    farmer: Partial<FarmerModel>,
    address?: Partial<AddressModel>
  ): Promise<FarmerModel> {
    try {
      if (address) {
        await prisma.farmer.update({
          where: {
            id: address.id,
          },
          data: address,
        });
      }

      const farmerUpdate = await prisma.farmer.update({
        where: {
          id: farmer.id,
        },
        data: farmer,
        include: {
          Address: {
            include: {
              City: {
                include: {
                  State: true,
                },
              },
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
    try {
      const farmer = await prisma.farmer.findFirst({
        where: { id },
        include: {
          Address: {
            include: {
              City: {
                include: {
                  State: true,
                },
              },
            },
          },
        },
      });

      if (!farmer) throw new RequestError("Farmer does not exists");

      return farmer;
    } catch (error) {
      throw new Error();
    }
  }

  async getFarmerList(): Promise<FarmerModel[]> {
    try {
      const farmers = await prisma.farmer.findMany({
        orderBy: {
          name: "asc",
        },
        include: {
          Address: {
            include: {
              City: {
                include: {
                  State: true,
                },
              },
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
}
