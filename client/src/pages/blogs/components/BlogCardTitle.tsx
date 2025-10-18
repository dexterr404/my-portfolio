type BlogCardTitleProps = {
    className?: string;
    text: string;
}

export default function BlogCardTitle({className,text}: BlogCardTitleProps) {
    return(
        <div className={`flex items-center text-text-primary gap-1 mb-2 text-left`}>
            <h1 className={`font-bold ${className}`}>{text}</h1>
        </div>
    )
}