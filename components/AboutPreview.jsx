"use client";

import { motion } from "framer-motion";

// Variants untuk animasi container dan elemen anak
const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  
};

export default function AboutPreview() {
  return (
    <section
      className="w-full bg-[var(--deep-navy-blue)] px-6 lg:px-[100px] flex items-center justify-center"
      id="about"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="w-full bg-[#1E3E61] rounded-[20px] p-[50px] flex flex-col items-center justify-between gap-5 shadow-lg"
      >
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-5xl font-bold grotesk text-[#F1EFEC]"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={childVariants}
          className="w-full bg-[#1E3E61] rounded-[20px] flex flex-col lg:flex-row items-center gap-12 lg:gap-32"
        >
          <motion.img
            src="/images/avatar.jpg"
            alt="Avatar"
            className="w-[250px] h-[250px] object-cover rounded-[25px] border-4 border-white/20 shadow-lg"
            variants={childVariants}
          />

          <motion.p
            variants={childVariants}
            className="lg:max-w-[789px] lg:text-2xl text-[#f1efecc9] leading-relaxed sans-3"
          >
            I’d like to code a simple website with a user-friendly interface. As
            a Frontend Developer, I aim to improve my programming skills and
            continue growing to achieve better results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex flex-col md:flex-row gap-6 mt-6"
        >
          <motion.a
            href="/about"
            whileTap={{scale: 0.9}}
            transition={{duration: 0.1}}
            className="px-6 py-2 flex items-center justify-center border-2 border-white/50 text-white rounded-lg hover:bg-white hover:text-[#123458] hover:border-b-black/50 hover:border-r-black/50 hover:scale-110 transition-all font-semibold text-sm"
          >
            More About Me
          </motion.a>
          <motion.a
            href="#contact"
            whileTap={{scale: 0.9}}
            transition={{duration: 0.1}}
            className="px-6 py-2 flex items-center justify-center bg-white text-[#123458] rounded-lg hover:opacity-80 transition-all font-semibold text-sm hover:scale-110"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
