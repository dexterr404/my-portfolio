import { X } from "lucide-react";
import { useState,useRef,useEffect } from "react";
import { chatService } from "../../api/chatService";

import Avatar from "../ui/Avatar";
import MyPic from "../../assets/my pic.webp"
import Button from "../ui/Button";
import Chip from "../ui/Chip";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingDots from "./TypingDots";

type ChatWindowProps = {
    onClose: () => void;
}

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow({onClose}: ChatWindowProps) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [input, setInput] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "assistant", content: "Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help!" },
    ]);

    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message immediately
    setMessages(prev => [...prev, { role: "user", content: message }]);
    setInput(""); // clear input
    setIsTyping(true);
    try {
        const res = await chatService(message);

        if (res?.reply) {
        // Add assistant reply
        setMessages(prev => [...prev, { role: "assistant", content: res.reply }]);
        } else {
        // Fallback if no reply
        setMessages(prev => [
            ...prev,
            { role: "assistant", content: "Sorry, I couldn’t process your message." },
        ]);
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again." },
        ]);
    } finally {
        setIsTyping(false);
    }
    };
    
    return(
        <div className="absolute bento-tile min-w-82 sm:min-w-sm md:min-w-md bg-bg shadow-md border-border border rounded-md bottom-full -translate-y-2 right-0">
            <div className="flex items-center gap-2 py-3 px-3 border-b-1 border-border relative">
                <Avatar size={32} source={MyPic} rounded/>
                <div className="flex flex-col gap-0 items-start">
                    <h4 className="p-0 m-0 text-text-primary">Dexter Ian Javier</h4>
                    <Chip showIndicator label="Online" className="p-0 m-0"></Chip>
                </div>
                <Button 
                onClick={() => onClose()}
                icon={X} className="absolute top-4 right-2 text-text-primary"/>
            </div>
            <div className="h-80 sm:min-h-100 sm:h-100 overflow-y-auto overflow-x-hidden p-4">
                {
                    messages.map((message, index) => 
                    (
                        <ChatMessage 
                        key={index}
                        role={message.role}
                        content={message.content}
                        />
                    ))
                }
                {isTyping && (
                <div className="flex items-start gap-2 py-1 pl-2">
                    <Avatar rounded source={MyPic} size={24} />
                    <div className="flex flex-col items-start">
                    <span className="text-xs text-text-secondary mb-1">Dexter Ian Javier</span>
                    <div className="inline-flex bg-accent text-text-secondary px-3 py-2 rounded-md">
                        <TypingDots />
                    </div>
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <ChatInput 
            onSend={handleSendMessage}
            input={input}
            setInput={setInput}/>
            <div className="flex px-3 py-2 gap-1 justify-between text-xs text-text-primary">
                <span className="text-left">Ask me about me, my hobbies, programming, web dev, tech</span>
                <span>{input.length}/200</span>
            </div>
        </div>
    )
}