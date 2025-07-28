import { motion } from 'framer-motion';
import useTheme from "../../hook/useTheme";
import useFlipAnimation from "../../hook/useFlipAnimation";

const Education = () => {
    const { darkMode, themeColor } = useTheme();

    const educationData = [
        {
            id: 1,
            title: "Institute of Science and Technology",
            degree: "BSc in Computer Science and Engineering",
            duration: "November 2019 - November 2024",
            flip: "left",
        },
        {
            id: 2,
            title: "Trust College",
            degree: "HSC",
            duration: "June 2017 - September 2019",
            flip: "right",
        },
    ];

    return (
        <motion.div
            id='education'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className='flex justify-center'>
                <div>
                    <h2 className={`text-4xl text-center font-bold py-10 px-6 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>
                        MY Education
                    </h2>

                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-16 lg:mx-16'>
                        {educationData.map((edu) => {
                            const flipVariant = useFlipAnimation(edu.id % 2 === 0);

                            return (
                                <motion.div
                                    key={edu.id}
                                    className={`card card-compact w-96 border ${darkMode === 'dark'
                                        ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                                        : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                                        } shadow-lg transform hover:scale-105 hover:shadow-xl`}
                                    variants={flipVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    style={{ perspective: '1000px' }}
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
        </motion.div>
    );
};

export default Education;
