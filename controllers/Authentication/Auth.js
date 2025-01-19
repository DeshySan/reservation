import express from "express";

import jwt from "jsonwebtoken";
import {
  hashPassword,
  matchPassword,
} from "../../functions/passwordProtector.js";
import user from "../../database/user.js";

export const RegoController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new user({
      username,
      email,
      password: hashedPassword,
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
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

export const LoginController = async (req, res) => {
  const { email, password } = req.body;

  const loggedInUser = await user.findOne({ email });
  //user validation
  if (!loggedInUser) {
    res.status(400).send({
      message: "User not found with the provided creds",
      success: false,
    });
  }
  if (!(await matchPassword(password, loggedInUser.password))) {
    res.status(404).send({
      message:
        "user is not authorised to view this resource with explicit deny",
      success: false,
    });
  }

  const token = jwt.sign({ _id: loggedInUser._id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
  res.status(201).send({
    message: "User has been Logged In successfully",
    success: true,
    loggedInUser,
    token,
  });
  try {
  } catch (error) {
    console.log(error);
  }
};
