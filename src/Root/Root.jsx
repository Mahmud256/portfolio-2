import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeContext from '../providers/ThemeContext'; // Only import the context
import Navbar from '../components/Navbar/Navbar';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';

const Root = () => {
  const { darkMode} = useContext(ThemeContext);

  return (
    <div className="flex">
      {/* Sidebar (Navbar) */}
      <div
        className={`fixed middle-container overflow-y-auto w-72 p-4 h-screen ${
          darkMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-neutral-100 text-gray-900'
        }`}
      >
        {/* Navbar for larger screens */}
        <div className="lg:block hidden">
          <Navbar />
        </div>

        {/* Navbar for smaller screens */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 lg:ml-72 lg:middle-container bg-neutral-50 text-gray-900`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Root;