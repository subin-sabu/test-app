// src/controllers/userController.js

import User from "../models/userModel.js";

async function createUser(req, res) {
  try {
    const { name } = req.body;
    if (!name || !name?.length) {
      return res.status(400).json({
        success: false,
        message: "name is required",
      });
    }
    // if valid name is there

    const newUser = new User({ name: name });
    const record = await newUser.save();
    console.log("saved user: ", record);
    res.status(201).json({
      success: true,
      message: "new user created",
      user: record,
    });
  } catch (err) {
    console.error(err?.message ?? "err saving name");
    res.status(500).json({"message": "Internal Server Error"})
  }
}

async function getNames(req, res) {
  try {
    const names = await User.find();
    console.log("fetched names", names);
    res.status(200).json(names);
  } catch (err) {
    console.error(err?.message ?? "err feching names");
    res.status(500).json({"message": "Interal Server Error"})
  }
}

export { createUser, getNames };
