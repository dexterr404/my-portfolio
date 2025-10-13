import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme( theme === "light" ? "dark" : "light" );
  };

  return (
    <div className='absolute top-0 right-0'>
        <button
            onClick={toggleTheme}
            className={`relative w-11 h-5.5 rounded-2xl transition-colors duration-300 cursor-pointer bg-accent`}
            aria-label="Toggle dark mode"
            >
            <div className={`absolute top-0 left-0 size-5.5 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${
                theme === "dark" ? 'translate-x-5.5' : 'translate-x-0'
            }`}>
                {theme === "dark" ? (
                <Moon className="size-3 text-slate-800" />
                ) : (
                <Sun className="size-3 text-slate-800" />
                )}
            </div>
        </button>
    </div>

  );
}