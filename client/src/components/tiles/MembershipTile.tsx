import { ExternalLink, Users } from "lucide-react";
import BentoTile from "../BentoGrid/BentoTile";
import Title from "../ui/Title";
import Chip from "../ui/Chip";

export default function MembershipTile() {
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-2 row-span-1 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="text-left">
                <Title icon={Users} text="Membership" className="font-medium text-sm"/>
                <a
                href="https://drive.google.com/file/d/1BNRQYTDmokiVRAHcJGt_-jbYFcaGmJbY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Chip
                    icon={<ExternalLink size={14} className="text-text-secondary" />}
                    reverse
                    className="rounded-md border px-3 py-1 border-border hover:bg-muted transition cursor-pointer"
                    label="Philippine Institute of Cybersecurity Professionals (PICSPro)"
                />
                </a>
            </div>
        </BentoTile>    
    )
}