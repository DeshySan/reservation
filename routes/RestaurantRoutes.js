import express from "express";
import {
  getRestaurant,
  postRestaurant,
} from "../controllers/Restaurant/Restaurant.js";

const router = express.Router();

router.post(`/postRestro`, postRestaurant);
router.get(`/getRestro`, getRestaurant);
export default router;
