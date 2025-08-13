"use client";

import MovingGreeting from "@/components/MovingGreeting";
import AboutPreview from "@/components/AboutPreview";
import ProjectPreview from "@/components/ProjectPreview";
import ContactSection from "@/components/ContactSection";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full bg-[var(--deep-navy-blue)] flex flex-col gap-28">
      <section
        className="hero relative w-full h-screen bg-[var(--off-white)] flex items-center justify-center px-[30px]"
        id="home"
      >
        <div className="hidden md:block md:absolute top-0 left-0 w-full h-screen">
          <MovingGreeting />
        </div>
        <h1
          className="absolute top-[230px] off-white text-[100px] grotesk font-bold md:hidden"
          style={{ WebkitTextStroke: "1px #030303" }}
        >
          HELLO!
        </h1>

        <div className="spline w-fit z-30 flex flex-col lg:gap-[37px] items-center justify-center">
          <div className="flex flex-col items-center justify-center leading-7 gap-0">
            <motion.h1
              className="deep-navy-blue text-center font-medium text-[35px] md:text-[45px] lg:text-[48px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              It’s{" "}
              <motion.span
                className="font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                Raihan Mulyana
              </motion.span>
            </motion.h1>

            <motion.h2
              className="font-medium text-[20px] deep-navy-blue leading-15 md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              A{" "}
              <motion.span
                className="font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                Frontend Developer
              </motion.span>
            </motion.h2>
          </div>

          <motion.div
            className="flex max-w-[200px] lg:max-w-[300px] w-full justify-between"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.a
              href="https://github.com/Raihanmul"
              className="cursor-pointer p-3 hover:bg-white rounded-full hover:shadow-2xl"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.3 }}
            >
              <img src="/icons/github-icon.svg" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raihan-mulyana/"
              className="cursor-pointer p-3 hover:bg-white rounded-full hover:shadow-2xl"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.3 }}
            >
              <img src="/icons/linkedin-icon.svg" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/raihanmul_022/"
              className="cursor-pointer p-3 hover:bg-white rounded-full hover:shadow-2xl"
              rel="noopener noreferrer"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.3 }}
            >
              <img src="/icons/instagram-icon.svg" />
            </motion.a>
          </motion.div>
        </div>

        <div className="absolute top-10 bottom-4 almost-black flex w-full justify-between font-bold spline text-[18px] lg:text-[24px] max-w-[95%]">
          <p className={`w-full flex justify-start`}>
            <Typewriter
              words={["2025"]}
              loop={1}
              typeSpeed={800}
              deleteSpeed={50}
              delaySpeed={100}
            />
          </p>
          <p className="w-full flex justify-center">/</p>
          <p className="w-full flex justify-end">
            <Typewriter
              words={["Unknown Time", "Forever ?", "2027 ?"]}
              loop={Infinity}
              cursor
              cursorStyle={"|"}
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </p>
        </div>
      </section>

      <motion.section
        className="relative w-full bg-[var(--deep-navy-blue)] gap-[100px] py-20 px-6 lg:px-[100px] flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <AboutPreview />
        <ProjectPreview />
        <ContactSection />
      </motion.section>
    </main>
  );
}
