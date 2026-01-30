import db from "../../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { id, name } = req.body;
  if (!id || !name) return res.status(400).json({ error: "Missing fields" });

  db.prepare("INSERT INTO forms (id, name) VALUES (?, ?)").run(id, name);
  res.json({ success: true });
}
