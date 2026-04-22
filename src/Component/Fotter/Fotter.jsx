// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { Link } from "react-router";

// export default function Footer() {
//   return (
//     <footer className="">
      
//         <div className=" backdrop-blur-lg  sm:py-5 px-2 rounded-t-3xl shadow-2xl border border-white/30">
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
//             {/* Logo or site name */}
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
//               Sakib ul Nasib<span className="text-pink-300">.</span>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-xl sm:text-2xl">
//               <Link
//                 to="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="text-white/90 hover:text-pink-300 transition transform hover:scale-110"
//               >
//                 <FaFacebookF />
//               </Link>
             
//               <Link
//                 to="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="text-white/90 hover:text-pink-300 transition transform hover:scale-110"
//               >
//                 <FaLinkedinIn />
//               </Link>
//               <Link
//                 to="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="text-white/90 hover:text-pink-300 transition transform hover:scale-110"
//               >
//                 <FaGithub />
//               </Link>
//             </div>

//             {/* Copyright */}
//             <p className="text-base sm:text-lg text-white/80 select-none">
//               &copy; {new Date().getFullYear()}   Sakib ul Nasib. All rights reserved.
//             </p>
//           </div>
//         </div>
      
//     </footer>
//   );
// }



import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold tracking-tighter text-white">
              Sakib ul{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Nasib
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
              Frontend Developer • 
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <SocialCircle to="https://github.com/sakibnasib" icon={<FaGithub />} label="GitHub" />
            <SocialCircle to="https://linkedin.com/in/sakib-nasib-a13260335" icon={<FaLinkedinIn />} label="LinkedIn" />
           
            <SocialCircle to="https://facebook.com/profile.php?id=61584962325153" icon={<FaFacebookF />} label="Facebook" />
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col items-center md:items-end gap-1">
            
            <p className="text-[10px] text-white/10 uppercase tracking-widest">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
    </footer>
  );
}

/* SOCIAL ICON COMPONENT */
const SocialCircle = ({ to, icon, label }) => (
  <Link
   to={to}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="relative group p-3 rounded-full bg-white/[0.03] border border-white/5 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 rounded-full bg-white/10 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <span className="relative z-10 text-lg">
      {icon}
    </span>
  </Link>
);