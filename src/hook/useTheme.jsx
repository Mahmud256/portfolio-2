import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";

const useTheme = () => {
    const { darkMode, themeColor } = useContext(ThemeContext);

    // Determine the button background color based on themeColor
    const bgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
        themeColor.includes('orange') ? '#f97316' :
        themeColor.includes('green') ? '#10b981' :
        themeColor.includes('red') ? '#ef4444' :
        themeColor.includes('purple') ? '#8b5cf6' :
        themeColor.includes('yellow') ? '#eab308' :
        themeColor.includes('teal') ? '#14b8a6' :
        '#888'; // default

    return { darkMode, themeColor, bgColor };
};

export default useTheme;
