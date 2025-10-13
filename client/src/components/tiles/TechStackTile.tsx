import { ChevronRight, Layers } from "lucide-react";
import { backendTechIcons, frontendTechIcons } from "../../data/techIcons";
import { Link } from "react-router-dom";

import BentoTile from "../BentoGrid/BentoTile";
import StackIcon from "tech-stack-icons";
import Button from "../ui/Button";
import Title from "../ui/Title";

export default function TechStackTile() {
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-4 row-span-2 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="w-full relative">
                <Title icon={Layers} text="Tech Stack" />
                <Link to={'/tech-stack'}>
                    <Button className="text-xs absolute top-1 right-1 text-text-secondary" reverse icon={ChevronRight}>
                        See all
                    </Button>    
                </Link>
                <div className="flex flex-col text-left mt-2">
                    <h1 className="font-semibold text-text-primary">
                        Frontend
                    </h1>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] text-xs gap-4 mt-1">
                        {
                            frontendTechIcons.slice(0, 5).map(({ name, label }) => (
                                <div key={name} className="flex flex-col items-center gap-1">
                                    <StackIcon name={name} className="size-4" />
                                    <span className="text-text-secondary">{label}</span>
                                </div>
                            ))
                        }
                    </div>
                    <br />
                    <h1 className="font-semibold text-text-primary">
                        Backend
                    </h1>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] text-xs gap-4 mt-1">
                        {
                            backendTechIcons.slice(0, 5).map(({ name, label }) => (
                                <div key={name} className="flex flex-col items-center gap-1">
                                    <StackIcon name={name} className="size-4" />
                                    <span className="text-text-secondary">{label}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </BentoTile>
    )
}