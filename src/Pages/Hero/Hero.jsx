import React from 'react';
import { Link } from 'react-router';
import { TypeAnimation } from 'react-type-animation';

const socialLinks = [
  {
    to: 'https://github.com/sakibnasib',
    label: 'GitHub',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    to: 'https://linkedin.com/in/sakib-nasib-a13260335',
    label: 'LinkedIn',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
      </svg>
    ),
  },
  {
    to: 'https://www.facebook.com/share/1B29aLNG2k/',
  label: 'Facebook',
  icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
    </svg>
    ),
  },
];
const Hero = () => {
    return (

      <section data-aos="fade-up"
      className="min-h-[40vh]  flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-violet-100 via-purple-100 to-pink-100 px-6 md:px-20  pb-7 rounded-2xl"
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-6 py-10 md:py-0">
        <h1 className="text-4xl text-gray-900 md:text-4xl font-extrabold  leading-tight drop-shadow-lg mt-5">
          Hi, I&apos;m <span className="text-violet-600">Sakib ul Nasib </span> 👋<br />
         MERN Stack Developer
        </h1>
        <p className="text-lg md:text-2xl  max-w-xl">
          I build beautiful, fast, and accessible web apps with React, Tailwind CSS, and modern tools. Let&apos;s create something amazing together!
        </p>
         <div className="flex gap-5 mt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
             to={link.to}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-600 hover:text-violet-600 transition-colors duration-200"
            >
              {link.icon}
            </Link>
          ))}
        </div>
         <div>
    <Link 
      to="https://drive.google.com/file/d/1x4IBzXIM7sSKfw0ubT0bFAX9J7oSNQ-W/view?usp=sharing" 
      download 
      class="bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Resume
    </Link>
  </div>
       {/* j */}
      </div>
      <div data-aos="zoom-in-down" className="flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0">
        <img
          src="https://i.ibb.co/xSPZkqwc/Snapchat-1654229165.jpg"
          alt="Profile"
          className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-xl bg-white"
        />
      </div>
    </section>
    );
};

export default Hero;