type BentoTileProps = {
    width?: string;
    height?: string;
    className?: string;
    children?:React.ReactNode;
    hasBorder?: boolean;
};

export default function BentoTile({width, height, className, children, hasBorder} : BentoTileProps) {
    return(
        <section className={`bento-tile rounded-xl p-4 border-1 flex bg-bg ${hasBorder ? "border-1 border-border" : "border-none"} ${className}`} style={{ width, height }}>
            {children}
        </section>
    );
}