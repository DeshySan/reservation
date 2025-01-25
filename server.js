import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import RestaurantRoutes from "./routes/RestaurantRoutes.js";
dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.use(`/api/v1/authRoutes`, authRoutes);
app.use(`/api/v1/restro`, RestaurantRoutes);
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
