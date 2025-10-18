type BlogTitleProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function BlogTitle({children,className}: BlogTitleProps) {
    return(
        <div className={`flex items-center text-text-primary text-3xl gap-1 mb-2 text-left`}>
            <h1 className={`font-bold ${className}`}>{children}</h1>
        </div>
    )
}