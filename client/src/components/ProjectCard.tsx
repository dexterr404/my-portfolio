import Card from "./ui/Card";
import Button from "./ui/Button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

type Snippets = {
  source: string;
  caption?: string;
};

type ProjectCardProps = {
  name: string;
  shortdesc: string;
  live?: string;
  repo?: string;
  snippets?: Snippets[];
};

export default function ProjectCard({name,shortdesc,live,repo,snippets=[]}: ProjectCardProps) {
    const [selectedSnippet, setSelectedSnippet] = useState<Snippets>(snippets[0]);

    return (
        <div className="flex flex-col md:flex-row text-sm animate-fade-in">
            <div className="relative md:max-w-1/2">
                <Card source={selectedSnippet.source} className="w-full" aspect="4/3"/>
                {/* Thumbnail strip */}
                {snippets.length > 1 && (
                    <div className="absolute bottom-2 left-2 flex gap-1 items-center">
                        {snippets.map((snippet, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSnippet(snippet)}
                            className={`rounded-md cursor-pointer overflow-hidden border-2 ${
                            selectedSnippet.source === snippet.source
                                ? "border-blue-600"
                                : "border-white/70"
                            }`}
                        >
                            <Card
                            source={snippet.source}
                            className="max-w-[50px]"
                            aspect="4/3"
                            />
                        </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col pl-4 text-left">
                <h3 className="font-bold text-text-primary">{name}</h3>
                <p className="text-text-secondary">{shortdesc}</p>
                <div className="flex gap-2 mt-auto text-text-secondary">
                    {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <Button icon={ExternalLink} className="text-xs">
                        Live Demo
                        </Button>
                    </a>
                    )}
                    {repo && (
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <Button icon={Github} className="text-xs">
                            Repo
                        </Button>
                    </a>
                    )}
                </div>
            </div>
        </div>
    )
}