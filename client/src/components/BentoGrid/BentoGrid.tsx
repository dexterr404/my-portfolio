import ChatWidget from "../ChatWidget/ChatWidget"
import AboutTile from "../tiles/AboutTile"
import BlogTile from "../tiles/BlogTile"
import ExperienceTile from "../tiles/ExperienceTile"
import MembershipTile from "../tiles/MembershipTile"
import OverviewTile from "../tiles/OverviewTile"
import ProjectTile from "../tiles/ProjectTile"
import SocialTile from "../tiles/SocialTile"
import TechStackTile from "../tiles/TechStackTile"

export default function BentoGrid() {
    return(
        <main className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-auto gap-2 max-w-4xl mx-auto">
            <OverviewTile />
            <AboutTile />
            <ExperienceTile />
            <TechStackTile />
            <BlogTile />
            <ProjectTile />
            <MembershipTile />
            <SocialTile />
            <ChatWidget />
        </main>
    )
}