import { useState } from "react";
import { Blocks, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

import BentoTile from "../BentoGrid/BentoTile";
import ProjectCard from "../ProjectCard";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function ProjectTile() {
    const [projectIndex, setProjectIndex] = useState(0);
    const selectedProject = projects[projectIndex];

    const handlePrevProject = () => {
        setProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    const handleNextProject = () => {
        setProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }

    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-4 row-span-2 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="flex">
                <div className="flex relative flex-col">
                    <Title icon={Blocks} text="Project" />
                    <Link to={`/projects/${selectedProject.id}`}>
                        <Button icon={ExternalLink} className="absolute -top-1 -right-1 text-text-primary"/>
                    </Link>
                    {selectedProject && (
                        <ProjectCard
                        key={selectedProject.id}
                        name={selectedProject.title}
                        shortdesc={selectedProject.shortdesc}
                        live={selectedProject.live}
                        repo={selectedProject.repo}
                        snippets={selectedProject.snippets}
                        />
                    )}
                    <div className="absolute left-0 top-1/2">
                        <Button
                        onClick={handlePrevProject}
                        icon={ChevronLeft} buttonSize="size-6" className="text-bg opacity-20 bg-border"/>
                    </div>
                    <div className="absolute right-0 top-1/2">
                        <Button 
                        onClick={handleNextProject}
                        icon={ChevronRight} buttonSize="size-6" className="text-bg opacity-20 bg-border"/>
                    </div>
                </div>
            </div>
        </BentoTile>
    )
}