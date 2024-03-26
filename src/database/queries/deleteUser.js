import connectDatabase from "../connection";
import { User } from "../Models/User";

async function deleteUser(id) {
  try {
    await connectDatabase();

    const filter = { _id: id };

    const deletedUser = await User.findOneAndDelete(filter);

    if (!deletedUser) {
      console.error("User not found or not deleted");
      return null;
    }
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

export default deleteUser;
