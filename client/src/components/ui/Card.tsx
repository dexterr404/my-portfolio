type CardProps = {
    source?: string;
    className?: string;
    aspect?: string;
}

export default function Card({source,className,aspect = "4/3"}: CardProps) {
    const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "video"
      ? "aspect-video"
      : `aspect-[${aspect}]`;

    return(
        <div className={`${aspectClass} overflow-hidden rounded-md ${className}`}>
            <img src={source} className="object-cover w-full h-full"/>
        </div>
    )
}