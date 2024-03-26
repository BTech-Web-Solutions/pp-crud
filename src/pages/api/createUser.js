import createUser from "@/database/queries/createUser";

export default async function handler(req, res) {
  const user = await createUser(req.body);
  res.status(200).json({ message: user });
}
