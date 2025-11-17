"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Empowering Education",
    description: "Supporting students through accessible educational loans.",
    image: "/images/project1.jpg",
  },
  {
    title: "Small Business Growth",
    description: "Helping small-scale businesses expand sustainably.",
    image: "/images/project2.jpg",
  },
  {
    title: "Asset Financing",
    description: "Providing loans for essential equipment and assets.",
    image: "/images/projects (4).jpg",
  },
  {
    title: "Community Development",
    description: "Enabling financial inclusion and local growth.",
    image: "/images/projects (3).jpg",
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover how we’re driving financial empowerment through strategic
          initiatives across Nigeria.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
