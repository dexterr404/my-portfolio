import { UserRound } from "lucide-react";

import Title from "../ui/Title";
import BentoTile from "../BentoGrid/BentoTile";
import Paragraph from "../ui/Paragraph";

export default function AboutTile() {
    return(
        <BentoTile hasBorder  className="col-span-1 md:col-span-4 row-span-1 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="text-sm">
                <Title icon={UserRound} text="About" />
                <Paragraph indent>
                    I’m a Full-Stack Developer with expertise in React, TypeScript, and Node.js, building scalable, high-performance applications that blend clean architecture with intuitive design. I’ve developed and deployed AI-powered SaaS platforms and real-time web applications using technologies like Supabase, PostgreSQL, OpenAI API, and WebSockets, turning complex ideas into seamless, user-centered experiences.
                </Paragraph>
                <Paragraph indent>
                    I thrive on collaboration and problem-solving, sharing knowledge, refining workflows, and designing systems that balance performance with simplicity. Lately, my focus has been on Generative AI and RAG-based applications, exploring how intelligent systems can elevate user interaction and functionality. I’m driven by curiosity, continuous learning, and the goal of building software that feels fast, reliable, and genuinely impactful.
                </Paragraph>
            </div>
        </BentoTile>
    )
}