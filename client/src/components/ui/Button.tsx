import { type LucideProps } from "lucide-react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<LucideProps>;
  reverse?: boolean;
  buttonSize?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({children, className, icon: Icon, reverse = false, buttonSize, onClick, type="button", disabled}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer ${disabled ? "opacity-20" : "opacity-100 hover:opacity-85"} ${className}`}
    >
      {reverse ? (
        <>
          {children}
          {Icon && <Icon className={`${buttonSize || "size-4"}`} />}
        </>
      ) : (
        <>
          {Icon && <Icon className={`${buttonSize || "size-4"}`} />}
          {children}
        </>
      )}
    </button>
  );
}
