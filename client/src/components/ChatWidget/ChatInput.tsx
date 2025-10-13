import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";

type ChatInputProps = {
    setInput: (message: string) => void;
    input: string;
    onSend: (message: string) => void;
}

export default function ChatInput({setInput,input,onSend}: ChatInputProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(input);
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex justify-between px-2 pt-4 pb-1 border-t-1 border-border gap-0.5">
            <input
             maxLength={200}
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Type a message..." className="w-full text-text-primary py-2 px-4 border border-border rounded-md"/>
            <Button disabled={input.length <= 0 ? true : false } type="submit" icon={ChevronRight} className="text-bg bg-text-primary px-3"/>
        </form>
    )
}