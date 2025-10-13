export default function TypingDots() {
  return (
    <div className="flex justify-self-start items-baseline gap-1">
      <span className="text-xs text-text-secondary">Typing</span>

        <span className="w-1 h-1 bg-text-secondary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1 h-1 bg-text-secondary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1 h-1 bg-text-secondary rounded-full animate-bounce" />
    </div>
  );
}