import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 🧠 My personal context in first person
const aboutMeSnippets = [
  "",
];

(async () => {
  try {
    console.log("🚀 Generating embeddings for personal data...");
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: aboutMeSnippets,
    });

    const rows = embeddingResponse.data.map((item, i) => ({
      content: aboutMeSnippets[i],
      embedding: item.embedding,
    }));

    console.log("📦 Uploading to Supabase...");
    const { error } = await supabase.from("about_me_embeddings").insert(rows);

    if (error) throw error;
    console.log("✅ Successfully uploaded all personal embeddings!");
  } catch (err) {
    console.error("❌ Upload failed:", err);
  }
})();
