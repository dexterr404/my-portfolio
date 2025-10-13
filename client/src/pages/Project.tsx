import { Link, useParams } from "react-router-dom"
import { MoveLeft } from "lucide-react"
import { projects } from "../data/projects"

import Button from "../components/ui/Button"
import Title from "../components/ui/Title"
import ProjectView from "../components/ProjectView"

export default function Project() {
    const {projectId} = useParams<{ projectId: string}>();

    //Find project based on project name from url
    const selectedProject = projects.find(p => p.id === projectId);

    if (!selectedProject) return <div>Project not found</div>;

    return (
        <main className="max-w-4xl mx-auto bento-tile pb-20">
            <Link to={"/"}>
                <Button icon={MoveLeft} className="text-text-primary">
                    Go Back
                </Button>
            </Link>
            <Title text="Project" className="text-2xl"/>
            <ProjectView 
            key={selectedProject.id}
            name={selectedProject.title}
            longdesc={selectedProject.longdesc}
            live={selectedProject.live}
            repo={selectedProject.repo}
            snippets={selectedProject.snippets}
            link={selectedProject.link}
            />
        </main>
    )
}