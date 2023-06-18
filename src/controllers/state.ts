import { Request, Response } from "express";
import { StateService } from "../services/state";

export class StateController {
  async get(_request: Request, response: Response) {
    const service = new StateService();
    return response.json(await service.getStateList());
  }
}
