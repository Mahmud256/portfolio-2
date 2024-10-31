import { useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
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

    return (
        <div id='contact'>
            <div>
                <h1 className="text-center text-4xl font-bold text-[#15295f] dark:text-[#416fee]  pb-10">Contact me</h1>
                <div className='flex justify-center'>
                    <form className='w-1/2 bg-white border dark:bg-[#1d232a] p-10' onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2 dark:text-[#bbc2d6]">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-[#bbc2d6]">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2 dark:text-[#bbc2d6]">
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
                            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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