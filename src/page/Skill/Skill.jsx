import React, { useEffect, useState } from "react";
import useTheme from "../../hook/useTheme";

const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const { darkMode, bgColor } = useTheme();

  useEffect(() => {
    // Start animation when the component mounts
    setAnimate(true);
  }, []);

  /* Web Development Skills */
  const web_skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 50 },
    { name: "Express JS", percentage: 40 },
    { name: "MongoDB", percentage: 70 },
  ];

  /* Data Analyst Skills */
  const data_skills = [
    { name: "Python", percentage: 60 },
    { name: "Pandas", percentage: 70 },
    { name: "Numpy", percentage: 55 },
    { name: "Matplotlib", percentage: 50 },
    { name: "Seaborn", percentage: 50 },
    { name: "Beautiful Soup", percentage: 60 },
    { name: "Selenium", percentage: 60 },
    { name: "Microsoft Excel", percentage: 60 },
  ];

  /* Skill Progress Component */
  const SkillProgress = ({ skills, title }) => (
    <div
      className={`max-w-full w-[820px] mx-auto mb-10 border p-6 shadow-md ${darkMode === "dark"
        ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-white via-gray-100 to-gray-200"
        } shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl}`}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm font-medium">{skill.name}</p>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                  {skill.percentage}%
                </span>
              </div>
              <div className="flex-grow h-5 bg-gray-300 rounded-full overflow-hidden">
                <div
                  style={{
                    width: animate ? `${skill.percentage}%` : "0%",
                    backgroundColor: bgColor,
                    transition: "width 2s ease-in-out",
                  }}
                  className="h-full rounded-full"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="skill" className="p-20"  data-aos="zoom-in">
      <h2
        className={`text-4xl text-center font-bold mb-12 ${darkMode === "dark" ? "text-white" : "text-[#15295f]"
          }`}
      >
        My Skills
      </h2>
      <SkillProgress skills={web_skills} title="Web Development Skills" />
      <SkillProgress skills={data_skills} title="Data Analyst Skills" />
    </div>
  );
};

export default Skill;
