import "dotenv/config";
import "express-async-errors";
import express from "express";
import http from "http";
import { API_PORT } from "./utils/constants";
import { exceptionHandler } from "./utils/exceptionHandler";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use("/api", router);
app.use(exceptionHandler);

const server = http.createServer(app);

server.listen(API_PORT, () => {
  console.log("Server running on:", server.address());
});
