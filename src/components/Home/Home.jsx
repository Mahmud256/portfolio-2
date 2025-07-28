import Project from '../../page/Project/Project';
import Skill from '../../page/Skill/Skill';
import Education from '../../page/Education/Education';
import Experience from '../../page/Experience/Experience';
import BioData from '../../page/BioData/BioData'
import Contact from '../../page/Contact/Contact';
import About from '../../page/About/About';
import useTheme from '../../hook/useTheme';


const Home = () => {
    const { darkMode } = useTheme();
    return (
        <div id="home" className={`flex flex-col justify-center items-center ${
            darkMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-neutral-100 text-gray-900'
          }`}>

            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <About />
                </div>
            </div>

            {/* <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <Services />
                </div>
            </div> */}

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
                    <BioData />
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
