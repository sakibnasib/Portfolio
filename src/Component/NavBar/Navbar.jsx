// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";
// import { AnimatePresence } from "framer-motion";

// const navItems = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/skills", label: "Skills" },
//   { to: "/projects", label: "Projects" },
//   { to: "/education", label: "Education" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   const renderNavLinks = (isMobile = false) =>
//     navItems.map(({ to, label }) => (
//       <li key={to}>
//         <NavLink
//           to={to}
//           onClick={() => isMobile && setMenuOpen(false)}
//           className={({ isActive }) =>
//             `block px-4 py-2 rounded-md transition font-medium ${
//               isActive
//                 ? "text-white bg-white/30 backdrop-blur-sm border border-white/40"
//                 : "text-white/90 hover:text-white hover:bg-white/20"
//             }`
//           }
//         >
//           {label}
//         </NavLink>
//       </li>
//     ));

//   return (
//     <nav className="w-full sticky top-0 z-50">
     
//         <div className="  backdrop-blur-lg rounded-2xl shadow-2xl flex items-center justify-between py-3 px-6 border border-white/20">
//           {/* Left: Logo and Hamburger */}
//           <div className="flex items-center gap-4">
//             {/* Mobile menu button */}
//             <button
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//               aria-expanded={menuOpen}
//               className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white hover:bg-white/20 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>

//             {/* Logo */}
//             <Link to="/" className="flex items-center">
//               <img
//                 src="https://i.ibb.co/3525vR0T/images-2.png"
//                 alt="Logo"
//                 className="w-16 h-12 rounded-full object-cover border-2 border-white/50 shadow-lg"
//               />
//             </Link>
//           </div>

//           {/* Center: Menu Links (desktop) */}
//           <ul className="hidden lg:flex space-x-8">
//             {renderNavLinks()}
//           </ul>

//           {/* Right: Resume Button */}
//           <div>
//             <Link
//               to="https://drive.google.com/file/d/1x4IBzXIM7sSKfw0ubT0bFAX9J7oSNQ-W/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/20 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white/30 transition duration-300 border border-white/30"
//             >
//               Resume
//             </Link>
//           </div>
//         </div>

//         {/* Mobile dropdown menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <ul
//               className="lg:hidden bg-gradient-to-r from-cyan-700/90 via-purple-700/90 to-pink-700/90 backdrop-blur-lg rounded-b-3xl shadow-xl mt-1 py-4 px-6 space-y-2 text-center border border-white/20"
//             >
//               {renderNavLinks(true)}
//             </ul>
//           )}
//         </AnimatePresence>
     
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // Use 'react-router' if that's your setup
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background blur/border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl" 
          : "bg-transparent border border-transparent"
        }`}
      >
        {/* 1. LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20 group-hover:border-cyan-500/50 transition-colors duration-500">
            <img
              src="https://i.ibb.co/3525vR0T/images-2.png"
              alt="Logo"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="text-white font-bold tracking-tighter text-xl hidden sm:block">
            Sakib<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* 2. DESKTOP NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `
                  relative px-4 py-2 text-sm font-medium transition-all duration-300
                  ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}
                `}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <Link
            to="https://drive.google.com/file/d/1x4IBzXIM7sSKfw0ubT0bFAX9J7oSNQ-W/view?usp=sharing"
            target="_blank"
            className="hidden sm:block px-5 py-2 text-xs font-bold bg-white text-black rounded-full hover:bg-cyan-400 transition-all duration-300 active:scale-95"
          >
            RESUME
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 lg:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl  shadow-3xl z-[101]"
          >
            <ul className="flex flex-col gap-6 items-center">
              {navItems.map(({ to, label }) => (
                <li key={to} className="w-full text-center">
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `
                      block text-2xl font-bold tracking-tighter transition-all
                      ${isActive ? "text-cyan-500" : "text-white/40"}
                    `}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <div className="w-full h-px bg-white/5 my-2"></div>
              <Link
                to="https://drive.google.com/file/d/1x4IBzXIM7sSKfw0ubT0bFAX9J7oSNQ-W/view?usp=sharing"
                target="_blank"
                className="w-full py-4 bg-white text-black text-center font-black rounded-2xl"
              >
                DOWNLOAD RESUME
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;