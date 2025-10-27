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
  "ApplAi is a modern web application I developed using the PERN stack (PostgreSQL, Express.js, React, Node.js). It features Google OAuth2 for secure authentication and integrates the OpenAI API with RAG (Retrieval-Augmented Generation) using vector embeddings to provide context-aware, personalized interview preparation based on each user’s job applications.",
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
