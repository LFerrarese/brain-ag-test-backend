import { Router } from "express";
import { AuthController } from "../controllers/auth";

const controller = new AuthController();

const authRouter = Router();

authRouter.post("/sign-in", controller.authenticate);
authRouter.post("/sign-up", controller.create);
authRouter.get("/verify", controller.get);

export { authRouter };
