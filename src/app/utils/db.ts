import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", false);

  const mongoUri = process.env.MONGO_URI;

  if (mongoose.connections[0].readyState) return;

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
