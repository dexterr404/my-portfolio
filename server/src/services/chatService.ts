import { client } from "./openAiService";
import { supabase } from "./supabaseService";

type MatchResult = {
  id: string;
  content: string;
  similarity: number;
};

export async function chatService(message: string) {
    try {
        if(!message) throw new Error("Message is required");

        const embeddingResponse = await client.embeddings.create({
            model: "text-embedding-3-small",
            input: message
        });

        const queryEmbedding = embeddingResponse.data[0].embedding;

        const { data: matches, error } = await supabase.rpc("match_about_me_vectors", {
            query_embedding: queryEmbedding,
            match_count: 5
        });

        if(error) throw new Error(`Supabase match error: ${error.message}`);

        const context = matches?.map((m: MatchResult) => m.content).join('\n') || "";

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are Dexter's personal AI assistant. 
                    Answer questions in first person, as if you are Dexter himself.
                    Keep responses friendly, natural, and concise.
                    If a user asks a general knowledge question (e.g., geography, trivia, etc.),
                    answer it briefly and politely, then redirect the conversation back to Dexter's skills, projects, or experiences.`,
                },
                {
                role: "user",
                content: `User message: "${message}"\n\nRelevant context about Dexter:\n${context}`,
                },
            ],
            temperature: 0.7
        });

        const reply = completion.choices[0].message.content;

        return { reply };
    } catch (error) {
        console.error("Chat Service Error:", error);
        return { reply: "Sorry, I encountered an error answering that question."};
    }
}