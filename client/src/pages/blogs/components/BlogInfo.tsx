import { Calendar,Clock } from "lucide-react"

type BlogInfoProps = {
    date: string;
    readTime?: string;
}
export default function BlogInfo({date, readTime}: BlogInfoProps) {
    return(
        <div className="flex justify-between max-sm:flex-col max-sm:items-start items-center text-text-secondary">
            <div className="flex flex-col gap-0 items-start">
                <p className="text-text-primary">Dexter Ian Javier</p>
                <p className="text-sm">Author</p>
            </div>
            <div className="flex gap-3">
                <span className="flex items-center gap-0.5 text-sm"><Calendar size={14}/>{date}</span>
                <span className="flex items-center gap-0.5 text-sm"><Clock size={14} />{readTime}</span>
            </div>
        </div>
    )
}