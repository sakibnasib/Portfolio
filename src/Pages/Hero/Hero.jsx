// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import { TypeAnimation } from 'react-type-animation';
// import BackgroundMeteors from '../../Component/BackgroundMeteors/BackgroundMeteors';

// const socialLinks = [
//   {
//     to: 'https://github.com/sakibnasib',
//     label: 'GitHub',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
//         <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
//       </svg>
//     ),
//   },
//   {
//     to: 'https://linkedin.com/in/sakib-nasib-a13260335',
//     label: 'LinkedIn',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
//         <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
//       </svg>
//     ),
//   },
//   {
//     to: 'https://www.facebook.com/share/1B29aLNG2k/',
//     label: 'Facebook',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
//         <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
//       </svg>
//     ),
//   },
// ];

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <BackgroundMeteors>
//       <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10 py-10">
//         {/* Centered Profile Image */}
//         <div className={`mb-8 sm:mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative">
//             {/* Enhanced Floating Elements */}
//             <div className="absolute -top-6 -right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-xl shadow-yellow-500/30"></div>
//             <div className="absolute -bottom-6 -left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-xl shadow-purple-500/30"></div>
//             <div className="absolute top-1/2 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping shadow-xl shadow-cyan-500/30"></div>
            
//             {/* Enhanced Main Image Container */}
//             <div className="relative group">
//               {/* Outer Glow Ring */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60"></div>
              
//               {/* Image Border Glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full p-1 group-hover:scale-105 transition-transform duration-500">
//                 <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-white/30">
//                   <img
//                     src="https://i.ibb.co/xSPZkqwc/Snapchat-1654229165.jpg"
//                     alt="Sakib ul Nasib"
//                     className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
//                   />
//                 </div>
//               </div>
              
//               {/* Inner Shine Effect */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-white/15 group-hover:from-white/25 group-hover:to-white/25 transition-all duration-500"></div>
//             </div>

//             {/* Enhanced Experience Badge */}
//             <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-lg border border-white/30 rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-lg transform hover:scale-110 transition-all duration-300">
//               <div className="text-center">
//                 <div className="text-white font-bold text-base sm:text-lg">2+</div>
//                 <div className="text-white/80 text-xs sm:text-sm font-semibold uppercase">Years</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Text Content Below Image */}
//         <div className={`max-w-4xl space-y-6 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           {/* Greeting */}
//           <div className="flex items-center justify-center space-x-2 sm:space-x-3">
//             <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 transform hover:scale-110 transition-transform duration-300">
//               <span className="text-lg sm:text-xl">👋</span>
//             </div>
//             <div className="text-white/90 text-base sm:text-lg lg:text-xl font-medium">Hello, I'm</div>
//           </div>
          
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
//             <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
//               Sakib ul Nasib
//             </span>
//           </h1>

//           {/* Enhanced Animated Title */}
//           <div className="flex justify-center">
//             <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-xl px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 shadow-lg">
//               <TypeAnimation
//                 sequence={[
//                   'Frontend Developer',
//                   2000,
//                   'React Specialist',
//                   2000,
//                   'UI/UX Designer',
//                   2000,
//                   'Web Developer',
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 tracking-wide"
//                 repeat={Infinity}
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xs sm:max-w-md lg:max-w-2xl mx-auto font-light tracking-wide">
//             I craft exceptional digital experiences with modern web technologies. 
//             Passionate about creating beautiful, scalable, and user-centric applications 
//             that make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-medium">difference</span>.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center pt-2">
//             <Link
//               to="https://drive.google.com/file/d/1x4IBzXIM7sSKfw0ubT0bFAX9J7oSNQ-W/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transform flex items-center gap-2"
//             >
//               <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               <span className="relative z-10 text-sm sm:text-base lg:text-lg">Download Resume</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Link>
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-col items-center space-y-1 sm:space-y-2 pt-2">
//             <div className="text-white/60 text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wider">Connect with me</div>
//             <div className="flex space-x-2 sm:space-x-3">
//               {socialLinks.map((link, index) => (
//                 <Link
//                   key={link.label}
//                   to={link.to}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.label}
//                   className="group p-2 sm:p-2.5 lg:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 transform shadow-md hover:shadow-lg"
//                   style={{ animationDelay: `${index * 150}ms` }}
//                 >
//                   {link.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="flex flex-col items-center space-y-1">
//             <span className="text-white/50 text-xs sm:text-sm lg:text-base font-medium tracking-wider uppercase">Scroll to explore</span>
//             <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
//               <div className="w-0.5 h-1 sm:h-2 bg-gradient-to-b from-white/80 to-white/40 rounded-full mt-1 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BackgroundMeteors>
//   );
// };

// export default Hero;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import { TypeAnimation } from 'react-type-animation';

// const socialLinks = [
//   {
//     to: 'https://github.com/sakibnasib',
//     label: 'GitHub',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
//         <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
//       </svg>
//     ),
//   },
//   {
//     to: 'https://linkedin.com/in/sakib-nasib-a13260335',
//     label: 'LinkedIn',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
//         <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
//       </svg>
//     ),
//   },
//   {
//     to: 'https://www.facebook.com/share/18Ap9RboH8/',
//     label: 'Facebook',
//     icon: (
//       <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
//         <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
//       </svg>
//     ),
//   },
// ];

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center px-4 sm:px-3 lg:px-4 py-6 relative z-10">
      
//       {/* Profile Image */}
//       <div className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-2xl"></div>
//           <div className="relative rounded-full p-1">
//             <div className="rounded-full overflow-hidden border border-white/30 bg-black">
//               <img
//                 src="https://i.ibb.co/xSPZkqwc/Snapchat-1654229165.jpg"
//                 alt="Sakib ul Nasib"
//                 className="w-30 h-30 sm:w-40 sm:h-40 md:w-42 md:h-42 lg:w-72 lg:h-72 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className={`text-center space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
//         {/* <div className="flex justify-center items-center gap-2">
//           <span className="text-lg">👋</span>
//           <span className="text-white/80 text-sm sm:text-base">Hello, I'm</span>
//         </div> */}

//         <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
//           Sakib ul Nasib
//         </h1>

//         <div className="flex justify-center">
//           <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
//             <TypeAnimation
//               sequence={[
//                 'Frontend Developer',
//                 2000,
//                 'React Specialist',
//                 2000,
//                 'Web Developer',
//                 2000,
//               ]}
//               speed={50}
//               repeat={Infinity}
//               className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90"
//             />
//           </div>
//         </div>

//         <p className="text-sm sm:text-base lg:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
//           I craft exceptional digital experiences with modern web technologies.
//           Passionate about building scalable and user-centric applications that make a{' '}
//           <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
//             difference
//           </span>.
//         </p>

//         {/* Button */}
//         <div className="flex justify-center pt-2">
//           <Link
//             to="https://drive.google.com/file/d/1VjI3SvucjJZ0HlV4WfsV6ZzvwoN8SMun/view?usp=sharing"
//             target="_blank"
//             className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
//           >
//             Download Resume
//           </Link>
//         </div>

//         {/* Social Links */}
//         <div className="pt-3">
//           <div className="flex justify-center gap-3">
//             {socialLinks.map(link => (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 target="_blank"
//                 className="p-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
//               >
//                 {link.icon}
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Hero;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // Changed to react-router-dom for standard usage
import { TypeAnimation } from 'react-type-animation';

const socialLinks = [
  {
    to: 'https://github.com/sakibnasib',
    label: 'GitHub',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    to: 'https://linkedin.com/in/sakib-nasib-a13260335',
    label: 'LinkedIn',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
      </svg>
    ),
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 pt-5 pb-5 relative z-10">
      
      {/* 1. PROFILE IMAGE WITH SPINNING GLOW */}
      <div className={`group relative mb-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* The Animated Glow Ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        {/* Image Container */}
        <div className="relative flex items-center justify-center bg-[#030303] rounded-full p-1.5">
          <div className="rounded-full overflow-hidden w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 border border-white/10">
            <img
              src="https://i.ibb.co/xSPZkqwc/Snapchat-1654229165.jpg"
              alt="Sakib ul Nasib"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* 2. TEXT CONTENT */}
      <div className={`text-center space-y-6 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Sakib ul <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Nasib</span>
          </h1>
          
          <div className="flex justify-center h-8">
            <TypeAnimation
              sequence={['Frontend Developer', 2000, 'React Specialist', 2000, 'UI/UX Designer', 2000]}
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl font-medium text-white/60 tracking-wide"
            />
          </div>
        </div>

        <p className="text-base md:text-lg text-white/40 leading-relaxed max-w-xl mx-auto px-4">
          Building high-performance, beautiful web applications. 
          Focused on <span className="text-white/80">clean code</span> and 
          <span className="text-white/80"> exceptional user experiences</span>.
        </p>

        {/* 3. PREMIUM ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Shimmer Button */}
          <Link
            to="https://drive.google.com/file/d/1VjI3SvucjJZ0HlV4WfsV6ZzvwoN8SMun/view?usp=sharing"
            target="_blank"
            className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 transition-transform bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </Link>

          {/* Social Icons Refined */}
          <div className="flex gap-3">
            {socialLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                target="_blank"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Hero;




