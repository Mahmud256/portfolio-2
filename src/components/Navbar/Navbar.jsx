// Navbar.js
import { useContext } from 'react';
import ThemeContext from '../../providers/ThemeContext';
import { FiSend } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const { themeColor } = useContext(ThemeContext);

    // Determine the hover background color based on themeColor
    const hoverBgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    // Reusable NavItem component for scroll links
    const NavItem = ({ to, label }) => (
        <Link
            to={to}
            smooth={true}
            offset={-50}
            duration={500}
            containerId="main-scroll-container" // Specify the scroll container
            spy={true} // Watches for the element position to change styles on scroll
        >
            <li
                className="cursor-pointer p-2 rounded transition-colors duration-300"
                style={{
                    color: themeColor,
                    backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = hoverBgColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                {label}
            </li>
        </Link>
    );

    return (
        <nav>
            <ul className="space-y-2 flex flex-col gap-3">
                <NavItem to="home" label="Home" />
                <NavItem to="services" label="Services" />
                <NavItem to="project" label="Projects" />
                <NavItem to="skills" label="Skills" />
                <NavItem to="education" label="Education" />
                <NavItem to="experience" label="Experience" />
                <NavItem to="contact" label="Contact" />

                <button
                    className="relative flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-red-500 to-blue-700 hover:to-red-600"
                >
                    <span
                        className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"
                        style={{
                            backgroundColor: hoverBgColor,
                            borderColor: hoverBgColor,
                        }}
                    ></span>
                    <span className="relative flex items-center text-white transition-colors duration-300 ease-in-out">
                        <FiSend className="mr-2" />
                        Hire Me
                    </span>
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
