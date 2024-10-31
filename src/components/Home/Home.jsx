import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeContext';
import Banner from '../../assets/profile.jpg';
import Typing from 'react-typing-effect';
import Exp from './exp';
import Project from '../../page/Project/Project';
import Skill from '../../page/Skill/Skill';
import Education from '../../page/Education/Education';
import Experience from '../../page/Experience/Experience';
import Contact from '../../page/Contact/Contact';

const Home = () => {
    const {  darkMode, themeColor, colorMap } = useContext(ThemeContext);

    // Determine the button background color based on themeColor
    const bgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    return (
        <div id="home" className={`${darkMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-50 text-gray-900'}`}>
            <div className='p-8'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <h1 className="text-3xl font-bold">HI, I'M A FREELANCER</h1>
                        <h1 className={`text-2xl font-bold overflow-y-auto ${themeColor}`}>
                            <Typing
                                text={["Web Developer", "Data Analyst", "Graphic Designer"]}
                                speed={100} // typing speed in ms
                                eraseSpeed={50} // erasing speed in ms
                                eraseDelay={1000} // delay before erasing
                                typingDelay={500} // delay before starting the first animation
                                cursorClassName={`${themeColor}`} // cursor styling with theme color
                                displayTextRenderer={(text, i) => <span>{text}</span>} // optional for custom rendering
                            />
                        </h1>
                        <p>I'm a software engineer specializing in scalable web apps. Explore my blog, project portfolio, and online resume.</p>
                        <div className='flex gap-5'>
                            <button
                                className="rounded-2xl border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                                style={{
                                    color: bgColor,
                                    borderColor: bgColor,
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `4px 4px 0px ${bgColor}`}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0'}
                            >
                                View Portfolio
                            </button>
                            <button
                                className="rounded-2xl border-2 border-dashed px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                                style={{
                                    color: bgColor,
                                    borderColor: bgColor,
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `4px 4px 0px ${bgColor}`}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0'}
                            >
                                View Resume
                            </button>
                        </div>
                    </div>

                    <div className='w-1/2 relative animate-jump'>
                        <div className='animate-rotate absolute inset-0 w-1/2' style={{ backgroundColor: bgColor }}></div>
                        <img src={Banner} alt="Banner" className='blo w-1/2 relative' />
                    </div>
                </div>
                <Exp bgColor={bgColor} />
            </div>






            <div className="">
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
            </div>
        </div>
    );
};

export default Home;
