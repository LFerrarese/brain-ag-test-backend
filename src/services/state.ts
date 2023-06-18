import { prisma } from "../database/client";
import { State as StateModel } from "@prisma/client";
import { RequestError } from "../utils/exceptionHandler";

export class StateService {
  async getStateList(): Promise<StateModel[]> {
    try {
      const states = await prisma.state.findMany({
        orderBy: {
          name: "asc",
        },
        include: {
          City: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      if (!states) throw new RequestError("No state found");

      return states;
    } catch (error) {
      throw new Error();
    }
  }
}
