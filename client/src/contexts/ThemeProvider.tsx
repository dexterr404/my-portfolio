import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children } : { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) || "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = (mode: "light" | "dark" ) => {
            root.classList.remove("light", "dark");
            root.classList.add(mode);
        };
        
        applyTheme(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be within a ThemeProvider");
    }

    return context;
}