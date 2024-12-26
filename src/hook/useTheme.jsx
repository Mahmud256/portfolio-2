import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";

const useTheme = () => {
    const { darkMode, themeColor } = useContext(ThemeContext);

    // Determine the button background color based on themeColor
    const bgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    return { darkMode, themeColor, bgColor };
};

export default useTheme;
