import { Router } from "express";
import { authRouter } from "./auth";
import { farmerRouter } from "./farmer";
import { stateRouter } from "./state";
import { cropRouter } from "./crop";
import { ensureAuthentication } from "../middleware/ensureAuthentication";

const router = Router();

router.get("/health", (_request, response) =>
  response.json({ status: "healthy" })
);

router.use("/auth", authRouter);
router.use("/farmer", ensureAuthentication, farmerRouter);
router.use("/state", ensureAuthentication, stateRouter);
router.use("/crop", ensureAuthentication, cropRouter);

export { router };
