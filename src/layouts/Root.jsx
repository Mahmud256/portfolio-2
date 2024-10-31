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
import Education from '../page/Education/Education';
import Experience from '../page/Experience/Experience';
import Contact from '../page/Contact/Contact';

const Root = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ darkMode, themeColor, colorMap }) => (
        <div className=" flex transition-colors duration-300 border-8 animate-border ">
          {/* Side Bar */}
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
          {/* main Bar */}
          <div className="flex-1 ml-96 middle-container w-full " style={{
            scrollbarColor: `${themeColor} transparent`,
            '--dynamic-scrollbar-color': colorMap[themeColor],
          }}>


            <div className="">
              <div className="max-w-screen-xl mx-auto">
                <Outlet />
              </div>
            </div>
            {/* <div className="p-8">
              <div className="max-w-screen-xl mx-auto">
                <Home />
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-screen-xl mx-auto">
                <Project />
              </div>
            </div>
            <div className="">
              <div className="max-w-screen-xl mx-auto">
                <Skill />
              </div>
            </div>
            <div className="">
              <div className="max-w-screen-xl mx-auto">
                <Education />
              </div>
            </div>
            <div className="">
              <div className="max-w-screen-xl mx-auto">
                <Experience />
              </div>
            </div>
            <div className="">
              <div className="max-w-screen-xl mx-auto">
                <Contact />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default Root;