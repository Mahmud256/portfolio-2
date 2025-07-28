import useTheme from "../../hook/useTheme";
import useFadeDirection from "../../hook/useFadeDirection";
import { motion } from "framer-motion";

const Education = () => {
    const { darkMode, themeColor } = useTheme();

    const educationData = [
        {
            id: 1,
            title: "Institute of Science and Technology",
            degree: "BSc in Computer Science and Engineering",
            duration: "November 2019 - November 2024",
        },
        {
            id: 2,
            title: "Trust College",
            degree: "HSC",
            duration: "June 2017 - September 2019",
        },
    ];

    return (
        <div id='education'>
            <div className='flex justify-center'>
                <div>
                    <h2 className={`text-4xl text-center font-bold py-10 px-6 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>
                        MY Education
                    </h2>

                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-16 lg:mx-16'>
                        {educationData.map((edu, index) => {
                            const direction = index % 2 === 0 ? 'left' : 'right';
                            const animation = useFadeDirection(direction, index * 0.2);

                            return (
                                <motion.div
                                    key={edu.id}
                                    className={`card card-compact w-96 border ${darkMode === 'dark'
                                        ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                                        : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                                        } shadow-lg transform hover:scale-105 hover:shadow-xl`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false}}
                                    variants={animation}
                                >
                                    <div className="card-body p-4">
                                        <h5 className={`${themeColor} text-base font-semibold`}>
                                            {edu.title}
                                        </h5>
                                        <h6 className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {edu.degree}
                                        </h6>
                                        <span className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {edu.duration}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
