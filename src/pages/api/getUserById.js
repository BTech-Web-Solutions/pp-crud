import getUserById from "@/database/queries/getUserById";

export default async function handler(req, res) {
  const user = await getUserById(req.body.id);
  res.status(200).json(user);
}
