"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#123458] gap-10 text-center px-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="spline text-4xl text-white">
          Oops... Halaman ini hilang kayak chat kamu yang nggak dibales.
        </h1>
        <p className="sans-3 text-white/70">
          Yuk balik ke halaman utama sebelum makin tersesat!
        </p>
      </div>

      <Link
        href="/"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="p-3 bg-[#F1EFEC] deep-navy-blue rounded-2xl font-bold transition-all duration-200 w-[160px] h-[50px] flex items-center justify-center relative overflow-hidden hover:scale-120 hover:text-3xl hover:border-white border hover:bg-[#123458]"
      >
        <AnimatePresence mode="wait">
          {isHover ? (
            <motion.span
              key="arrow"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute text-white"
            >
              &gt;&gt;&gt;
            </motion.span>
          ) : (
            <motion.span
              key="text"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute"
              tabIndex={-1}
            >
              Back to Home
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
}
