"use client";
import { motion } from "framer-motion";

const education = [
  {
    title: "B.A in Political Science",
    school: "National University",
    date: "2019 – 2023",
    icon: "🎓",
  },
  {
    title: "HSC - Humanities",
    school: "Nachole Govt.College",
    date: "2016 – 2018",
    icon: "🏫",
  },
  {
    title: "SSC - Science",
    school: "Nachole Pilot High School",
    date: "2014 – 2016",
    icon: "🏫",
  },
];

export default function EducationTimeline() {
  return (
    <section className="min-h-screen bg-base-300 text-white py-24 px-6 mt-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 text-primary drop-shadow-lg">
          🎓 My Education
        </h2>

        <div className="relative border-l-4 border-primary pl-8">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-20 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-1.5 bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-lg border-4 border-black z-10">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-xl border border-gray-600 hover:scale-[1.02] transition-transform duration-300 group">
                <h3 className="text-2xl font-semibold text-secondary group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-lg">{item.school}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
