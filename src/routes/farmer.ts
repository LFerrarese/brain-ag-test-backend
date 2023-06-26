import { Router } from "express";
import { FarmerController } from "../controllers/farmer";

const controller = new FarmerController();

const farmerRouter = Router();

farmerRouter.get("/find/:id", controller.get);
farmerRouter.get("/find", controller.get);
farmerRouter.get("/analytics", controller.getAnalytics);
farmerRouter.post("/create", controller.create);
farmerRouter.put("/update", controller.update);

export { farmerRouter };
