import db from "../../lib/db";

export default function handler(req, res) {
  const { formId } = req.query;
  if (!formId) return res.status(400).end();

  const rows = db
    .prepare("SELECT * FROM submissions WHERE form_id = ? ORDER BY created_at DESC")
    .all(formId);

  res.json(rows);
}
