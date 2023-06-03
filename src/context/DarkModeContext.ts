import { createContext } from "react";

export const DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => {},
    setDarkMode: (isDarkMode: boolean) => {},
});
