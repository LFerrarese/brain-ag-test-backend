import { Request, Response } from "express";
import { FarmerService } from "../services/farmer";

export class FarmerController {
  async get(request: Request, response: Response) {
    const service = new FarmerService();

    const { id } = request.params;

    if (id) return response.json(await service.getFarmerById(id));
    return response.json(await service.getFarmerList());
  }

  async create(request: Request, response: Response) {
    const service = new FarmerService();

    const { farmer, address, crops } = request.body;

    await service.createFarmer(farmer, address, crops);
    return response.status(201).send();
  }

  async update(request: Request, response: Response) {
    const service = new FarmerService();

    const { farmer, address, crops } = request.body;

    const updated = await service.updateFarmer(farmer, address, crops);
    return response.json(updated);
  }

  async getAnalytics(_request: Request, response: Response) {
    const service = new FarmerService();
    const data = await service.getAnalytics();

    return response.json(data);
  }
}
