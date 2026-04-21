// import React from 'react';

// import Hero from '../Pages/Hero/Hero';
// import About from '../Pages/About/About';
// import Skills from '../Pages/Skills/Skills';
// import ProjectCardSection from '../Pages/ProjectCardSectio/ProjectCardSectio';
// import EducationTimeline from '../Pages/Education/Education';
// import ContactSection from '../Pages/ContactSection/ContactSection';
// import BackgroundMeteors from '../Component/BackgroundMeteors/BackgroundMeteors';

// const Home = () => {
//     return (
//         <>
      
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  
//             <div className="">
//                 <Hero/>
//             </div>
//             <div className="">
//                 <About></About>
//             </div>
//             <div className="">
//                 <Skills></Skills>
//             </div>
//             <div className="">
//                 <ProjectCardSection></ProjectCardSection>
//             </div>
//             <div className="">
//                 <EducationTimeline></EducationTimeline>
//             </div>
//             <div className="">
//                 <ContactSection></ContactSection>
//             </div>
            
//         </div>

      
//         </>
//     );
// };

// export default Home;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa'; // Make sure react-icons is installed

import Hero from '../Pages/Hero/Hero';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import ProjectCardSection from '../Pages/ProjectCardSectio/ProjectCardSectio';
import EducationTimeline from '../Pages/Education/Education';
import ContactSection from '../Pages/ContactSection/ContactSection';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 1. Detect scroll position to show/hide the arrow
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 2. Smooth scroll function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative">
            {/* Added container spacing to keep the layout clean */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-10">
                <div>
                    <Hero />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Skills />
                </div>
                <div>
                    <ProjectCardSection />
                </div>
                <div>
                    <EducationTimeline />
                </div>
                <div>
                    <ContactSection />
                </div>
            </div>

            {/* 3. FLOATING SCROLL TO TOP ARROW */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-[100] p-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full text-white hover:text-cyan-400 hover:border-cyan-500/50 shadow-2xl transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        {/* Little bounce animation on hover */}
                        <FaArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;