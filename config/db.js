import mongoose from "mongoose";

export const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_DB_URL, {
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};