import useTheme from "../../hook/useTheme";

const Education = () => {

    const { darkMode, themeColor} = useTheme();

    return (
        <div data-aos="fade-up"
            id='education'>
            <div className='flex justify-center'>
                <div>
                    <h2 className={`text-4xl text-center font-bold py-10 px-6 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>MY Education</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-16'>
                        <div className={`card card-compact w-96 border ${darkMode === 'dark'
                            ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                            } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`} data-aos="flip-left">
                            <div className="card-body p-4"><div className="d-flex "><div className={``}><h5 className={`${themeColor} text-base font-semibold`}>
                                Institute of Science and Technology</h5><h6 className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>BSc in Computer Science and Engineering </h6>
                                <span className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>November 2019 -  November 2024</span></div></div></div>
                        </div>
                        <div className={`card card-compact w-96 border ${darkMode === 'dark'
                            ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                            } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`} data-aos="flip-right">
                            <div className="card-body p-4"><div className="d-flex "><div className={``}>
                                <h5 className={`${themeColor} text-base font-semibold`}>Trust College</h5>
                                <h6 className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>HSC</h6>
                                <span className={`${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>June 2017 -  Septembar 2019</span>
                            </div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;