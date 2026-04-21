// import { AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router";

// const projects = [
//   {
//     id: 1,
//     title: "🏟️ CourtConnect",
//     images: [
//       "https://i.ibb.co/vxmWj7m2/Screenshot-2025-07-24-230031.png",
//       "https://i.ibb.co/24VDcMG/Screenshot-2025-07-24-224502.png",
//       "https://i.ibb.co/BVGYJ0nK/Screenshot-2025-07-24-224246.png",
//     ],
//     tech: [
//       "ReactJS",
//       "Tailwind CSS",
//       "Firebase Auth",
//       "ExpressJS",
//       "MongoDB",
//       "Stripe",
//       "Google Charts",
//       "React Query",
//       "Axios",
//       "Framer Motion",
//     ],
//     live: "https://courtconnect-fe336.web.app/",
//     github: "https://github.com/sakibnasib/CourtConnect",
//     github2: "https://github.com/sakibnasib/courtconnect-server",
//     description:
//       "CourtConnect is a full-stack web platform that enables users to book sports courts (like tennis, badminton, football, etc.) online. With role-based dashboards (admin/member/user), real-time court availability, and Stripe-integrated payments, it ensures a smooth booking experience.",
//     challenges:
//       "Building role-based access control, real-time booking logic, Stripe payments, and charts was challenging but rewarding. I learned how to manage authenticated APIs and scale for multiple user roles.",
//   },
//   {
//     id: 2,
//     title: "FoodTracking",
//     images: [
//       "https://i.ibb.co.com/BV0sM9gr/Screenshot-2025-08-11-161116.png",
//       "https://i.ibb.co.com/BV0sM9gr/Screenshot-2025-08-11-161116.png",
//       "https://i.ibb.co.com/BV0sM9gr/Screenshot-2025-08-11-161116.png",
//     ],
//     tech: [
//       "ReactJS",
//       "Firebase",
//       "ExpressJS",
//       "MongoDB",
//       "Tailwind CSS",
//       "JavaScript",
//       "Firebase Admin",
//       "Framer Motion",
//       "Axios",
//     ],
//     live: "https://foodtracking-29898.web.app/",
//     github: "https://github.com/sakibnasib/FoodTracking-Client",
//     github2: "https://github.com/sakibnasib/FoodTracking-Server",
//     description:
//       "SafeBite helps users track food items and reduce waste with expiry notifications and expired item lists, promoting better sustainability.",
//     challenges:
//       "Tracking expiry dates, implementing JWT auth, and creating category-based search and countdown timers required advanced state and date logic.",
//   },
//   {
//     id: 3,
//     title: "🏠 FindMyRoom",
//     images: [
//       "https://i.ibb.co/hFytfRS8/Screenshot-2025-06-28-155520.png",
//       "https://i.ibb.co/YFNDGjSN/Screenshot-2025-06-28-155644.png",
//       "https://i.ibb.co/pjMQNyhK/Screenshot-2025-06-28-155725.png",
//     ],
//     tech: [
//       "ReactJS",
//       "Firebase",
//       "ExpressJS",
//       "MongoDB",
//       "Tailwind CSS",
//       "JavaScript",
//     ],
//     live: "https://findmyroom-d1044.web.app/",
//     github: "https://github.com/sakibnasib/FindMyroom",
//     github2: "https://github.com/sakibnasib/FindMyRoom-Server",
//     description:
//       "FindMyRoom connects people looking for rooms or roommates with a smooth and simple interface.",
//     challenges:
//       "This was my first backend + DB project. Learning Mongo queries for CRUD operations was tricky but a great learning experience.",
//   },
// ];

// export default function ProjectCardSection() {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [imageIndices, setImageIndices] = useState({});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndices((prev) => {
//         const updated = {};
//         projects.forEach((project) => {
//           const current = prev[project.id] || 0;
//           updated[project.id] = (current + 1) % project.images.length;
//         });
//         return updated;
//       });
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className=" py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute w-64 h-64 sm:w-80 sm:h-80 top-10 left-10  rounded-full blur-2xl sm:blur-3xl animation-delay-1000"></div>
//       <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bottom-10 right-10  rounded-full blur-2xl sm:blur-3xl animation-delay-2000"></div>
      
//       <div className="w-full max-w-6xl mx-auto relative z-10">
//         <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">
//           🚀 My Projects
//         </h1>

//         <div className="flex flex-col gap-8 sm:gap-12">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg"
//               style={{
//                 animation: `fadeInUp 0.4s ease forwards`,
//               }}
//             >
//               <div className="flex flex-col lg:flex-row">
//                 {/* Image */}
//                 <div className="lg:w-1/2 w-full relative">
//                   <img
//                     src={
//                       project.images[imageIndices[project.id] || 0] ??
//                       project.images[0]
//                     }
//                     alt={project.title}
//                     className="w-full h-48 sm:h-64 lg:h-full object-cover"
//                   />
//                   <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/50 text-white text-xs px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
//                     {project.images.length} Images
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="lg:w-1/2 w-full p-4 sm:p-6 flex flex-col justify-between">
//                   <div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
//                       {project.title}
//                     </h2>
//                     <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                       {project.tech.map((tech, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 text-xs rounded-full border border-cyan-400/30 font-medium"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <p className="text-white/80 text-sm leading-relaxed">
//                       {project.description.slice(0, 120)}...
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
//                     <Link
//                       to={project.live}
//                       target="_blank"
//                       className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition font-medium text-sm"
//                     >
//                       Live Demo
//                     </Link>
//                     <Link
//                       to={project.github}
//                       target="_blank"
//                       className="px-3 sm:px-4 py-2 border border-cyan-400/50 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition font-medium text-sm"
//                     >
//                       GitHub Client
//                     </Link>
//                     {project.github2 && (
//                       <Link
//                         to={project.github2}
//                         target="_blank"
//                         className="px-3 sm:px-4 py-2 border border-cyan-400/50 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition font-medium text-sm"
//                       >
//                         GitHub Server
//                       </Link>
//                     )}
//                     <button
//                       onClick={() => setSelectedProject(project)}
//                       className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-medium text-sm"
//                     >
//                       Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         <AnimatePresence>
//           {selectedProject && (
//             <div
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               onClick={() => setSelectedProject(null)}
//             >
//               <div
//                 className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-6">
//                     <h2 className="text-2xl font-bold text-white">
//                       {selectedProject.title}
//                     </h2>
//                     <button
//                       onClick={() => setSelectedProject(null)}
//                       className="text-gray-400 hover:text-white text-2xl"
//                     >
//                       ×
//                     </button>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
//                       <p className="text-gray-300 mb-4">{selectedProject.description}</p>
//                       <h3 className="text-lg font-semibold text-white mb-3">Challenges</h3>
//                       <p className="text-gray-300">{selectedProject.challenges}</p>
//                     </div>
                    
//                     <div>
//                       <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedProject.tech.map((tech, idx) => (
//                           <span
//                             key={idx}
//                             className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <div className="mt-6 space-y-3">
//                         <Link
//                           to={selectedProject.live}
//                           target="_blank"
//                           className="block w-full py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition font-medium text-center"
//                         >
//                           Live Demo
//                         </Link>
//                         <Link
//                           to={selectedProject.github}
//                           target="_blank"
//                           className="block w-full py-2 border border-cyan-400/50 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition font-medium text-center"
//                         >
//                           GitHub Client
//                         </Link>
//                         {selectedProject.github2 && (
//                           <Link
//                             to={selectedProject.github2}
//                             target="_blank"
//                             className="block w-full py-2 border border-cyan-400/50 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition font-medium text-center"
//                           >
//                             GitHub Server
//                           </Link>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router"; // Use "react-router" as per your import
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCode } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    title: "CourtConnect",
    images: [
      "https://i.ibb.co/vxmWj7m2/Screenshot-2025-07-24-230031.png",
      "https://i.ibb.co/24VDcMG/Screenshot-2025-07-24-224502.png",
      "https://i.ibb.co/BVGYJ0nK/Screenshot-2025-07-24-224246.png",
    ],
    tech: ["ReactJS", "Tailwind CSS", "Firebase", "ExpressJS", "MongoDB", "Stripe"],
    live: "https://courtconnect-fe336.web.app/",
    github: "https://github.com/sakibnasib/CourtConnect",
    github2: "https://github.com/sakibnasib/courtconnect-server",
    description: "Full-stack sports court booking platform featuring role-based dashboards, real-time availability, and Stripe payments.",
    challenges: "Implemented complex role-based access control and real-time booking synchronization across multiple user types.",
  },
  {
    id: 2,
    title: "FoodTracking",
    images: [
      "https://i.ibb.co.com/BV0sM9gr/Screenshot-2025-08-11-161116.png",
      "https://i.ibb.co.com/BV0sM9gr/Screenshot-2025-08-11-161116.png",
    ],
    tech: ["ReactJS", "Firebase", "ExpressJS", "MongoDB", "Tailwind", "Axios"],
    live: "https://foodtracking-29898.web.app/",
    github: "https://github.com/sakibnasib/FoodTracking-Client",
    github2: "https://github.com/sakibnasib/FoodTracking-Server",
    description: "Sustainability app helping users reduce food waste via expiry notifications and inventory management.",
    challenges: "Engineered a custom date-tracking logic system and automated notifications for item expiry.",
  },
  {
    id: 3,
    title: "FindMyRoom",
    images: [
      "https://i.ibb.co/hFytfRS8/Screenshot-2025-06-28-155520.png",
      "https://i.ibb.co/YFNDGjSN/Screenshot-2025-06-28-155644.png",
    ],
    tech: ["ReactJS", "Firebase", "ExpressJS", "MongoDB", "Tailwind CSS"],
    live: "https://findmyroom-d1044.web.app/",
    github: "https://github.com/sakibnasib/FindMyroom",
    github2: "https://github.com/sakibnasib/FindMyRoom-Server",
    description: "A specialized platform connecting people looking for roommates with a streamlined search interface.",
    challenges: "Mastered MongoDB CRUD operations and implemented multi-criteria search filtering for the first time.",
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const isEven = index % 2 === 0;

  // Auto-slide images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project.images.length);
    }, 4000 + index * 500);
    return () => clearInterval(timer);
  }, [project.images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-20 items-center mb-32`}
    >
      {/* 1. IMAGE SIDE (Browser Frame) */}
      <div className="w-full lg:w-3/5 group relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
          {/* Browser Bar */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="ml-4 flex-1 h-5 bg-white/5 rounded-md flex items-center px-3">
               <div className="text-[10px] text-white/20 truncate">{project.live}</div>
            </div>
          </div>
          
          <div className="relative aspect-video overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={project.images[currentImg]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Quick Actions Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
               <Link to={project.live} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition"><FaExternalLinkAlt size={18}/></Link>
               <Link to={project.github} target="_blank" className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition"><FaGithub size={18}/></Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTENT SIDE */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-xs uppercase tracking-widest">
           <HiOutlineRocketLaunch size={20}/>
           <span>Featured Project</span>
        </div>
        
        <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter italic">
          {project.title}
        </h3>

        <p className="text-white/50 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-medium text-white/40">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-6 flex items-center gap-6">
           <button 
            onClick={() => onOpen(project)}
            className="flex items-center gap-2 text-white font-bold group hover:text-cyan-400 transition"
           >
             View Details <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
           </button>
           <div className="h-1 w-1 rounded-full bg-white/20"></div>
           <Link to={project.github} target="_blank" className="text-white/30 hover:text-white transition">
             <FaGithub size={22}/>
           </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-24">
        <h2 className="text-xs font-black text-white/20 uppercase tracking-[0.5em] mb-4">Portfolio</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Work.</span>
        </h3>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />
        ))}
      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full text-white transition z-10"
              >✕</button>

              <div className="p-8 md:p-12 space-y-12">
                <div>
                   <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter">{selectedProject.title}</h2>
                   <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md text-xs font-bold">{t}</span>
                    ))}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-6">
                      <h4 className="text-white/30 font-bold uppercase text-xs tracking-widest">Project Overview</h4>
                      <p className="text-white/70 text-lg leading-relaxed">{selectedProject.description}</p>
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-white/30 font-bold uppercase text-xs tracking-widest">The Challenge</h4>
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <p className="text-white/60 italic leading-relaxed">"{selectedProject.challenges}"</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
                   <Link to={selectedProject.live} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-cyan-50 transition">Visit Live Website</Link>
                   <Link to={selectedProject.github} target="_blank" className="flex-1 py-4 bg-white/5 border border-white/10 text-white text-center font-bold rounded-2xl hover:bg-white/10 transition">Source Code</Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}