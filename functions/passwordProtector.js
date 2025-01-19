import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  try {
    ///FYI, the more the saltRoudns, the more longer it will take. 10 seems to be ideal
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const matchPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
