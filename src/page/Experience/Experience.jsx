import { motion } from 'framer-motion';
import useTheme from "../../hook/useTheme";
import useFadeDirection from "../../hook/useFadeDirection";

const Experience = () => {
    const { darkMode } = useTheme();
    const fadeUp = useFadeDirection("up", 0.3);

    return (
        <div id='experience'>
            <div className='flex justify-center p-20'>
                <div className={`max-w-full w-[820px] mx-auto p-4 border shadow-md
                    ${darkMode === 'dark'
                        ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                        : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                    } transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}>

                    <h2 className={`text-4xl text-center font-bold pb-4 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>
                        My Experience
                    </h2>

                    {/* motion.p with smooth inside-border animation */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`text-base ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        I have worked with books for over 3 years at Medisucess, a leading book company. During my time, I was actively involved in the typing work of the book industry. I take pride in contributing to the success of Medisucess and playing a role in bringing valuable content to readers in Bangladesh.
                    </motion.p>
                    
                </div>
            </div>
        </div>
    );
};

export default Experience;
