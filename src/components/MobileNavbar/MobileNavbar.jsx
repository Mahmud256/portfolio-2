import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNavbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.theme || 'light');


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    const navLinks = <>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        {/* <li className="active"><a href="">About Me</a></li>
        <li className="active"><a href="">Project</a></li> */}
        <li key="about">
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout (height of the fixed navbar)
                duration={500}
            >
                About Me
            </Link>
        </li>
        <li key="project">
            <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Project
            </Link>
        </li>
        <li key="education">
            <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Education
            </Link>
        </li>
        <li key="experience">
            <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Experiences
            </Link>
        </li>
        <li key="skill">
            <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Skills
            </Link>
        </li>
        <li key="contact">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Contact Me
            </Link>
        </li>


        {/* <li className="active"><a href="">Experiences</a></li> */}
        {/* <li className="active"><a href="">Skills</a></li> */}
        {/* <li className="active"><a href="">Contacts</a></li> */}
        {/* <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to="/experience">Experiences</NavLink></li>
        <li><NavLink to="/skill">Skills</NavLink></li>
        <li><NavLink to="/contact">Contacts</NavLink></li> */}






    </>

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Apply the dark mode class to the document's root element
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);



    return (
        <div>
            <nav
                className={`py-4 flex justify-between items-center fixed top-0 w-[20rem] lg:w-[80rem] z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fdf8f7] shadow-md dark:bg-[#111111]' : 'bg-[#fdf8f7] dark:bg-[#111111]'
                    }`}
            >
                {/* Left Side: Logo */}
                <Link to="/" className="flex flex-col items-center">
                    <h2 className='text-lg font-bold uppercase'>Mahmud Portfolio</h2>
                </Link>

                {/* Middle Section: Navigation Links */}
                <div className="">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-2 menu-horizontal px-1">
                            {navLinks}
                            <div>
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox"
                                        onChange={handleToggle}
                                        checked={theme === "dark" ? false : true}
                                        className="theme-controller" value="synthwave" />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='md:hidden'>
                    <button
                        className=""
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes />
                        ) : (
                            <FaBars />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden flex m-auto">
                            <ul className='menu'>
                                {navLinks}
                                <div>
                                    <label className="swap swap-rotate">

                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox"
                                            onChange={handleToggle}
                                            checked={theme === "dark" ? false : true}
                                            className="theme-controller" value="synthwave" />

                                        {/* sun icon */}
                                        <svg className="swap-on fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-off fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            <div></div>
        </div>
    );
};

export default MobileNavbar;
