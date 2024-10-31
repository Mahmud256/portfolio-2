import React from 'react';

const ScrollBar = ({ children, height = 'h-64', width = 'w-full' }) => {
  return (
    <div
      className={`${height} ${width} overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
    >
      {children}
    </div>
  );
};

export default ScrollBar;
