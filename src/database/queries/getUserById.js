import connectDatabase from "../connection";
import { User } from "../Models/User";

async function getUserById(id) {
  try {
    await connectDatabase();
    return await User.findById(id);
  } catch (error) {
    console.error("Could not find user:", error);
  }
}

export default getUserById;
