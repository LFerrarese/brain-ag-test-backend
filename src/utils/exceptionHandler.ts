import { Request, Response, NextFunction } from "express";

type ExceptionHandler = (
  exception: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => Response;

export class RequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RequestError";
  }
}

export class ServerError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ServerError";
  }
}

export class AuthenticationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export const exceptionHandler: ExceptionHandler = (
  exception,
  _request,
  response,
  _next
) => {
  if (exception instanceof RequestError) {
    return response.status(400).json({
      message: exception.message,
    });
  }

  if (exception instanceof ServerError) {
    return response.status(500).json({
      message: exception.message || "Internal Server Error",
    });
  }

  if (exception instanceof AuthenticationError) {
    return response.status(401).json({
      message: "Unauthorized",
    });
  }

  return response.status(500).json({
    message: "Internal Server Error",
  });
};
