import { mongoose } from "mongoose";
import restaurant from "./restaurant.js";

const restaurantAreasSchema = new mongoose.Schema({
  name: String,
  description: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  maxCover: Number,
  totalCover: Number,
  active: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Areas", restaurantAreasSchema);
