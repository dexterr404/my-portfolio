type BlogCardInfoProps = {
    date: string;
    readTime?: string;
}

export default function BlogCardInfo({date, readTime}: BlogCardInfoProps) {
    return(
        <div className="flex gap-1 items-center text-sm text-text-secondary">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
        </div>
    )
}