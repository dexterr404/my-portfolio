import { MapPin, Download, Mail } from "lucide-react";

import BentoTile from "../BentoGrid/BentoTile";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import MyPic from "../../assets/my pic.webp"
import DarkModeToggle from "../DarkModeToggle";

export default function OverviewTile() {
    return(
        <BentoTile className="col-span-1 md:col-span-6 row-span-1">
            <div className="relative flex flex-col sm:flex-row max-sm:items-center w-full gap-3">
                <Avatar source={MyPic} alt="me" size={150} rounded={false}/>
                <div className="flex flex-col items-start py-1 justify-between">
                    <div>
                        <h1 className="font-bold text-2xl text-text-primary">Dexter Ian Javier</h1>
                        <div className="flex items-center text-text-primary text-sm gap-0.5">
                            <MapPin size={13}/> Quezon, Philippines
                        </div>
                    </div>
                    <div className="font-semibold text-text-primary">Full-Stack Developer</div>
                    <div className="flex items-center gap-0.5 justify-between w-full">
                        <a href="mailto:dexterr404.dev@gmail.com?subject=Project Inquiry&body=Hi Dexter, I’d like to know more about your work.">
                            <Button className="text-xs bg-text-primary text-bg" icon={Mail}>
                                Send email
                            </Button>
                        </a>
                        <a download href="/Dexter_Javier_Resume.pdf">
                            <Button className="text-xs bg-text-primary text-bg" icon={Download}>
                                Resume
                            </Button>
                        </a>
                    </div>
                </div>
                <DarkModeToggle />
            </div>
        </BentoTile>
    )
}
