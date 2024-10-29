import React from 'react';
import CountUp from 'react-countup';

const Exp = ({ bgColor }) => {
    return (
        <div className="max-w-3xl mt-10 flex gap-10 items-center">
            <div className="flex gap-4 items-center">
                <span className='font-bold text-8xl' style={{ color: bgColor }}>
                    <CountUp end={5} duration={10} />
                </span>
                <div className="h-10 w-px bg-gray-300 my-2"></div> {/* Vertical line separator */}
                <span className=''>Years of Experience</span>
            </div>
            <div className="flex gap-4 items-center">
                <span className='font-bold text-8xl' style={{ color: bgColor }}>
                    <CountUp end={110} duration={10} />
                </span>
                <div className="h-10 w-px bg-gray-300 my-2"></div> {/* Vertical line separator */}
                <span className=''>Projects Completed</span>
            </div>
            <div className="flex gap-4 items-center">
                <span className='font-bold text-8xl' style={{ color: bgColor }}>
                    <CountUp end={6} duration={10} separator="," />k
                </span>
                <div className="h-10 w-px bg-gray-300 my-2"></div> {/* Vertical line separator */}
                <span className=''>Clients Worldwide</span>
            </div>
        </div>
    );
};

export default Exp;
