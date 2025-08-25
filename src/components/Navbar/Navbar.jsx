// Navbar.js
import { FiSend } from 'react-icons/fi';
import { Link } from 'react-scroll';
import useTheme from '../../hook/useTheme';
import Profile from '../Profile/Profile';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ColorSelector from '../ColorSelector/ColorSelector';

const Navbar = () => {
    const { themeColor, bgColor } = useTheme();

    // Reusable NavItem component for scroll links
    const NavItem = ({ to, label }) => (
        <Link
            to={to}
            smooth={true}
            offset={-50}
            duration={500}
            // containerId="main-scroll-container" // Specify the scroll container
            spy={true} // Watches for the element position to change styles on scroll
        >
            <li
                className="cursor-pointer p-2 rounded transition-colors duration-300"
                style={{
                    color: themeColor,
                    backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = bgColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                {label}
            </li>
        </Link>
    );

    return (
        <nav className=''>
            {/* Menu Items */}
            <Profile themeColor={themeColor} />
            <div className="w-auto flex items-baseline justify-center p-4 gap-2 space-x-2">
                <ThemeToggle />
                <ColorSelector />
            </div>
            <ul className="space-y-2 flex flex-col gap-3">
                <NavItem to="home" label="Home" />
                {/* <NavItem to="services" label="Services" /> */}
                <NavItem to="project" label="Projects" />
                <NavItem to="skill" label="Skills" />
                <NavItem to="education" label="Education" />
                <NavItem to="experience" label="Experience" />
                {/* <NavItem to="biodata" label="Bio Data" /> */}
                <NavItem to="contact" label="Contact" />

                <Link
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    spy={true}

                >
                    <button

                        className="relative flex items-center justify-center px-14 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-red-500 to-blue-700 hover:to-red-600"
                    >
                        <span
                            className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"
                            style={{
                                backgroundColor: bgColor,
                                borderColor: bgColor,
                            }}
                        ></span>
                        <span className="relative flex items-center text-white transition-colors duration-300 ease-in-out">
                            <FiSend className="mr-2" />
                            Hire Me
                        </span>
                    </button>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
