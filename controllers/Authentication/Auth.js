import express from "express";

import jwt from "jsonwebtoken";
import { hashPassword } from "../../functions/passwordProtector.js";
import user from "../../database/user.js";

export const RegoController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new user({
      username,
      email,
      password: hashPassword,
      role,
    });
    await newUser.save();
    res.status(200).send({
      message: "A new user has been created successfully",
      success: true,
      newUser,
    });
  } catch (error) {
    console.log(error);
  }
};
