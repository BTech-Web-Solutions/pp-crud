import deleteUser from "@/database/queries/deleteUser";

export default async function handler(req, res) {
  const user = await deleteUser(req.body.id);
  res.status(200).json({ message: user });
}
