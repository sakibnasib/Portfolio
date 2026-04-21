// const education = [
//   {
//     title: "B.A in Political Science",
//     school: "National University",
//     icon: "🎓",
//   },
//   {
//     title: "HSC - Humanities",
//     school: "Nachole Govt. College",
//     icon: "🏫",
//   },
//   {
//     title: "SSC - Science",
//     school: "Nachole Pilot High School",
//     icon: "🏫",
//   },
// ];

// export default function EducationTimeline() {
//   return (
//     <div className=" relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute w-64 h-64 sm:w-80 sm:h-80 top-10 left-10  rounded-full blur-2xl sm:blur-3xl animation-delay-1000"></div>
//       <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bottom-10 right-10 rounded-full blur-2xl sm:blur-3xl animation-delay-2000"></div>
      
//       <div className="w-full max-w-4xl mx-auto relative z-10">
//         {/* Heading */}
//         <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
//           🎓 My Education
//         </h2>

//         {/* Timeline */}
//         <div className="relative border-l-2 sm:border-l-4 border-purple-300/60 pl-6 sm:pl-10">
//           {education.map((item, i) => (
//             <div
//               key={i}
//               className="mb-8 sm:mb-12 relative"
//               style={{
//                 animation: `fadeInUp 0.6s ease forwards ${i * 0.15}s`,
//               }}
//             >
//               {/* Timeline Marker */}
//               <span className="absolute -left-5 sm:-left-7 top-3 sm:top-5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg sm:text-2xl font-bold shadow-lg">
//                 {item.icon}
//               </span>

//               {/* Card */}
//               <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 ml-4 sm:ml-6">
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-white/80 text-base sm:text-lg">{item.school}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoSchoolOutline } from "react-icons/io5";

const education = [
  {
    title: "B.A in Political Science",
    school: "National University",
    year: "Graduated", // Added year for better UX
    icon: <HiOutlineAcademicCap />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "HSC - Humanities",
    school: "Nachole Govt. College",
    year: "Completed",
    icon: <IoSchoolOutline />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "SSC - Science",
    school: "Nachole Pilot High School",
    year: "Completed",
    icon: <IoSchoolOutline />,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto overflow-hidden">
      
      {/* 1. HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-xs font-black text-white/20 uppercase tracking-[0.5em] mb-4">Background</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
        </h3>
      </div>

      {/* 2. THE TIMELINE CONTAINER */}
      <div className="relative">
        
        {/* The Animated Gradient Line */}
        <div className="absolute left-[19px] md:left-1/2 md:-ml-[1px] top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-20"></div>

        <div className="space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot/Marker */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                <div className={`relative h-10 w-10 rounded-full bg-[#0a0a0a] border-2 border-white/10 flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(168,85,247,0.2)]`}>
                  {item.icon}
                  {/* Pulsing Aura */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20 animate-ping`}></div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-14 md:ml-0`}>
                <div className="group relative">
                  {/* Card Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500`}></div>
                  
                  {/* The Card */}
                  <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                      <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-white/50 font-medium">{item.school}</p>
                    
                    {/* Decorative element inside card */}
                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
}