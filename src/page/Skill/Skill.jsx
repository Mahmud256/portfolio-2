import React, { useEffect, useState } from "react";

const Skill = ({ darkMode, bgColor }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation when the component mounts
    setAnimate(true);
  }, []);

  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 50 },
    { name: "Express JS", percentage: 40 },
    { name: "MongoDB", percentage: 70 },
  ];

  return (
    <div id="skill" className="p-20" data-aos="zoom-in">
      <h2
        className={`text-4xl text-center font-bold py-10 px-6 ${
          darkMode === "dark" ? "text-white" : "text-[#15295f]"
        }`}
      >
        My Skills
      </h2>
      <div
        className={`max-w-full grid grid-cols-2 gap-4 mx-auto border p-4 shadow-md ${
          darkMode === "dark"
            ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-gray-100 to-gray-200"
        } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}
      >
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm font-medium">{skill.name}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className={`flex-grow h-7 bg-red-200 border rounded-full`}>
                  <div
                    style={{
                      width: animate ? `${skill.percentage}%` : "0%",
                      backgroundColor: bgColor,
                      transition: "width 10s ease-in-out",
                    }}
                    className="h-full rounded-full"
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
