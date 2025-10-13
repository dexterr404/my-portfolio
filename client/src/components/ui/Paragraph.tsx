type ParagraphProps = {
    children?: React.ReactNode;
    className?: string;
    indent?: boolean;
}

export default function Paragraph({children, className, indent}: ParagraphProps) {
    return(
        <p className={`text-left mt-2 text-text-secondary ${indent && "indent-5"} ${className}`}>
            {children}
        </p>
    )
}