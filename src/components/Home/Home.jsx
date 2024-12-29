import Project from '../../page/Project/Project';
import Skill from '../../page/Skill/Skill';
import Education from '../../page/Education/Education';
import Experience from '../../page/Experience/Experience';
import Contact from '../../page/Contact/Contact';
import Services from '../../page/Services/Services';
import About from '../../page/About/About';

const Home = () => {
    return (
        <div id="home" className={`flex flex-col justify-center items-center`}>

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
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;
