import { Request, Response } from "express";
import { CropService } from "../services/crop";

export class CropController {
  async get(_request: Request, response: Response) {
    const service = new CropService();

    return response.json(await service.getList());
  }
}
