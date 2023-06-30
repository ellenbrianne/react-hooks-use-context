import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <main className={theme}>
                {children}
            </main>
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }