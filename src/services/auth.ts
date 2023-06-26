import { prisma } from "../database/client";
import { User as UserModel } from "@prisma/client";
import { doesPasswordMatch, hashPassword } from "../utils/crypto";
import { generateToken, verifyAndDecodeToken } from "../utils/jwt";
import { RequestError, ServerError } from "../utils/exceptionHandler";

type AuthenticateResponse = {
  token: string;
  user: UserModel;
};

export class AuthService {
  async authenticate(
    email: string,
    password: string
  ): Promise<AuthenticateResponse> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new RequestError("Wrong e-mail or password");

    if (!(await doesPasswordMatch(user.password, password))) {
      throw new RequestError("Wrong e-mail or password");
    }

    return {
      token: generateToken(user),
      user,
    };
  }

  async create(user: UserModel): Promise<UserModel> {
    const userExists = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userExists) throw new RequestError("User already exists");

    const newUser = await prisma.user.create({
      data: {
        ...user,
        password: await hashPassword(user.password),
      },
    });

    if (!newUser)
      throw new ServerError(
        "Something went wrong with user creation, please contact support"
      );

    return newUser;
  }

  async getUserByToken(token: string) {
    const payload = verifyAndDecodeToken(token);

    if (!payload) {
      throw new RequestError("Invalid authentication token");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new RequestError("User does not exists");
    }

    return user;
  }
}
