import Typing from 'react-typing-effect';
import useTheme from '../../hook/useTheme';
import Low from '../../assets/Low.jpg'
import Exp from '../../components/Home/Exp';
import { motion } from "framer-motion";


const About = () => {
    const { darkMode, themeColor, bgColor } = useTheme();
    

    return (
        <div>
            <div className='flex justify-center items-center p-20'>
                <div className={`max-w-full mx-auto p-4`}>
                    <div className='grid grid-cols-2 gap-12 items-center justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h1 className="text-3xl font-bold">HI, I'M A STUDENT</h1>
                            <h1 className={`text-2xl font-bold overflow-y-auto ${themeColor}`}>
                                <Typing
                                    text={["Web Developer", "Data Analyst", "Graphic Designer"]}
                                    speed={100}
                                    eraseSpeed={50}
                                    eraseDelay={1000}
                                    typingDelay={500}
                                    cursorClassName={`${themeColor}`}
                                    displayTextRenderer={(text) => <span>{text}</span>}
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
                        <div className="relative flex justify-end w-full">
                            {/* Container for rotating bg and jumping image */}
                            <motion.div className="relative w-1/2"
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}>
                                {/* Rotating Background */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{ backgroundColor: bgColor }}
                                    animate={{ rotate: [11.163, -11.163, 11.163] }}
                                    transition={{
                                        duration: 10,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />
                                <img src={Low} alt="Low" className="relative w-full" />
                            </motion.div>
                        </div>


                    </div>
                    <Exp bgColor={bgColor} darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
};

export default About;  