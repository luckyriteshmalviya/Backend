import express from "express";
import { CreateController } from "./controller.js";

export const network = express.Router();
network.post("/create", CreateController);
network.get("/render", CreateController);
network.put("/update", CreateController);
network.delete("/delete", CreateController);
