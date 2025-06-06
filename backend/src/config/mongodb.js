// src/config/mongodb.js

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected successfully", connect.connection.host);
  } catch (err) {
    console.error("error connecting db", err);
  }
};

export default connectDb;