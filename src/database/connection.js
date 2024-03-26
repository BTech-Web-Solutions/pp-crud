import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

async function connectDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully (with Mongoose)");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDatabase;
