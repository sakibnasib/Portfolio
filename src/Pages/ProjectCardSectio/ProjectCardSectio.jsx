import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "🏟️ CourtConnect",
    images: [
      "https://i.ibb.co/vxmWj7m2/Screenshot-2025-07-24-230031.png",
      "https://i.ibb.co/24VDcMG/Screenshot-2025-07-24-224502.png",
      "https://i.ibb.co/BVGYJ0nK/Screenshot-2025-07-24-224246.png",
    ],
    tech: [
      "ReactJS",
      "Tailwind CSS",
      "Firebase Auth",
      "ExpressJS",
      "MongoDB",
      "Stripe",
      "Google Charts",
      "React Query",
      "Axios",
      "Framer Motion",
    ],
    live: "https://courtconnect-fe336.web.app/",
    github: "https://github.com/sakibnasib/CourtConnect",
    github2: "https://github.com/sakibnasib/courtconnect-server",
    description:
      "CourtConnect is a full-stack web platform that enables users to book sports courts (like tennis, badminton, football, etc.) online. With role-based dashboards (admin/member/user), real-time court availability, and Stripe-integrated payments, it ensures a smooth booking experience.",
    challenges:
      "This project challenged me with building role-based access control, real-time filtering and booking logic, payment processing with Stripe, and data visualization using charts. I learned a lot about managing authenticated REST APIs and scaling a full-stack app for multiple user roles.",
  },
  {
    id: 2,
    title: "🥗 SafeBite",
    images: [
      "https://i.ibb.co/Q3jVrgBw/LCWUWBuvi6.jpg",
      "https://i.ibb.co/W4SrkLpW/Screenshot-2025-06-28-160418.png",
      "https://i.ibb.co/wZ34JwQF/Screenshot-2025-06-28-155142.png",
    ],
    tech: [
      "ReactJS",
      "Firebase",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "cors",
      "JavaScript",
      "Firebase Admin",
      "Framer Motion",
      "Axios",
    ],
    live: "https://safebite-aac87.web.app/",
    github: "https://github.com/sakibnasib/SafeBite-Client",
    github2:
      "https://github.com/sakibnasib/SafeBite-Client",
    description:
      "SafeBite is a web application that helps users track food items and reduce waste. It notifies users when food is nearing expiry, showcases expired items, and promotes better food management and sustainability.",
    challenges:
      "I faced challenges with tracking expiry dates, implementing JWT authentication, building search and filter functionality by category/title, and creating a countdown timer to expiry. It helped me learn more about real-time logic and user reminders.",
  },
  {
    id: 3,
    title: "🏠 FindMyRoom",
    images: [
      "https://i.ibb.co/hFytfRS8/Screenshot-2025-06-28-155520.png",
      "https://i.ibb.co/YFNDGjSN/Screenshot-2025-06-28-155644.png",
      "https://i.ibb.co/pjMQNyhK/Screenshot-2025-06-28-155725.png",
    ],
    tech: [
      "ReactJS",
      "Firebase",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "cors",
      "JavaScript",
    ],
    live: "https://findmyroom-d1044.web.app/",
    github: "https://github.com/sakibnasib/FindMyroom",
    github2: "https://github.com/sakibnasib/FindMyRoom-Server",
    description:
      "FindMyRoom is a full-featured roommate and rental discovery platform built with modern web technologies. It connects people looking for rooms or roommates.",
    challenges:
      "This was my first backend project using a database. I found it tricky to fetch, update, and delete data correctly using IDs and Mongo queries, but I learned a lot from documentation and debugging.",
  },
];

export default function ProjectCardSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndices, setImageIndices] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const updated = {};
        projects.forEach((project) => {
          const current = prev[project.id] || 0;
          updated[project.id] = (current + 1) % project.images.length;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        My Projects
      </h1>

      <div data-aos="zoom-in-right" className="flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-200 rounded-3xl shadow-md border border-gray-200 p-4"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Image */}
              <div className="lg:w-1/2 w-full h-64">
                <img
                  src={
                    project.images[imageIndices[project.id] || 0] ??
                    project.images[0]
                  }
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full flex flex-col justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    {project.description.slice(0, 150)}...
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live Demo
                  </Link>
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    GitHub Client
                  </Link>
                  {project.github2 && (
                    <Link
                      to={project.github2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub Server
                    </Link>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-sm btn-secondary"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog open className="modal modal-open backdrop-blur-sm bg-black/30 z-50">
          <div className="modal-box max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {selectedProject.title}
            </h3>

            {/* Image Slider */}
            <div className="flex overflow-x-auto gap-4 mb-6 rounded-xl">
              {selectedProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="h-48 w-auto rounded-xl shadow-md"
                />
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Description</h4>
              <p className="text-sm text-gray-600">{selectedProject.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Challenges Faced</h4>
              <p className="text-sm text-gray-600 whitespace-pre-wrap">
                {selectedProject.challenges}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Live Site
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
              >
                GitHub Client
              </a>
              {selectedProject.github2 && (
                <a
                  href={selectedProject.github2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  GitHub Server
                </a>
              )}
              <button
                className="btn btn-sm btn-neutral ml-auto"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
