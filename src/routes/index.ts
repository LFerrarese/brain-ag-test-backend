import { Router } from "express";
import { farmerRouter } from "./farmer";
import { stateRouter } from "./state";

const router = Router();

router.get("/health", (_request, response) =>
  response.json({ status: "healthy" })
);

router.use("/farmer", farmerRouter);
router.use("/state", stateRouter);

export { router };
