type AvatarProps = {
    source?: string;
    alt?: string;
    size?: number;
    rounded?: boolean;
    className?: string;
}

export default function Avatar({source, alt="avatar", size=48, rounded=false, className=""} : AvatarProps) {
    return(
        <img src={source} alt={alt} style={{ width: size, height: size }} className={`w-full object-cover  ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`}/>
    )
}