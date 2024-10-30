// Root.js
import React from 'react';
import './Root.css';
import { Outlet } from 'react-router-dom';
import ThemeContext, { ThemeProvider } from '../providers/ThemeContext';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import Profile from '../components/Profile/Profile';
import Navbar from '../components/Navbar/Navbar';
import Project from '../page/Project/Project';
import Skill from '../page/Skill/Skill';
import Home from '../components/Home/Home';

const Root = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ darkMode, themeColor, colorMap }) => (
        <div className="h-screen flex transition-colors duration-300">
          <div className="flex fixed h-full">
            <div className="w-auto p-6 items-center">
              <ThemeToggle />
              <ColorSelector />
            </div>
            <div
              className={`w-auto middle-container overflow-y-auto p-6 max-h-screen ${darkMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-neutral-100 text-gray-900'}`}
              style={{
                scrollbarColor: `${themeColor} transparent`,
                '--dynamic-scrollbar-color': colorMap[themeColor],
              }}
            >
              <Profile themeColor={themeColor} />
              <Navbar />
            </div>
          </div>
          <div
            id="main-scroll-container" // Added id for scroll container
            className={`bal ml-96 middle-container max-h-screen w-full ${darkMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-50 text-gray-900'}`}
            style={{
              scrollbarColor: `${themeColor} transparent`,
              '--dynamic-scrollbar-color': colorMap[themeColor],
            }}
          >

            <Outlet />
            <div className="pb-10">
              <div className="max-w-screen-xl mx-auto">
                <Project />
              </div>
            </div>
            <div className="pb-10">
              <div className="max-w-screen-xl mx-auto">
                <Skill />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default Root;
