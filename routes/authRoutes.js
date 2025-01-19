import express from "express";
import { RegoController } from "../controllers/Authentication/Auth.js";

const router = express.Router();

router.post("/signup", RegoController);

export default router;
