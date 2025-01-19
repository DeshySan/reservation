import express from "express";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    role: {
      type: String,
      enum: ["customer", "owner", "admin"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
