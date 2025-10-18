import { MoveLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { blogPosts } from "../../data/blogs"

import Button from "../../components/ui/Button"
import Title from "../../components/ui/Title"
import Paragraph from "../../components/ui/Paragraph"
import BlogCard from "./components/BlogCard"

export default function Blog() {
    return(
        <main className="max-w-4xl mx-auto bento-tile">
            <Link to={"/"}>
                <Button icon={MoveLeft} className="text-text-primary">
                    Go Back
                </Button>
            </Link>
            <section className="text-left">
                <Title text="Blogs" className="text-2xl text-text-primary"/>
                <Paragraph className="text-text-primary">What's happening inside my mind</Paragraph>
            </section>
            <section className="grid grid-cols-1 gap-2 py-4">
                {
                    blogPosts.length === 0 ? (
                        <Title text="No blog posts yet."/>
                    ) : (
                        blogPosts.map((blog,index) => (
                            <BlogCard blog={blog} key={index}/>
                        ))
                    )
                }
            </section>
        </main>
    )
}