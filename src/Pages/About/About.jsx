import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss  } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-600" size={30} />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" size={30}/>, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" size={30}/>, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400"size={30} />, name: "React" },
  { icon: <SiExpress className="text-gray-800"size={30} />, name: "Express" },
  { icon: <SiMongodb className="text-green-500"size={30} />, name: "MongoDB" },
  { icon: <SiFirebase className="text-yellow-500"size={30} />, name: "Firebase" },
  { icon: <SiTailwindcss className="text-sky-400" size={30}/>, name: "TailwindCSS" },
];

const About = () => {
    return (
  
   <div className="min-h-screen bg-base-200 text-base-content pt-24 px-6 mt-10 rounded-2xl">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* About Me Section */}
    <div data-aos="fade-left" className="space-y-6">
      <h2  className="text-4xl font-extrabold text-primary">About Me</h2>
      <p className="text-lg leading-relaxed">
        👋 I'm a passionate <span className="text-secondary font-semibold">MERN Stack Developer</span> with a strong foundation in full-stack development, clean architecture, and modern UI design.
      </p>
      <p className="text-lg leading-relaxed">
        🚀 I love solving real-world problems with code, building smooth user experiences, and always exploring the latest tech trends.
      </p>
    </div>

    {/* Spinning Circle with Icons */}
    <div className="relative w-80 h-80 mx-auto">
      {/* Soft Round Circle (চাতলা রাগ) */}
      <div className="absolute inset-0 rounded-full  backdrop-blur-sm" />

      {/* Spinning Layer */}
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radius = 120;
          const center = 160; // since w-80 = 320px
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${center + x}px`,
                top: `${center + y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              title={skill.name}
              aria-label={skill.name}
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center text-xl">
                {skill.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>


    );
};

export default About;