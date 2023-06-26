import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "./constants";
import { User as UserModel } from "@prisma/client";

type Payload = {
  id: string;
};

export const generateToken = (user: UserModel) =>
  sign(
    {
      id: user.id,
    },
    JWT_SECRET as string,
    {
      subject: user.id,
      expiresIn: "1d",
    }
  );

export const verifyAndDecodeToken = (bearer: string): Payload | undefined => {
  const [, token] = bearer.split(" ");

  const decodedToken = verify(token, JWT_SECRET as string, { complete: false });

  if (decodedToken && typeof decodedToken !== "string") {
    return decodedToken as Payload;
  }
};
