type BlogParagraphProps = {
    children?: React.ReactNode;
    className?: string;
}

export default function BlogParagraph({ children,className }: BlogParagraphProps) {
    return (
        <p className={`text-text-secondary ${className}`}>
            {children}
        </p>
    )
}