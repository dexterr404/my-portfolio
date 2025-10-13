import Avatar from "../ui/Avatar";
import MyPic from "../../assets/my pic.webp"

type ChatMessageProps = {
    role: string;
    content: string;
}

export default function ChatMessage({role, content}: ChatMessageProps) {
    return(
        <>
            {
                role === "assistant" && (
                    <div className="flex items-center gap-1 py-1">
                        <Avatar rounded source={MyPic} size={24} />
                        <span className="text-xs text-text-secondary">Dexter Ian Javier</span>
                    </div>
                )
            }
            <div className={`mb-2 p-2 rounded-md max-w-3/4 text-left ${role === "assistant" ? "bg-accent text-text-secondary" : "bg-text-primary text-bg justify-self-end"} w-fit text-sm`}>
            {content}
            </div>
        </>
    )
}