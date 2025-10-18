import { Briefcase } from "lucide-react";
import BentoTile from "../BentoGrid/BentoTile";
import Title from "../ui/Title";
import ExperienceList from "../ExperienceList";


export default function ExperienceTile() {
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-2 row-span-2 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div>
                <Title icon={Briefcase} text="Experience" />
                <ExperienceList />
            </div>
        </BentoTile>
    )
}