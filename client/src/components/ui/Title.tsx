import type { LucideProps } from "lucide-react";

type TitleProps = {
    text: string;
    icon?: React.ComponentType<LucideProps>;
    className?: string;
}

export default function Title({text, icon: Icon, className}: TitleProps) {
    return(
        <div className={`flex items-center text-text-primary gap-1 mb-2`}>
            {Icon && <span><Icon size={14} /></span>}
            <h1 className={`font-bold ${className}`}>{text}</h1>
        </div>
    )
}