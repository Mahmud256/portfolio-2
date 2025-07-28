import { motion } from 'framer-motion';
import useTheme from '../../hook/useTheme';
import useFadeInOnView from '../../hook/useFadeInOnView';
import useFlipAnimation from '../../hook/useFlipAnimation';

import img1 from '../../assets/banner-1.png';
import img2 from '../../assets/banner-2.png';
import img3 from '../../assets/banner-3.jpeg';
import img4 from '../../assets/banner-4.png';
import img5 from '../../assets/banner-5.png';
import img6 from '../../assets/banner-6.png';
import img7 from '../../assets/banner-7.jpg';

const Project = () => {
  const { darkMode, themeColor, bgColor } = useTheme();
  const fadeVariant = useFadeInOnView();

  const projects = [
    { id: 1, title: 'Online Gift Shop', img: img2, link: 'https://online-gift-shop-a4212.web.app/' },
    { id: 2, title: 'Gulshan Dream Nest', img: img3, link: 'https://assignment-12-6f6d3.web.app/' },
    { id: 3, title: 'Modern Technology and Electronics', img: img1, link: 'https://assignment-1010.netlify.app/' },
    { id: 4, title: 'Online Group Study Assignment', img: img7, link: 'https://assignment-11-3a371.web.app/' },
    { id: 5, title: 'Educational and Training Events', img: img4, link: 'https://mahmud256-assignment-9.netlify.app/' },
    { id: 6, title: 'Course Registration', img: img5, link: 'https://mahmud256-assignment-7.netlify.app/' },
    { id: 7, title: 'Summer Sale', img: img6, link: 'https://mahmud256-assignment-5.netlify.app/' },
  ];

  return (
    <motion.div
      id="project"
      className="mt-20"
      variants={fadeVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="text-center mb-10">
        <h2 className={`text-4xl font-bold ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>
          My Amazing Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-24 lg:mx-14">
        {projects.map((project) => {
          // ✅ call useFlipAnimation() for each card, passing even/odd check
          const flipVariant = useFlipAnimation(project.id % 2 === 0);

          return (
            <motion.div
              key={project.id}
              className={`card card-compact w-96 border ${darkMode === 'dark'
                ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                } shadow-lg hover:scale-110 hover:shadow-xl`}
              variants={flipVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ perspective: '1000px' }}
            >
              <figure className="overflow-hidden">
                <motion.img
                  className="w-full h-40 object-cover"
                  src={project.img}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </figure>
              <div className="card-body p-4 text-center">
                <h2 className={`card-title text-lg font-semibold ${themeColor}`}>{project.title}</h2>
                <p className={`text-sm ${darkMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Explore this project to see innovative solutions in {project.title.toLowerCase()}.
                </p>
                <motion.div
                  className="card-actions justify-center mt-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${darkMode === 'dark' ? 'bg-[#fdb74d] text-white' : 'bg-[#fd6e0a] text-white'
                      } hover:bg-opacity-90 font-semibold px-5 py-2 rounded-md transition duration-300`}
                    style={{ backgroundColor: bgColor }}
                  >
                    Visit Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Project;
