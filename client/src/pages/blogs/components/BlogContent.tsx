type BlogContentProps = {
    children?: React.ReactNode;
    className?: string;
}

export default function BlogContent({children,className}: BlogContentProps) {
    return(
        <div className={`py-8 ${className}`}>
            {children}
        </div>
    )
}