// import React, { useEffect, useState } from 'react';
// import { FaCode } from "react-icons/fa";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

// const skills = [
//   { icon: <FaHtml5 className="text-orange-500" size={24} />, name: "HTML5" },
//   { icon: <FaCss3Alt className="text-blue-500" size={24} />, name: "CSS3" },
//   { icon: <FaJs className="text-yellow-400" size={24} />, name: "JavaScript" },
//   { icon: <FaReact className="text-cyan-400" size={24} />, name: "React" },
//   { icon: <SiNodedotjs className="text-green-500" size={24} />, name: "Node.js" },
//   { icon: <SiExpress className="text-gray-600" size={24} />, name: "Express.js" },
//   { icon: <SiMongodb className="text-green-500" size={24} />, name: "MongoDB" },
//   { icon: <SiTailwindcss className="text-sky-400" size={24} />, name: "TailwindCSS" },
//   { icon: <SiVite className="text-purple-500" size={24} />, name: "Vite" },
// ];

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className=" py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute w-64 h-64 sm:w-80 sm:h-80 top-10 left-10  rounded-full blur-2xl sm:blur-3xl animation-delay-1000"></div>
//       <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bottom-10 right-10 rounded-full blur-2xl sm:blur-3xl animation-delay-2000"></div>
      
//       <div className="w-full max-w-6xl mx-auto p-3 sm:p-6 relative z-10">
        
//         {/* Section Header */}
//         <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h2 className="text-2xl sm:text-2 lg:text-3xl font-bold text-white mb-3 sm:mb-4">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
//         </div>

//         {/* About Content */}
//         <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
//           {/* Left Text */}
//           <div className="space-y-4 sm:space-y-5">
//             <div className="space-y-3 text-base sm:text-lg text-white/80 leading-relaxed">
//               <p>
//                 👋 Hello! I'm <span className="font-semibold text-cyan-400">Sakib ul Nasib</span>, a passionate Frontend Developer with a love for creating beautiful, functional, and user-centric digital experiences.
//               </p>
//               <p>
//                 🚀 I specialize in building modern web applications using cutting-edge technologies. My journey in web development started with curiosity and has evolved into a passion for solving complex problems through elegant code.
//               </p>
//               <p>
//                 💡 I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
//               </p>
//             </div>
//           </div>

//           {/* Right: Animated Skills Circle */}
//           <div className="relative flex justify-center">
//             <div className="relative w-64 h-64 sm:w-80 sm:h-80">
//               {/* Rotating Skills */}
//               <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
//                 {skills.slice(0, 8).map((skill, index) => {
//                   const angle = (360 / 8) * index;
//                   const radius = 100;
//                   const center = 128; // w-64 = 256px, w-80 = 320px
//                   const x = radius * Math.cos((angle * Math.PI) / 180);
//                   const y = radius * Math.sin((angle * Math.PI) / 180);

//                   return (
//                     <div
//                       key={index}
//                       className="absolute group"
//                       style={{
//                         left: `${center + x}px`,
//                         top: `${center + y}px`,
//                         transform: 'translate(-50%, -50%)',
//                       }}
//                     >
//                       <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 border border-white/30">
//                         {skill.icon}
//                       </div>
//                       <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                         {skill.name}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useEffect, useState } from 'react';
import { FaCode, FaRocket, FaLightbulb, FaUserAstronaut } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* 1. SECTION HEADER */}
      <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-sm font-black text-cyan-500 uppercase tracking-[0.4em] mb-2">Discovery</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          About <span className="text-white/20 italic">Me</span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* 2. LEFT: THE NARRATIVE (7 Columns) */}
        <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>
            <div className="relative bg-[#0a0a0a]/80 border border-white/5 p-8 rounded-3xl backdrop-blur-xl">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                I am a <span className="text-cyan-400 font-medium">Frontend Developer</span> dedicated to crafting immersive and highly functional digital experiences.
              </p>
              
              <div className="mt-6 space-y-4 text-white/50 text-base md:text-lg leading-relaxed">
                <p>
                  My approach to development is rooted in <span className="text-white/80">clean architecture</span> and 
                  <span className="text-white/80"> user-centric design</span>. I don't just write code; I build bridges 
                  between complex backend logic and intuitive user interfaces.
                </p>
                <p>
                  Based in <span className="text-white/80">Bangladesh</span>, I work remotely with teams worldwide to push 
                  the boundaries of what's possible on the web using the modern JavaScript ecosystem.
                </p>
              </div>

              {/* Signature/Tagline */}
              <div className="pt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-cyan-500/50"></div>
                <span className="text-xs uppercase tracking-widest text-cyan-500 font-bold italic">Design. Code. Deploy.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT: BENTO STATS (5 Columns) */}
        <div className={`lg:col-span-5 grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          {/* Card 1: Experience */}
          <div className="col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-colors">
            <FaRocket className="text-cyan-500 text-2xl mb-4" />
            <h4 className="text-white font-bold text-xl mb-1">Fast Learner</h4>
            <p className="text-white/40 text-sm">Constantly evolving with the latest Next.js and React features.</p>
          </div>

          {/* Card 2: Code Quality */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:bg-white/[0.02] transition-colors">
            <FaCode className="text-purple-500 text-2xl mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">Clean Code</h4>
            <p className="text-white/40 text-xs">Maintainable, scalable, and dry codebases.</p>
          </div>

          {/* Card 3: Creative */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:bg-white/[0.02] transition-colors">
            <FaLightbulb className="text-yellow-500 text-2xl mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">UI/UX Mind</h4>
            <p className="text-white/40 text-xs">Eye for detail and pixel-perfect layouts.</p>
          </div>

          {/* Card 4: Global Availability */}
          <div className="col-span-2 flex items-center justify-between bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-3xl">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                <span className="text-white/80 text-sm font-medium tracking-tight">Available for remote roles</span>
             </div>
             <FaUserAstronaut className="text-cyan-500/50" />
          </div>

        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
};

export default About;