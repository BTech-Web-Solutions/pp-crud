import connectDatabase from "../connection";
import { User } from "../Models/User";

async function createUser({ name, whatsapp, numbers }) {
  try {
    await connectDatabase();
    return await User.create({ name, whatsapp, numbers });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export default createUser;
