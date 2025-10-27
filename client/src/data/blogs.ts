type BlogPost = {
    title: string;
    date: string;
    url: string;
    readTime?: string;
}
   
export const blogPosts: BlogPost[] = [
    { title: "The idea that won't leave you alone", date: "Oct 2025", url: "/blogs/the-idea-that-wont-leave-you-alone", readTime: "4 min"},
    { title: "Sweetness of Debugging", date: "Oct 2025", url: "/blogs/sweetness-of-debugging", readTime: "3 min" },
];