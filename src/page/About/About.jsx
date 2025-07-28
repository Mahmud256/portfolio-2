import Typing from 'react-typing-effect';
import useTheme from '../../hook/useTheme';
import Low from '../../assets/Low.jpg'
import Exp from '../../components/Home/Exp';


const About = () => {
    const { darkMode, themeColor, bgColor } = useTheme();

    return (
        <div >
            <div className='flex justify-center items-center p-20'>
                <div className={`max-w-full mx-auto p-4`}>
                    <div className='flex items-center justify-between gap-12'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <h1 className="text-3xl font-bold">HI, I'M A STUDENT</h1>
                            <h1 className={`text-2xl font-bold overflow-y-auto ${themeColor}`}>
                                <Typing
                                    text={["Web Developer", "Data Analyst", "Graphic Designer"]}
                                    speed={100} // typing speed in ms
                                    eraseSpeed={50} // erasing speed in ms
                                    eraseDelay={1000} // delay before erasing
                                    typingDelay={500} // delay before starting the first animation
                                    cursorClassName={`${themeColor}`} // cursor styling with theme color
                                    displayTextRenderer={(text) => <span>{text}</span>} // optional for custom rendering
                                />
                            </h1>
                            <p
                                className={`text-sm ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                            >Aiming to prove myself through work and responsibility, while establishing myself as an outstanding web developer and data analyst. I am passionate about learning new technologies and evolving as a high-level programmer.</p>
                            <div className='flex gap-5 mt-2'>
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
                                <a
                                    href="https://drive.google.com/file/d/1PBq0Pj6Yd62bdGnWeZAglU7H7Csw4Elf/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className={`rounded-2xl border-2 
                                    border-dashed px-6 py-3 font-semibold 
                                    uppercase transition-all duration-300 
                                    hover:translate-x-[-4px] 
                                    hover:translate-y[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${themeColor}`}
                                        style={{
                                            color: bgColor,
                                            borderColor: bgColor,
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `4px 4px 0px ${bgColor}`}
                                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0'}
                                    >
                                        View Resume
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className='w-1/2 relative animate-jump '>
                            <div className='animate-rotate absolute inset-0 w-1/2' style={{ backgroundColor: bgColor }}></div>
                            <img src={Low} alt="Low" className='blo w-1/2 relative' />
                        </div>
                    </div>
                    <Exp bgColor={bgColor} darkMode={darkMode} />
                </div>
            </div>
            {/* <h2>BAL</h2> */}
        </div>
    );
};

export default About;