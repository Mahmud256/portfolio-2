// Importing necessary modules from React
import { createContext, useState, useEffect } from 'react';

// Create a new context for theme management
const ThemeContext = createContext();

// The provider component that will wrap the application
export const ThemeProvider = ({ children }) => {
    // State to manage the current theme mode (light/dark)
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') || 'light' // Retrieve the theme from localStorage or default to 'light'
    );

    // State to manage the theme color
    const [themeColor, setThemeColor] = useState(
        localStorage.getItem('themeColor') || 'text-blue-500' // Retrieve the color from localStorage or default to 'text-blue-500'
    );

    // A mapping of theme color classes to their corresponding hex codes
    const colorMap = {
        'text-blue-500': '#3b82f6',  // Blue
        'text-pink-500': '#ec4899',  // Pink
        'text-orange-500': '#f97316', // Orange
        'text-green-500': '#22c55e',  // Green
        'text-red-500': '#ef4444',    // Red
        'text-purple-500': '#a855f7', // Purple
        'text-yellow-500': '#eab308', // Yellow
        'text-teal-500': '#14b8a6'    // Teal
    };

    const bgColor = colorMap[themeColor] || '#888';


    // Effect to update the body's class when the theme changes
    useEffect(() => {
        // Change the body class based on the current theme
        document.body.className = darkMode === 'dark'
            ? 'bg-gray-900 text-white' // Dark mode styles
            : 'bg-white text-gray-900'; // Light mode styles

        // Store the current theme in localStorage
        localStorage.setItem('theme', darkMode);
    }, [darkMode]); // Trigger this effect whenever `darkMode` changes

    // Effect to store the theme color in localStorage when it changes
    useEffect(() => {
        localStorage.setItem('themeColor', themeColor); // Update localStorage with the current theme color
    }, [themeColor]); // Trigger this effect whenever `themeColor` changes

    // ✅ Inject scrollbar style on themeColor change
    useEffect(() => {
        let styleTagId = 'dynamic-scrollbar-style';
        let styleTag = document.getElementById(styleTagId);

        const scrollbarCSS = `
            ::-webkit-scrollbar {
                width: 6px;
            }
            ::-webkit-scrollbar-track {
                background: white;
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${bgColor};
            }
                
        `;

        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleTagId;
            document.head.appendChild(styleTag);
        }

        styleTag.innerHTML = scrollbarCSS;
    }, [bgColor]);

    // Function to toggle between light and dark modes
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')); // Switch between 'light' and 'dark'
    };

    return (
        // Provide the context values to children components
        <ThemeContext.Provider
            value={{
                darkMode,        // Current theme mode
                themeColor,      // Current theme color
                setThemeColor,   // Function to set the theme color
                toggleDarkMode,  // Function to toggle the theme mode
                colorMap         // Mapping of colors to their hex values
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
// {children} Render children wrapped within the ThemeContext provider

// Export the ThemeContext for consumption in other components
export default ThemeContext;
