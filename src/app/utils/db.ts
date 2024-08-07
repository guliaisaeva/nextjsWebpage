import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", false);

  const mongoUri = process.env.MONGO_URI;

  // Ensure that mongoUri is defined
  if (!mongoUri) {
    console.error("MONGO_URI environment variable is not defined");
    throw new Error("MONGO_URI environment variable is not defined");
  }

  // Check if the connection is already established
  if (mongoose.connections[0].readyState) {
    console.log("Database already connected");
    return;
  }

  try {
    console.log("Connecting to database...");
    await mongoose.connect(mongoUri);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
