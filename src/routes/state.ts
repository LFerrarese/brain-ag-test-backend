import { Router } from "express";
import { StateController } from "../controllers/state";

const controller = new StateController();

const stateRouter = Router();

stateRouter.get("/", controller.get);

export { stateRouter };
