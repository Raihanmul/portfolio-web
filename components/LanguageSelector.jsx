import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import descriptions from "@/data/descriptions";


export default function LanguageSelector({ language, setLanguage }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex px-[15px] py-[10px] gap-2.5 border border-[#F1EFEC] rounded-[20px] cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Language
        <img src="/icons/chevron.svg" className={`${
          showDropdown ? "rotate-180" : "rotate-0"
        } transition-transform duration-200`} />
      </button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="absolute z-10 mt-2 flex flex-col gap-2 bg-[#1E3E61] p-[15px] rounded-xl border border-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {Object.keys(descriptions).map((lang) => (
              <button
                key={lang}
                className="hover:bg-[#34597E] px-4 py-2 text-left rounded-md cursor-pointer transition-all"
                onClick={() => {
                  setLanguage(lang);
                  setShowDropdown(false);
                }}
              >
                {lang}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
