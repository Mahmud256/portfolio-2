// ThemeContext.js
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') || 'light');
    const [themeColor, setThemeColor] = useState(localStorage.getItem('themeColor') || 'text-blue-500');

    const colorMap = {
        'text-blue-500': '#3b82f6',
        'text-pink-500': '#ec4899',
        'text-orange-500': '#f97316'
    };

    useEffect(() => {
        document.body.className = darkMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
        localStorage.setItem('theme', darkMode);
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('themeColor', themeColor);
    }, [themeColor]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ darkMode, themeColor, setThemeColor, toggleDarkMode, colorMap }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
