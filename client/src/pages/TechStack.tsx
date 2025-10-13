import { frontendTechIcons,backendTechIcons,devOpsCloudTechIcons, aiTechIcons,devToolsTechIcons } from "../data/techIcons";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

import StackIcon from "tech-stack-icons";
import Paragraph from "../components/ui/Paragraph";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

export default function TechStack() {
    return(
        <main className="max-w-4xl mx-auto bento-tile">
            <Link to={"/"}>
                <Button icon={MoveLeft} className="text-text-primary">
                    Go Back
                </Button>
            </Link>
            <div className="text-left">
                <Title text="Tech Stack" className="text-2xl text-text-primary"/>
                <Paragraph className="text-text-primary">Technologies I've used</Paragraph>
            </div>
            <br/>
            <Title text="Frontend"/>
            <div className="flex flex-wrap text-xs gap-x-14 gap-y-4 mt-1">
                {
                    frontendTechIcons.map(({ name, label }) => (
                        <div key={name} className="flex flex-col items-center gap-1">
                            <StackIcon name={name} className="size-4" />
                            <span className="text-text-secondary">{label}</span>
                        </div>
                    ))
                }
            </div>
            <br />
            <Title text="Backend"/>
            <div className="flex flex-wrap text-xs gap-x-14 gap-y-4 mt-1">
                {
                    backendTechIcons.map(({ name, label }) => (
                        <div key={name} className="flex flex-col items-center gap-1">
                            <StackIcon name={name} className="size-4" />
                            <span className="text-text-secondary">{label}</span>
                        </div>
                    ))
                }
            </div>
            <br />
            <Title text="DevOps & Cloud"/>
            <div className="flex flex-wrap text-xs gap-x-14 gap-y-4 mt-1">
                {
                    devOpsCloudTechIcons.map(({ name, label }) => (
                        <div key={name} className="flex flex-col items-center gap-1">
                            <StackIcon name={name} className="size-4" />
                            <span className="text-text-secondary">{label}</span>
                        </div>
                    ))
                }
            </div>
            <br />
            <Title text="Artificial Intelligence"/>
            <div className="flex flex-wrap text-xs gap-x-14 gap-y-4 mt-1">
                {
                    aiTechIcons.map(({ name, label }) => (
                        <div key={name} className="flex flex-col items-center gap-1">
                            <StackIcon name={name} className="size-4" />
                            <span className="text-text-secondary">{label}</span>
                        </div>
                    ))
                }
            </div>
            <br />
            <Title text="Developer Tools"/>
            <div className="flex flex-wrap text-xs gap-x-14 gap-y-4 mt-1">
                {
                    devToolsTechIcons.map(({ name, label }) => (
                        <div key={name} className="flex flex-col items-center gap-1">
                            <StackIcon name={name} className="size-4" />
                            <span className="text-text-secondary">{label}</span>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}