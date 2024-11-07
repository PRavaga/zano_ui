'use client';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

// AppContext type
interface AppContextProps {
  isWalletConnected: boolean;
  setWalletConnected: Dispatch<SetStateAction<boolean>>;
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>
  onLogOut: () => void;
  theme: ThemeProps,
  toggleTheme: () => void;
}
// theme type
type ThemeProps = "light" | "dark"

// Global states
const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    // Wallet status
    const [isWalletConnected, setWalletConnected] = useState(false);
    // Auth status
    const [isAuth, setAuth] = useState(false);
    // Theme
    const [theme,setTheme] = useState<ThemeProps>("dark");

    // Logout function
    const onLogOut = () => {
        setAuth(false);
        setWalletConnected(false);
    };

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // Save to localstorage
        localStorage.setItem("theme", newTheme);
    };

    // Get saved theme from localStorage
    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") || "light") as ThemeProps;

        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        // Applying theme attribute to html element
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // Props values
    const values = {
        isWalletConnected, 
        setWalletConnected, 
        isAuth, 
        setAuth,
        onLogOut,
        theme,
        toggleTheme
    };

    // Wrap provider 
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
