import React from 'react';

const About = () => {
    const resumeLink = 'https://drive.google.com/file/d/1ivLPBf7xgV9C85HYSYDG9M6hL9YgvyH5/view?usp=sharing';

    return (
        <div id='about' className='mt-14 lg:mt-20'>
            <div>
                <h2 className='text-3xl font-bold text-[#fd6e0a]'>Hi, I'm</h2>
                <h1 className='text-5xl font-bold text-[#15295f] dark:text-[#cec8c6] my-5'>Mahmudul Hasan Sarkar</h1>
                <h2 className='text-xl font-bold text-[#15295f] dark:text-[#cec8c6]'>Front End Developer</h2>
                <p className='text-[#4a4853] dark:text-[#cec8c6] text-lg'>I am a Junior Front-End Web Developer. As a Junior Front-End Web Developer, my skills and training have instilled enough confidence in me to proudly identify as a Junior Front-end Web Developer/Junior Web Developer. Over the course of six intensive months, I meticulously documented the entire web development process under the guidance of Jhankar Mahbub through Programming Hero. I am now prepared to tackle challenges and take on responsibilities, aspiring to evolve into a fully competent web developer.</p>
            </div>

            <div className='my-4'>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                    <button className='btn rounded-full bg-[#fd6e0a] hover:border-[#fd6e0a] hover:text-[#fd6e0a] text-white font-bold'>MY RESUME</button>
                </a>
            </div>
        </div>
    );
};

export default About;