// ملف: api/summarize.js  (لو تستعمل Next.js أو Vercel Functions)
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed!" });
  const { inputs } = req.body;

  const HF_TOKEN = process.env.HF_TOKEN;

  const hfRes = await fetch("https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn", {
    method: "POST",
    headers: {
    //   Authorization: `Bearer ${HF_TOKEN}`,
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs }),
  });

  const data = await hfRes.json();
  res.status(200).json(data);
}
