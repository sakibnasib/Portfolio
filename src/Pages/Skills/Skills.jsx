// import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";

// const Skills = () => {
//   const frontendSkills = [
//     { icon: <FaHtml5 className="text-orange-500" size={24} />, name: "HTML5", level: 95, color: "from-orange-500 to-orange-600" },
//     { icon: <FaCss3Alt className="text-blue-500" size={24} />, name: "CSS3", level: 90, color: "from-blue-500 to-blue-600" },
//     { icon: <FaJs className="text-yellow-400" size={24} />, name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-500" },
//     { icon: <FaReact className="text-cyan-400" size={24} />, name: "React", level: 85, color: "from-cyan-400 to-cyan-500" },
//     { icon: <SiTailwindcss className="text-sky-400" size={24} />, name: "TailwindCSS", level: 92, color: "from-sky-400 to-sky-500" },
   
//   ];

//   const backendSkills = [
//     { icon: <SiNodedotjs className="text-green-500" size={24} />, name: "Node.js", level: 82, color: "from-green-500 to-green-600" },
//     { icon: <SiExpress className="text-gray-600" size={24} />, name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
//     { icon: <SiMongodb className="text-green-500" size={24} />, name: "MongoDB", level: 78, color: "from-green-500 to-green-600" },
//     { icon: <SiFirebase className="text-yellow-500" size={24} />, name: "Firebase", level: 75, color: "from-yellow-500 to-amber-500" },
//   ];

//   const renderSkills = (skills) => (
//     <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//       {skills.map((skill, index) => (
//         <div
//           key={skill.name}
//           className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg"
//           style={{ animationDelay: `${index * 100}ms` }}
//         >
//           <div className="flex items-center justify-between mb-3 sm:mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
//                 {skill.icon}
//               </div>
//               <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
//             </div>
//             <span className="text-cyan-400 font-bold text-sm sm:text-base">{skill.level}%</span>
//           </div>
//           <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3 overflow-hidden">
//             <div
//               className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
//               style={{
//                 width: `${skill.level}%`,
//                 boxShadow: "0px 0px 8px rgba(6, 182, 212, 0.3)",
//               }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="  relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute w-64 h-64 sm:w-80 sm:h-80 top-10 left-10  rounded-full blur-2xl sm:blur-3xl animation-delay-1000"></div>
//       <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bottom-10 right-10  rounded-full blur-2xl sm:blur-3xl animation-delay-2000"></div>
      
//       <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center">
//           <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
//             Skills
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Frontend */}
//         <div>
//           <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Frontend</h3>
//           {renderSkills(frontendSkills)}
//         </div>

//         {/* Backend */}
//         <div>
//           <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Backend</h3>
//           {renderSkills(backendSkills)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";

// const skills = {
//   frontend: [
//     { icon: <FaHtml5 />, name: "HTML5", level: 95, color: "from-orange-500 to-orange-600", shadow: "shadow-orange-500/50" },
//     { icon: <FaCss3Alt />, name: "CSS3", level: 90, color: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/50" },
//     { icon: <FaJs />, name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-500", shadow: "shadow-yellow-400/50" },
//     { icon: <FaReact />, name: "React", level: 85, color: "from-cyan-400 to-cyan-500", shadow: "shadow-cyan-400/50" },
//     { icon: <SiTailwindcss />, name: "TailwindCSS", level: 92, color: "from-sky-400 to-sky-500", shadow: "shadow-sky-400/50" },
//     { icon: <SiVite />, name: "Vite", level: 85, color: "from-purple-500 to-purple-600", shadow: "shadow-purple-500/50" },
//   ],
//   backend: [
//     { icon: <SiNodedotjs />, name: "Node.js", level: 82, color: "from-green-500 to-green-600", shadow: "shadow-green-500/50" },
//     { icon: <SiExpress />, name: "Express.js", level: 80, color: "from-gray-600 to-gray-700", shadow: "shadow-gray-600/50" },
//     { icon: <SiMongodb />, name: "MongoDB", level: 78, color: "from-green-500 to-green-600", shadow: "shadow-green-500/50" },
//     { icon: <SiFirebase />, name: "Firebase", level: 75, color: "from-yellow-500 to-amber-500", shadow: "shadow-yellow-500/50" },
//   ],
// };

// const SkillCard = ({ skill, index }) => (
//   <motion.div
//     className="relative bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     viewport={{ once: true }}
//   >
//     <div className="flex items-center justify-between mb-4">
//       <div className="flex items-center space-x-4">
//         <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white text-3xl group-hover:text-current transition-colors duration-300">
//           {skill.icon}
//         </div>
//         <span className="font-semibold text-gray-100">{skill.name}</span>
//       </div>
//       <span className="text-gray-400 font-medium">{skill.level}%</span>
//     </div>
//     <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
//       <motion.div
//         className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:${skill.shadow}`}
//         initial={{ width: 0 }}
//         whileInView={{ width: `${skill.level}%` }}
//         transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
//         viewport={{ once: true }}
//       ></motion.div>
//     </div>
//   </motion.div>
// );

// const Skills = () => {
//   return (
//     <section className="bg-gray-900 text-white min-h-screen py-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-16">
        
//         {/* Section Header */}
//         <div className="text-center">
//           <h2 className="text-5xl font-bold mb-4 text-white">
//             My Skills
//           </h2>
//           <p className="text-xl text-indigo-400">
//             Technologies I use to build amazing things.
//           </p>
//           <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Frontend Skills */}
//         <div>
//           <h3 className="text-3xl font-semibold text-white mb-8 border-b-2 border-indigo-400 pb-2 inline-block">
//             Frontend Development
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skills.frontend.map((skill, index) => (
//               <SkillCard key={skill.name} skill={skill} index={index} />
//             ))}
//           </div>
//         </div>

//         {/* Backend Skills */}
//         <div>
//           <h3 className="text-3xl font-semibold text-white mb-8 border-b-2 border-indigo-400 pb-2 inline-block">
//             Backend & Database
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skills.backend.map((skill, index) => (
//               <SkillCard key={skill.name} skill={skill} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { 
  SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, 
  SiFirebase, SiVercel, SiDaisyui, SiVite, SiNextdotjs 
} from "react-icons/si";

const SkillCard = ({ name, icon, color, level, desc }) => (
  <div className="group relative">
    {/* Animated Border Gradient */}
    <div className={`absolute -inset-px bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>
    
    <div className="relative flex flex-col p-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-2xl">
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase group-hover:text-white/60 transition-colors">
          {level}%
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold text-lg tracking-tight">{name}</h4>
        <p className="text-xs text-white/40 font-medium mb-4">{desc}</p>
      </div>

      {/* Modern Slim Progress Bar */}
      <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </div>
);

const SkillGroup = ({ title, skills }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-6">
      <h3 className="text-xs font-black text-white/30 uppercase tracking-[0.4em] whitespace-nowrap">{title}</h3>
      <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontend = [
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "from-white to-gray-500", level: 85, desc: "SSR & App Router" },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, color: "from-[#61DAFB] to-blue-500", level: 90, desc: "Components & Hooks" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "from-[#06B6D4] to-sky-400", level: 95, desc: "Utility-First CSS" },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, color: "from-[#F7DF1E] to-yellow-600", level: 88, desc: "ES6+ & Async" },
    { name: "DaisyUI", icon: <SiDaisyui className="text-[#FF9903]" />, color: "from-[#FF9903] to-orange-500", level: 80, desc: "UI Components" },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, color: "from-[#E34F26] to-orange-600", level: 95, desc: "Semantic Structure" },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, color: "from-[#1572B6] to-blue-600", level: 90, desc: "Advanced Layouts" },
  ];

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, color: "from-[#339933] to-green-500", level: 82, desc: "Server-side JS" },
    { name: "Express", icon: <SiExpress className="text-white" />, color: "from-gray-400 to-white", level: 80, desc: "API Framework" },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "from-[#47A248] to-emerald-500", level: 75, desc: "NoSQL Database" },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, color: "from-[#FFCA28] to-yellow-600", level: 85, desc: "Authentication/Storage" },
  ];

  const infrastructure = [
    { name: "GitHub", icon: <FaGithub className="text-white" />, color: "from-gray-600 to-gray-400", level: 90, desc: "Git & Collaboration" },
    { name: "Vercel", icon: <SiVercel className="text-white" />, color: "from-white to-gray-600", level: 92, desc: "Cloud Deployment" },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, color: "from-[#646CFF] to-purple-500", level: 88, desc: "Next-gen Tooling" },
  ];

  return (
    <section className="relative md:py-32 sm-20  lg:py-32  px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[10vw] font-black text-white/[0.01] select-none pointer-events-none uppercase">
        Stack
      </div>

      <div className="relative z-10 space-y-24">
        {/* Header Section */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Infrastructure</span>
          </h2>
          <p className="text-lg text-white/40 font-light leading-relaxed">
            I build modern web applications using a robust stack designed for 
            <span className="text-white/80"> scalability</span>, 
            <span className="text-white/80"> speed</span>, and 
            <span className="text-white/80"> user experience</span>.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-20">
          <SkillGroup title="Frontend & Frameworks" skills={frontend} />
          <SkillGroup title="Backend & Databases" skills={backend} />
          <SkillGroup title="DevOps & Tooling" skills={infrastructure} />
        </div>
      </div>
    </section>
  );
};

export default Skills;