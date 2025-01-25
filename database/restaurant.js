import mongoose, { mongo } from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      type: String,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    availableTimeSlots: Array,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Restaurant", RestaurantSchema);
