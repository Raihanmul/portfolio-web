"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contact = [
  {
    id: 1,
    icon: "/icons/email-icon.svg",
    title: "Email",
    link: "mailto:raihanmul10@gmail.com",
  },
  {
    id: 2,
    icon: "/icons/github-icon.svg",
    title: "GitHub",
    link: "https://github.com/Raihanmul",
  },
  {
    id: 3,
    icon: "/icons/linkedin-icon.svg",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/raihan-mulyana/",
  },
  {
    id: 4,
    icon: "/icons/instagram-icon.svg",
    title: "Instagram",
    link: "https://www.instagram.com/raihanmul_022/",
  },
];

export default function ContactSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.section
      className="w-full bg-[#F1EFEC] flex lg:flex-row flex-col p-7.5 rounded-4xl items-center gap-[100px] deep-navy-blue"
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h1 className="spline font-semibold text-[50px] max-w-[415px] leading-20">
        What are you looking for ?
      </h1>

      <div className="flex flex-col w-full gap-10">
        {/* Baris pertama */}
        <div className="flex gap-12 w-full justify-between">
          {contact.slice(0, 2).map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div className="w-full" key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex items-center bg-white shadow-lg rounded-[20px] p-2.5 w-fit cursor-pointer transition-all"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <div
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered
                        ? "translateX(0)"
                        : "translateX(10px)",
                      maxWidth: isHovered ? "200px" : "0px",
                      marginLeft: isHovered ? "12px" : "0px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                    }}
                    className="font-semibold spline text-[30px]"
                  >
                    {item.title}
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Baris kedua */}
        <div className="flex gap-12">
          {contact.slice(2, 4).map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div className="w-full" key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex items-center bg-white shadow-lg rounded-[20px] p-2.5 w-fit cursor-pointer transition-all"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <div
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered
                        ? "translateX(0)"
                        : "translateX(10px)",
                      maxWidth: isHovered ? "200px" : "0px",
                      marginLeft: isHovered ? "12px" : "0px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                    }}
                    className="font-semibold spline text-[30px]"
                  >
                    {item.title}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
