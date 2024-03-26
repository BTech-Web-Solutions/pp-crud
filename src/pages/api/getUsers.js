import getUsers from "@/database/queries/getUsers";

export default async function handler(_, res) {
  const users = await getUsers();
  res.status(200).json({ message: users });
}
