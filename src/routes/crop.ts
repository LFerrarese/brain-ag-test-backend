import { Router } from "express";
import { CropController } from "../controllers/crop";

const controller = new CropController();

const cropRouter = Router();

cropRouter.get("/", controller.get);

export { cropRouter };
