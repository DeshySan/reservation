import express from "express";
import {
  getRestaurant,
  postRestaurant,
} from "../controllers/Restaurant/Restaurant.js";
import {
  getAreas,
  postAreas,
  putAreas,
} from "../controllers/Restaurant/Areas.js";

const router = express.Router();

router.post(`/postRestro`, postRestaurant);
router.get(`/getRestro`, getRestaurant);

//Areas
router.post(`/postAreas`, postAreas);
router.get(`/getAreas`, getAreas);
router.put(`/putAreas/:id`, putAreas);
export default router;
