import mongoose from "mongoose";

// Check if the model already exists to prevent redefining it
const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      name: String,
      whatsapp: String,
      sortNumbers: [Number],
    })
  );

export { User };
