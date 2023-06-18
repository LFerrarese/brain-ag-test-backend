import { Response } from "express";

export const response = {
  json: jest.fn(),
  status: jest.fn(() => response),
} as unknown as Response;
