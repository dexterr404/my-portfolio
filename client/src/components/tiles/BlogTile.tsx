import { Link, useNavigate } from "react-router-dom"
import { FileText } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { blogPosts } from "../../data/blogs"

import BentoTile from "../BentoGrid/BentoTile"
import Title from "../ui/Title"
import Button from "../ui/Button"

export default function BlogTile() {
    const navigate = useNavigate();
    return(
        <BentoTile hasBorder className="col-span-1 md:col-span-2 row-span-1 hover:shadow-[0_2px_2px_0_var(--color-border)]">
            <div className="relative text-left w-full h-full flex flex-col">
                <Title icon={FileText} text="Blog" className="font-medium text-sm"/>
                <Link to={"/blogs"} className="absolute right-0 top-0.5 text-text-secondary text-xs ">View All</Link>
                {blogPosts.length === 0 ? (
                    // Empty state
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center space-y-2">
                            <div className="text-text-primary text-sm">
                                Coming Soon
                            </div>
                            <div className="text-xs text-text-secondary">
                                Writing in progress...
                            </div>
                        </div>
                    </div>
                ) : (
                    // Blog posts list
                    <div className="relative flex flex-col gap-1 w-full">
                        {blogPosts.slice(0, 1).map((post, index) => (
                            <Button 
                            key={index}
                            onClick={() => navigate(post.url)}
                                
                                className="group border border-border rounded-md px-3 py-2 hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1 min-w-0">
                                        <div className=" text-sm font-medium truncate text-text-primary group-hover:text-text-secondary">
                                            {post.title}
                                        </div>
                                        <div className="text-xs text-text-secondary flex items-center gap-2 mt-0.5">
                                            <span>{post.date}</span>
                                            {post.readTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="absolute right-2 w-4 h-4 text-text-primary group-hover:text-text-secondary transition-colors flex-shrink-0" />
                                </div>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </BentoTile>
    )
}