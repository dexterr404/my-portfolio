import express from "express";
import { chatService } from "../services/chatService";

export const chatController = async(req: express.Request,res: express.Response) => {
    try {
        const { message } = req.body;

        if(!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const { reply } = await chatService(message);
        return res.status(200).json({ reply });
    } catch (error) {
        console.error("Chat Controller Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
} 