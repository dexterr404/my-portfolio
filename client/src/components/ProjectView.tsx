import { useState } from "react";
import { ExternalLink,Github } from "lucide-react";

import Card from "./ui/Card";
import Button from "./ui/Button";
import Paragraph from "./ui/Paragraph";
import Title from "./ui/Title";

type Snippets = {
  source: string;
  caption?: string;
};

type ProjectCardProps = {
  name: string;
  longdesc: string;
  live?: string;
  repo?: string;
  link?: string;
  snippets?: Snippets[];
};

export default function ProjectView({name,longdesc,live,repo,link,snippets=[]}: ProjectCardProps) {
    const [selectedSnippet, setSelectedSnippet] = useState<Snippets>(snippets[0]);

    return(
        <main>
            <div className="relative w-full">
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
                <Title text={name} className="mt-2 text-xl"/>
                {
                    link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button icon={ExternalLink} className="text-xs bg-red-700 text-white">
                            Youtube Link
                        </Button>
                    </a>
                    )
                }
                <Paragraph className="whitespace-pre-line">{longdesc}</Paragraph>
                <div className="flex gap-2 mt-4 text-text-secondary">
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
        </main>
    )
}