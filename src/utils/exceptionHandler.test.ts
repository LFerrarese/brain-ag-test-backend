import { Request } from "express";
import {
  RequestError,
  ServerError,
  AuthenticationError,
  exceptionHandler,
} from "./exceptionHandler";
import { response } from "../__mocks__/express";

describe("utils/exceptionHandler", () => {
  it("should return a json response with status code 400", () => {
    const error = new RequestError("Wrong content");

    exceptionHandler(error, {} as Request, response, jest.fn());

    expect(response.status).toBeCalledWith(400);
    expect(response.json).toBeCalledWith({
      message: error.message,
    });
  });

  it("should return a json response with status code 500", () => {
    const error = new ServerError("Could not load the server");

    exceptionHandler(error, {} as Request, response, jest.fn());

    expect(response.status).toBeCalledWith(500);
    expect(response.json).toBeCalledWith({
      message: error.message,
    });
  });

  it("should return a json response with status code 500 and generic message", () => {
    exceptionHandler(new ServerError(), {} as Request, response, jest.fn());
    expect(response.status).toBeCalledWith(500);
    expect(response.json).toBeCalledWith({
      message: "Internal Server Error",
    });
  });

  it("should return a json response with status code 401", () => {
    exceptionHandler(
      new AuthenticationError(),
      {} as Request,
      response,
      jest.fn()
    );

    expect(response.status).toBeCalledWith(401);
    expect(response.json).toBeCalledWith({
      message: "Unauthorized",
    });
  });

  it("should return a json response with status code 500 (generic)", () => {
    const error = new Error();

    exceptionHandler(error, {} as Request, response, jest.fn());

    expect(response.status).toBeCalledWith(500);
    expect(response.json).toBeCalledWith({
      message: "Internal Server Error",
    });
  });
});
