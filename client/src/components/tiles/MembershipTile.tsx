import { ExternalLink, Users } from "lucide-react";
import BentoTile from "../BentoGrid/BentoTile";
import Title from "../ui/Title";
import Chip from "../ui/Chip";

export default function MembershipTile() {
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-2 row-span-1 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="text-left w-full">
                <Title icon={Users} text="Membership" className="font-medium text-sm"/>
                <a
                href="https://drive.google.com/file/d/1BNRQYTDmokiVRAHcJGt_-jbYFcaGmJbY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Chip
                    className="rounded-md border px-3 py-1 border-border hover:bg-muted cursor-pointer hover:bg-accent/50 transition-colors"
                    label="Philippine Institute of Cybersecurity Professionals (PICSPro)"
                    full
                    externalLink={ExternalLink}
                />
                </a>
            </div>
        </BentoTile>    
    )
}