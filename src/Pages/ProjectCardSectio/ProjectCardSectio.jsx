import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
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
      "js",
      "FireBseAdmin",
      "Framer Motion",
      "Axios",
    ],
    live: "https://safebite-aac87.web.app/",
    github: "https://i.ibb.co/W4SrkLpW/Screenshot-2025-06-28-160418.png",
    github2: "https://github.com/sakibnasib/SafeBits",
    description:
      "SafeBite is a web application designed to help users track their food items and reduce food waste. It notifies users when their food is nearing expiry and showcases expired items, promoting better food management and sustainability.",
    challenges:
      "This is my second project to manage Server  and  Client i am doing this project while doing this project I am facing these Track expiry dates JWT Auth Search and Filter (by category/title) Countdown Timer to expiry problems I know I have to improve in many things Inshallah I can do it  chake spling and conversion",
  },
  {
    id: 2,
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
      "js",
    ],
    live: "https://findmyroom-d1044.web.app/",
    github: "https://github.com/sakibnasib/FindMyroom",
    github2: "https://github.com/sakibnasib/FindMyRoom-Server",
    description:
      "AboutfindeMyroom is a full-featured roommate and rental discovery platform built with modern technologies.",
    challenges:
      "This is my first backend project using a database. It seems a bit difficult to fetch data using different queries or IDs and to delete or edit the data I have created, but I can do it from different documents and by following Google.",
  },
  {
    id: 3,
    title: "Bill Management Website 💳",
    images: [
      "https://i.ibb.co/B5V1rTW3/Screenshot-2025-06-29-003746.png",
      "https://i.ibb.co/QFNS4BFT/Screenshot-2025-06-29-003802.png",
      "https://i.ibb.co/xq0Cc1zD/Screenshot-2025-06-29-003835.png",
    ],
    tech: ["ReactJS", "Firebase", "Tailwind CSS", "SwiperJS "],
    live: "paybill-cc30d.web.app/",
    github: "https://github.com/sakibnasib/PayBill",
    github2: "https://github.com/sakibnasib/PayBill",
    description:
      "A modern and responsive Bill Management web application that allows users to view and pay utility bills using their available balance. It features secure authentication, dynamic bill filtering, balance deduction on payment, and profile management.",
    challenges:
      "This is my first project made with Fyabaze. At first there were problems, but later they were solved. I can overcome them. I still have a lot of things to improve.",
  },
];

export default function ProjectCardSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % projects[0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-10 rounded-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        My Projects
      </h1>

      <div data-aos="zoom-out-up" className="flex flex-col gap-12 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full bg-base-300 rounded-3xl shadow-md overflow-hidden border border-gray-200  p-3"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full h-64">
                <img
                  src={project.images[imageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge badge-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
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
                    GitHubCliend
                  </Link>
                  <Link
                    to={project.github2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    GitHubServer
                  </Link>
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
        <dialog id="details_modal" className="modal modal-open">
          <div className="modal-box max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-3 text-primary">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-gray-700">{selectedProject.description}</p>
            <h4 className="text-xl font-semibold mb-1 text-primary">
              Challenges I faced:
            </h4>
            <p className="text-sm text-gray-600">
              {selectedProject.challenges}
            </p>

            <div className="modal-action">
              <button
                className="btn btn-sm"
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
