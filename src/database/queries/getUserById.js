import connectDatabase from "../connection";
import { User } from "../Models/User";

async function getUserById(id) {
  try {
    await connectDatabase();
    const user = await User.findById("6603690442d738e4a6ab08cd");
    return user;
  } catch (error) {
    console.error("Could not find user:", error);
  }
}

export default getUserById;
