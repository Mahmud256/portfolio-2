import React, { useContext } from 'react';
import './Root.css';
import { Outlet } from 'react-router-dom';
import ThemeContext from '../providers/ThemeContext'; // Only import the context
import Navbar from '../components/Navbar/Navbar';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';

const Root = () => {
  const { darkMode, themeColor, colorMap } = useContext(ThemeContext);

  return (
    <div className="flex">
      {/* Sidebar (Navbar) */}
      <div
        className={`w-auto fixed middle-container overflow-y-auto p-6 max-h-screen ${
          darkMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-neutral-100 text-gray-900'
        }`}
        style={{
          scrollbarColor: `${themeColor} transparent`,
          '--dynamic-scrollbar-color': colorMap[themeColor],
        }}
      >
        {/* Navbar for larger screens */}
        <div className="hidden sm:block">
          <Navbar />
        </div>

        {/* Navbar for smaller screens */}
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 lg:ml-72 lg:middle-container bg-neutral-50 text-gray-900"
        style={{
          scrollbarColor: `${themeColor} transparent`,
          '--dynamic-scrollbar-color': colorMap[themeColor],
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
