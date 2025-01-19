import express from "express";
import {
  LoginController,
  RegoController,
} from "../controllers/Authentication/Auth.js";

const router = express.Router();

router.post("/signup", RegoController);
router.get("/login", LoginController);

export default router;
