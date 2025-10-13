import { MessageCircleMore } from "lucide-react";
import { useState } from "react";

import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
    const [isChatWindow, setIsChatWindow] = useState<boolean>(false);

    return(
        <div className=" fixed bottom-2 right-2">
            { isChatWindow && <ChatWindow onClose={() => setIsChatWindow(false)}/> }
            <div 
            onClick={() => setIsChatWindow(true)}
            className=" bg-text-primary rounded-4xl hover:opacity-85 cursor-pointer">
                <div
                className="flex items-center gap-1 px-3 py-2">
                    <MessageCircleMore className="text-bg pl-2 animate-swing"/>
                    <h4 className="text-bg font-medium"> Ask me anything</h4>
                </div>
            </div>
        </div>
    )
}