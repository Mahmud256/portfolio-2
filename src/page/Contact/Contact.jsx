import { useContext, useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ThemeContext from '../../providers/ThemeContext';

const Contact = () => {

    const { darkMode, themeColor } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can add code to send the form data to your backend for email sending
        // For simplicity, I'll just log the data to the console
        console.log(formData);
    };

     // Determine the button background color based on themeColor
     const bgColor = themeColor.includes('blue') ? '#3b82f6' :
     themeColor.includes('pink') ? '#ec4899' :
         themeColor.includes('orange') ? '#f97316' : '#888';


    return (
        <div data-aos="fade-up"
            id='contact' className='pb-20'>
            <div className={`max-w-md mx-auto p-4 border shadow-md ${darkMode === 'dark'
                    ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                    } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}>
                <h1 className={`text-4xl text-center font-bold pb-4 ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>Contact me</h1>
                <div className=''>
                    <form className='' onSubmit={handleSubmit}>
                        <div className="flex gap-2">
                            
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-2"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2"
                                required
                            />
                        </div>
                        
                        <div className="my-4">
                            <label htmlFor="message" className={`${themeColor} text-base font-semibold my-10`}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border p-2"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn ${darkMode === 'dark' ? 'bg-[#fdb74d] text-[#15295f]' : 'bg-[#fd6e0a] text-white'
                            } hover:bg-opacity-90 font-semibold px-5 py-2 rounded-md transition duration-300`}

                            style={{
                                backgroundColor: bgColor,
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <div className='flex justify-center'>
                        <a href="https://github.com/Mahmud256" target="_blank" rel="noopener noreferrer">
                            <FaGithub size="2em" className="mr-4" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100010396957638" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size="2em" className="mr-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/mahmudul-hasan-sarkar-2b93581a6/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size="2em" className="mr-4" />
                        </a>
                        <a href="mailto:mahmud474849@gmail.com">
                            <FaEnvelope size="2em" className="mr-4" />
                        </a>
                    </div>
                </div>
                <aside className="text-center py-10">
                    <p className='text-[#39464d] dark:text-[#bbc2d6]'>© Developed by Mahmudul Hasan Sarkar</p>
                </aside>
            </div>
        </div>
    );
};

export default Contact;