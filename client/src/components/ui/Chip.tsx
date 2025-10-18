import type { LucideProps } from "lucide-react";

type ChipProps = {
    label?: string;
    icon?: React.ReactNode;
    showIndicator?: boolean;
    className?: string;
    full?: boolean;
    reverse?: boolean;
    externalLink?: React.ComponentType<LucideProps>;
}

export default function Chip({label, icon, showIndicator, className, full, reverse, externalLink: Link} : ChipProps) {
    return (
    <div className={`${full ? "flex" : "inline-flex"} justify-between items-center bg-bg text-text-secondary gap-1 text-xs ${reverse ? "flex-row-reverse" : ""} ${className}`}>
      <div className="flex gap-1 items-center">
        {showIndicator && (
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        )}
        {icon && <span className="text-text-primary">{icon}</span>}
        {label}
      </div>
      {Link && <span className="text-text-primary"><Link size={14}/></span>}
    </div>
    )
}