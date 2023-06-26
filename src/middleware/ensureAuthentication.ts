import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants";
import { AuthenticationError } from "../utils/exceptionHandler";

type Payload = {
  sub: string;
};

export const ensureAuthentication = (
  request: Request,
  _response: Response,
  next: NextFunction
): void => {
  const bearer = request.headers.authorization;

  if (!bearer) throw new AuthenticationError("Missing token");

  const [, token] = bearer.split(" ");

  try {
    verify(token, JWT_SECRET as string) as Payload;
    return next();
  } catch (error) {
    throw new AuthenticationError("Invalid token");
  }
};
