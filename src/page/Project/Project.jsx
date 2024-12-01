import React, { useContext } from 'react';
import img1 from '../../assets/banner-1.png';
import img2 from '../../assets/banner-2.jpg';
import img3 from '../../assets/banner-3.jpeg';
import img4 from '../../assets/banner-4.png';
import img5 from '../../assets/banner-5.png';
import img6 from '../../assets/banner-6.png';
import ThemeContext from '../../providers/ThemeContext';

const Project = () => {
    const { themeColor, darkMode } = useContext(ThemeContext);

    const projects = [
        { id: 1, title: 'Modern Technology and Electronics', img: img1, link: 'https://assignment-1010.netlify.app/' },
        { id: 2, title: 'Online Group Study Assignment', img: img2, link: 'https://assignment-11-3a371.web.app/' },
        { id: 3, title: 'Gulshan Dream Nest', img: img3, link: 'https://assignment-12-6f6d3.web.app/' },
        { id: 4, title: 'Educational and Training Events', img: img4, link: 'https://mahmud256-assignment-9.netlify.app/' },
        { id: 5, title: 'Course Registration', img: img5, link: 'https://mahmud256-assignment-7.netlify.app/' },
        { id: 6, title: 'Summer Sale', img: img6, link: 'https://mahmud256-assignment-5.netlify.app/' },
    ];

    // Determine the button background color based on themeColor
    const bgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    return (
        <div
            data-aos="fade-up" // AOS attribute for animation
            id="project" className='mt-20'>
            <div className="text-center mb-10">
                <h2 className={`text-4xl font-bold ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>My Amazing Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:mx-14">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        data-aos={project.id % 2 == 0 ? "flip-right" : "flip-left"} // Alternate animation based on id
                        data-aos-delay={project.id * 100} // Stagger the animations
                        className={`card card-compact w-96 border ${darkMode === 'dark'
                            ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                            } shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-xl`}
                    >
                        <figure className="overflow-hidden">
                            <img
                                className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
                                src={project.img}
                                alt={project.title}
                            />
                        </figure>
                        <div className="card-body p-4 text-center">
                            <h2 className={`card-title text-lg font-semibold ${themeColor}`}>{project.title}</h2>
                            <p className={`text-sm ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Explore this project to see innovative solutions in {project.title.toLowerCase()}.
                            </p>
                            <div className="card-actions justify-center mt-3 transform transition-transform duration-500 hover:scale-110">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`btn ${darkMode === 'dark' ? 'bg-[#fdb74d] text-white' : 'bg-[#fd6e0a] text-white'
                                        } hover:bg-opacity-90 font-semibold px-5 py-2 rounded-md transition duration-300`}

                                    style={{
                                        backgroundColor: bgColor,
                                    }}
                                >
                                    Visit Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
