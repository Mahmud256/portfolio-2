import Project from '../../page/Project/Project';
import Skill from '../../page/Skill/Skill';
import Education from '../../page/Education/Education';
import Experience from '../../page/Experience/Experience';
import Contact from '../../page/Contact/Contact';
import Services from '../../page/Services/Services';
import useTheme from '../../hook/useTheme';
import About from '../../page/About/About';

const Home = () => {

    const { darkMode, bgColor } = useTheme();

    return (
        <div id="home" className={`${darkMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-50 text-gray-900'}`}>

            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <About />
                </div>
            </div>

            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <Services />
                </div>
            </div>



            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <Project />
                </div>
            </div>
            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <Skill bgColor={bgColor} darkMode={darkMode} />
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
