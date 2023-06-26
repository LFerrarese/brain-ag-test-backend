import { Request, Response } from "express";
import { AuthService } from "../services/auth";
import { RequestError } from "../utils/exceptionHandler";

export class AuthController {
  async authenticate(request: Request, response: Response) {
    const service = new AuthService();

    const { email, password } = request.body;

    const user = await service.authenticate(email, password);

    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const service = new AuthService();

    await service.create(request.body);

    return response.status(201).send();
  }

  async get(request: Request, response: Response) {
    const service = new AuthService();

    const token = request.headers.authorization;

    if (!token) {
      throw new RequestError("Not a token to verify");
    }

    const user = await service.getUserByToken(token);

    return response.json(user);
  }
}
