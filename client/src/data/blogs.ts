type BlogPost = {
    title: string;
    date: string;
    url: string;
    readTime?: string;
}
   
export const blogPosts: BlogPost[] = [
    { title: "Sweetness of Debugging", date: "Oct 2025", url: "/blogs/sweetness-of-debugging", readTime: "3 min" },
];