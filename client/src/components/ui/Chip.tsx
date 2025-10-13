type ChipProps = {
    label?: string;
    icon?: React.ReactNode;
    showIndicator?: boolean;
    className?: string;
    full?: boolean;
    reverse?: boolean;
}

export default function Chip({label, icon, showIndicator, className, full, reverse} : ChipProps) {
    return (
    <div className={`${full ? "flex" : "inline-flex"} items-center bg-bg text-text-secondary gap-1 text-xs ${reverse ? "flex-row-reverse" : ""} ${className}`}>
      {showIndicator && (
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      )}
      {icon && <span className="text-text-primary">{icon}</span>}
      {label}
    </div>
    )
}