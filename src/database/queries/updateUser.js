import connectDatabase from "../connection";
import { User } from "../Models/User";

async function updateUser(id, data) {
  try {
    await connectDatabase();
    const filter = { _id: id };
    const update = { $set: data };
    const options = { new: true };

    const updatedUser = await User.findOneAndUpdate(filter, update, options);

    if (!updatedUser) {
      console.error("User not found or not updated");
      return null;
    }

    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

export default updateUser;
