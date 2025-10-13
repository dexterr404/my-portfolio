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
                    I’m a passionate Full-Stack Developer with deep experience in the MERN stack, building web, mobile, and desktop applications with clean architecture, high performance, and intuitive user experiences. I’ve led the development of end-to-end projects, including AI-powered SaaS platforms and real-time IoT systems, turning complex requirements into practical, user-friendly solutions.
                </Paragraph>
                <Paragraph indent>
                    I thrive on collaboration and mentorship, enjoying the process of working with teams, sharing knowledge, and finding elegant solutions to challenging problems. Lately, my curiosity has led me into the world of AI and Generative AI, where I focus on creating smarter, adaptive applications that provide real value. I’m committed to learning new technologies and applying best practices, always seeking innovative ways to enhance functionality and user experience.
                </Paragraph>
            </div>
        </BentoTile>
    )
}