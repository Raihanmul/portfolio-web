"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "@/components/LanguageSelector";
import descriptions from "@/data/descriptions";

export default function AboutPage() {
  const [language, setLanguage] = useState("English");
  const [isIntroDone, setIntroDone] = useState(false);

  const skills = [
    { name: "JavaScript", icon: "/icons/javascript-icon.svg", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "React", icon: "/icons/react-icon.svg", link: "https://en.wikipedia.org/wiki/React_(software)" },
    { name: "CSS", icon: "/icons/css-icon.svg", link: "https://en.wikipedia.org/wiki/CSS" },
    { name: "HTML", icon: "/icons/html-icon.svg", link: "https://en.wikipedia.org/wiki/HTML" },
    { name: "Next.js", icon: "/icons/nextjs.svg", link: "https://en.wikipedia.org/wiki/Next.js" },
    { name: "Tailwind CSS", icon: "/icons/tailwind-icon.svg", link: "https://en.wikipedia.org/wiki/Tailwind_CSS" },
    { name: "Visual Studio Code", icon: "/icons/vscode-icon.svg", link: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    { name: "Figma", icon: "/icons/figma-icon.svg", link: "https://en.wikipedia.org/wiki/Figma" },
    { name: "Canva", icon: "/icons/canva-icon.svg", link: "https://en.wikipedia.org/wiki/Canva" },
  ];

  const handleIntroComplete = () => {
    setIntroDone(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#123458] p-6 md:p-16 text-white overflow-hidden relative gap-20">
      <AnimatePresence>
        {!isIntroDone && (
          <motion.h1
            key="intro-aboutme"
            initial={{
              position: "absolute",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              fontSize: "100px",
              opacity: 1,
              zIndex: 50,
            }}
            animate={{
              fontSize: "60px",
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
            }}
            onAnimationComplete={handleIntroComplete}
            className="grotesk font-bold"
            aria-label="About Me heading"
          >
            About Me
          </motion.h1>
        )}
      </AnimatePresence>

      <motion.div
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroDone ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full flex flex-col gap-5 mt-24 md:mt-32 max-w-3xl mx-auto text-center lg:text-left"
        aria-live="polite"
      >
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-start">
          <h2 className="spline font-medium text-3xl md:text-4xl lg:text-5xl">
            Hi! I'm Raihan Mulyana
          </h2>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        <motion.p
          className="sans-3 text-base md:text-lg max-w-[674px] mx-auto lg:mx-0"
          key={language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {descriptions[language]}
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroDone ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              className="flex items-center justify-center gap-4 p-4 bg-[#D4C9BE] rounded-lg shadow-lg min-w-[250px] cursor-pointer"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#F1EFEC" }}
              whileFocus={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#F1EFEC" }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-20 h-20"
              />
              <span className="text-3xl spline deep-navy-blue font-medium">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
