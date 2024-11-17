import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeContext';

const Services = () => {
    const { themeColor, darkMode } = useContext(ThemeContext);

    // Example data for Fiverr gigs (you can fetch this dynamically if an API is available)
    const gigs = [
        {
            title: "I will do data entry and ms word and fast typing",
            price: "$20",
            link: "https://www.fiverr.com/dm_mahmud/do-data-entry-service",
            image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/263005201/original/a832344acaaa51a47659f39b3fc186ac1e20815c/do-data-entry-service.jpg"
        },
        {
            title: "I will provide fast and accurate document type and retype",
            price: "$20",
            link: "https://www.fiverr.com/dm_mahmud/provide-fast-and-accurate-document-typing-services",
            image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/317771711/original/be93e7cbf48f6c1f0cd654d709a0560e992fd97a/provide-fast-and-accurate-document-typing-services.png",
        },
        {
            title: "I will data analysis, cleaning and visualization by python",
            price: "$20",
            link: "https://www.fiverr.com/dm_mahmud/data-analysis-cleaning-and-visualization-by-python",
            image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/391986241/original/d9af07c1e99c6777944abd9a3b3f60943b526e03/data-analysis-cleaning-and-visualization-by-python.jpg",
        },
        {
            title: "I will be web data scraping from any website by python web scraper",
            price: "$30",
            link: "https://www.fiverr.com/dm_mahmud/be-web-data-scraping-from-any-website-by-python-web-scraper",
            image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/403878887/original/cde4bb0f7e61a98993c0f21b172d8b5fa482150c/be-web-data-scraping-from-any-website-by-python-web-scraper.jpg",
        },
    ];

    // Determine button and background color
    const bgColor = themeColor.includes('blue') ? '#3b82f6' :
        themeColor.includes('pink') ? '#ec4899' :
            themeColor.includes('orange') ? '#f97316' : '#888';

    return (

        <div
            data-aos="fade-up" // AOS attribute for animation
            id="services" className='mt-20'>
            <div className="text-center mb-10">
                <h2 className={`text-4xl font-bold ${darkMode === 'dark' ? 'text-white' : 'text-[#15295f]'}`}>My Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:mx-14">
                {gigs.map((gig) => (
                    <div
                        key={gig}
                        data-aos={gig.id % 2 == 0 ? "flip-right" : "flip-left"} // Alternate animation based on id
                        data-aos-delay={gig.id * 100} // Stagger the animations
                        className={`card card-compact w-96 border ${darkMode === 'dark'
                            ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-white via-gray-100 to-gray-200'
                            } shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-xl`}
                    >
                        <a href={gig.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <figure className="overflow-hidden">
                                <img
                                    src={gig.image}
                                    alt={gig.title}
                                    className="object-cover transform transition-transform duration-500 hover:scale-110"

                                />
                            </figure>

                            <div className="card-body p-4">
                                <h2 className={`card-title text-lg font-semibold ${themeColor}`}>{gig.title}</h2>
                                <p style={{ fontSize: '18px', color: bgColor, fontWeight: 'bold' }}>{gig.price}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
