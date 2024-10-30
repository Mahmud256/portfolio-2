import React from 'react';

const Skill = () => {
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'React.js', percentage: 80 },
        { name: 'Node.js', percentage: 50 },
        { name: 'Express JS', percentage: 40 },
        { name: 'MongoDB', percentage: 70 },
    ];

    return (
        <div id='skill' className='px-8 mt-36'>

            <h2 className="text-center text-4xl font-bold text-[#15295f] dark:text-[#416fee] py-10 px-6">My Skills</h2>
            <div className="max-w-md grid grid-cols-2 gap-4 mx-auto mb-8 p-8 bg-[#fdf8f7] border dark:bg-[#111111] rounded-lg shadow-md">
                {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-orange-200">
                                        {skill.percentage}%
                                    </span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-grow h-2 bg-orange-200 rounded-full">
                                    <div
                                        style={{ width: `${skill.percentage}%` }}
                                        className="h-full bg-orange-500 rounded-full"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skill;
