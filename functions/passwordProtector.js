import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  try {
    const saltRounds = process.env.saltRounds;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
