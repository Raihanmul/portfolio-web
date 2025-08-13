"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectData = [
  {
    img: "/images/space-tourism.png",
    title: "Space Tourism",
    description:
      "Space Tourism is a modern, responsive landing page for space travel experiences.",
    tech: ["Next JS", "Tailwind CSS"],
    link: "https://raihan-frontend-8.netlify.app/",
  },
  {
    img: "/images/smart-home.png",
    title: "Smart Home",
    description:
      "Smart Home is a responsive landing page for home automation systems.",
    tech: ["HTML", "CSS", "JS"],
    link: "https://raihan-frontend-3.netlify.app/",
  },
  {
    img: "/images/hikari.png",
    title: "Hikari Japanese Academy",
    description:
      "Landing page design for a Japanese language academy, crafted in Figma with a clean and cultural aesthetic.",
    tech: ["Figma"],
    link: "/project/hikari-japanese-academy",
  },
  {
    img: "/images/lails-bakery.png",
    title: "Lail's Bakery",
    description:
      "Lail’s Bake is a simple and elegant bakery landing page built and clean layout with soft colors.",
    tech: ["HTML", "CSS"],
    link: "https://raihan-frontend-11-12.netlify.app/",
  },
  {
    img: "/images/filter.png",
    title: "Product Filter",
    description:
      "This Product Filter is a learning assignment that teaches how to create a product filter using React.",
    tech: ["React", "Tailwind CSS"],
    link: "https://raihan-club-10.netlify.app/",
  },
  {
    img: "/images/dad-jokes.png",
    title: "Dad Jokes Generator",
    description:
      "Dad Jokes Generator is a simple web application that generates random dad jokes.",
    tech: ["HTML", "CSS", "JS"],
    link: "https://raihan-club-6.netlify.app/",
  },
];

export default function ProjectPreview() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div
      className="w-full min-h-screen flex flex-col gap-[60px] items-center justify-center"
      id="projects"
    >
      <h1 className="grotesk text-5xl font-bold text-[#F1EFEC]">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[60px]">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative group flex flex-col min-w-[300px] p-5 bg-[#1E3E61] rounded-[20px] w-fit items-center justify-start gap-7 overflow-hidden text-center shadow-md"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.1 } }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            whileTap={{scale: 0.9}}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-[350px] h-[232px] rounded-[20px] object-cover"
            />
            <div className="flex flex-col items-center justify-center max-w-[294px] gap-[5px]">
              <h2 className="spline text-3xl lg:text-4xl text-[#F1EFEC] font-semibold">
                {project.title}
              </h2>
              <p className="text-[#F1EFEC] w-full opacity-80 text-center sans-3 leading-[100%]">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-5 py-0.5 sans-3 bg-[#F1EFEC] text-[#1E3E61] font-bold border border-[#123458] rounded-[20px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <AnimatePresence>
              {hoverIndex === index && (
                <motion.a
                  href={project.link}
                  target={`${project.link.startsWith("http") ? "_blank" : ""}`}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center z-20"
                >
                  <span className="text-[#F1EFEC] font-semibold text-xl underline tracking-wide">
                    {project.link.startsWith("http") ? "Live Preview" : "View Design"}
                  </span>
                </motion.a>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
