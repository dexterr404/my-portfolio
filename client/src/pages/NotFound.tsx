import Paragraph from "../components/ui/Paragraph";
import Title from "../components/ui/Title";

export default function NotFound() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center text-center text-text-primary max-w-lg bento-tile rounded-xl p-12 border-1 border-border bg-bg relative">
                <div className="text-8xl text-text-primary font-bold mb-6 opacity-70 select-none">
                    404
                </div>
                <div className="mb-4">
                    <Title text="Page Not Found"/>
                </div>
                <Paragraph className="text-text-secondary leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                </Paragraph>
            </div>
        </main>
    )
}