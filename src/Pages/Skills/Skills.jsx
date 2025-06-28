
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";


const skills = [
  {
    icon: <FaHtml5 className="text-orange-600" />,
    name: "HTML",
    description: "Structure web content using semantic HTML elements.",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    name: "CSS",
    description: "Style websites with responsive and modern designs.",
  },
  {
    icon: <FaJs className="text-yellow-400" />,
    name: "JavaScript",
    description: "Add dynamic and interactive functionality to websites.",
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    name: "React",
    description: "Build fast and scalable front-end applications.",
  },
  {
    icon: <SiExpress className="text-gray-800" />,
    name: "Express",
    description: "Minimalist backend framework for Node.js.",
  },
  {
    icon: <SiMongodb className="text-green-500" />,
    name: "MongoDB",
    description: "NoSQL database for scalable web apps.",
  },
  {
    icon: <SiFirebase className="text-yellow-500" />,
    name: "Firebase",
    description: "Cloud services for authentication, hosting, and more.",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
  },
];

const pulseBorder = {
  animate: {
    boxShadow: [
      "0 0 0 2px rgba(96,165,250,0.2)",
      "0 0 0 4px rgba(96,165,250,0.4)",
      "0 0 0 6px rgba(96,165,250,0.2)",
      "0 0 0 2px rgba(96,165,250,0.2)",
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Skills() {
  return (
    <div className="py-16 bg-gray-100 mt-10 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            {...pulseBorder}
            className="relative rounded-2xl p-6 text-center bg-white border border-blue-300"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
