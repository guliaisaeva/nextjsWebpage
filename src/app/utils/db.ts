import mongoose from "mongoose";

const connect = async () => {
  const mongoUri = process.env.MONGO;
  if (!mongoUri) {
    throw new Error("MONGO environment variable is not defined");
  }
  try {
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
