import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  whatsapp: String,
  numbers: [Number],
});
//@ts-ignore
const User = mongoose.model("User", schema);

export { User };
