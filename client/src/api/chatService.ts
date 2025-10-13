import axios from "axios";

export async function chatService(message:string) {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai/chat`,
            { message }
        )
        return res.data;
    } catch (error) {
        console.error("Error in chat api function", error);
    }
}