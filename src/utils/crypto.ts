import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) =>
  await hash(password, 10);

export const doesPasswordMatch = async (
  passwordToCheck: string,
  password: string
): Promise<boolean> => await compare(password, passwordToCheck);
