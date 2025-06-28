import React from 'react';

import Hero from '../Pages/Hero/Hero';
import About from '../Pages/About/About';
import Skills from '../Pages/skills/Skills';
import ProjectCardSection from '../Pages/ProjectCardSectio/ProjectCardSectio';
import EducationTimeline from '../Pages/Education/Education';
import ContactSection from '../Pages/ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
        <Hero/>
        <About></About>
        <Skills></Skills>
        <ProjectCardSection></ProjectCardSection>
        <EducationTimeline></EducationTimeline>
        <ContactSection></ContactSection>
        </div>
    );
};

export default Home;