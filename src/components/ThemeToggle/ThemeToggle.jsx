// ThemeToggle.js
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../../providers/ThemeContext';


const ThemeToggle = () => {
    const { darkMode, toggleDarkMode, themeColor, colorMap } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleDarkMode}
            className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 flex items-center"
            style={{ backgroundColor: colorMap[themeColor] }}
        >
            {darkMode === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;
