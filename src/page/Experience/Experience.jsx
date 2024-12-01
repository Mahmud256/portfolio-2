// ExperienceComponent.js

import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeContext';

const Experience = () => {

    const { darkMode, themeColor } = useContext(ThemeContext);

    return (
        <div id='experience'>
            <div className='flex justify-center p-20'data-aos="zoom-in">
                <div className={`max-w-full mx-auto p-4 border shadow-md ${darkMode === 'dark'
                    ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                    } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}>
                    <h2 className={`text-4xl text-center font-bold pb-4 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>My Experience</h2>
                    <p className={`text-base ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        I have worked with books for over 3 years at Medisucess, a leading book company. During my time, I was actively involved in the typing work of the book industry. I take pride in contributing to the success of Medisucess and playing a role in bringing valuable content to readers in Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;