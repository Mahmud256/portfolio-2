// ColorSelector.js
import React, { useContext, useState } from 'react';

import ThemeContext from '../../providers/ThemeContext';
import { FaPalette } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';


const ColorSelector = () => {
    const { themeColor, setThemeColor, colorMap } = useContext(ThemeContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="relative lg:mt-6">
            <button
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="p-3 rounded-full bg-gray-600 text-white flex items-center"
                style={{ backgroundColor: colorMap[themeColor] }}
            >
                <FaPalette />
                <AiFillCaretDown />
            </button>
            {dropdownVisible && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
                    {Object.keys(colorMap).map((color, index) => (
                        <button
                            key={index}
                            className={`block px-4 py-2 ${color} hover:bg-gray-100 flex items-center`}
                            onClick={() => {
                                setThemeColor(color);
                                setDropdownVisible(false);
                            }}
                        >
                            <FaPalette className={`mr-2 ${color}`} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorSelector;
