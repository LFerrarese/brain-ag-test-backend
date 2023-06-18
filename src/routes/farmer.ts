import { Router } from "express";
import { FarmerController } from "../controllers/farmer";

const controller = new FarmerController();

const farmerRouter = Router();

farmerRouter.get("/:id", controller.get);
farmerRouter.get("/", controller.get);
farmerRouter.post("/create", controller.create);
farmerRouter.put("/update", controller.update);

export { farmerRouter };
