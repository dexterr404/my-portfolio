import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import BlogCardTitle from "./BlogCardTitle";
import BlogCardInfo from "./BlogCardInfo";

type Blog = {
    title: string;
    date: string;
    url: string;
    readTime?: string;
}

type BlogCardProps = {
    blog: Blog;
    className?: string;
}

export default function BlogCard({blog, className}: BlogCardProps) {
    return(
        <Link to={blog.url} className={`relative bento-tile rounded-xl p-4 border-1 flex flex-col justify-start bg-bg border-border hover:bg-accent/50 transition-colors ${className}`}>
            <BlogCardTitle text={blog.title}/>
            <BlogCardInfo date={blog.date} readTime={blog.readTime}/>
            <ArrowUpRight className="absolute top-2 right-2 w-4 h-4 text-text-primary group-hover:text-text-secondary transition-colors flex-shrink-0" />
        </Link>
    )
}