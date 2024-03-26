import connectDatabase from "../connection";
import { User } from "../Models/User";

async function getUsers() {
  try {
    await connectDatabase();
    return await User.find({});
  } catch (error) {
    console.error("Could not find all users:", error);
  }
}

export default getUsers;
