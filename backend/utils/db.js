import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongo connection successfully");
  } catch (error) {
    console.log("connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
