import { Link } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

import BentoTile from "../BentoGrid/BentoTile"
import Title from "../ui/Title"
import Chip from "../ui/Chip"

export default function SocialTile() {
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-2 row-span-1 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="text-left w-full">
                <Title icon={Link} text="Socials" className="font-medium text-sm"/>
                <div className="flex flex-col gap-1 w-full">
                    <a href="https://github.com/dexterr404" target="_blank" rel="noopener noreferrer">
                        <Chip icon={<FaGithub className="w-4 h-4" />} full label="GitHub" className="border-1 px-3 py-1 border-border rounded-md"/>
                    </a>
                    <a href="https://www.linkedin.com/in/dexter-ian-javier-09397637b/" target="_blank" rel="noopener noreferrer">
                        <Chip icon={<FaLinkedin className="w-4 h-4" />} full label="LinkedIn" className="border-1 px-3 py-1 border-border rounded-md"/>
                    </a>
                </div>
            </div>
        </BentoTile>
    )
}