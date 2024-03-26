import updateUser from "@/database/queries/updateUser";

export default async function handler(req, res) {
  const user = await updateUser(req.body.id, req.body.data);
  res.status(200).json({ message: user });
}
