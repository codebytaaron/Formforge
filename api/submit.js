import db from "../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { formId } = req.query;
  if (!formId) return res.status(400).end();

  db.prepare(
    "INSERT INTO submissions (form_id, data) VALUES (?, ?)"
  ).run(formId, JSON.stringify(req.body));

  res.json({ success: true });
}
