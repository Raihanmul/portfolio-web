"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navbar = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 50) {
        setShowNav(false); // scroll ke bawah -> hide
      } else {
        setShowNav(true); // scroll ke atas -> show
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex flex-col items-center z-40 justify-center transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-30"
      } lg:mt-[21px] lg:h-[54px] lg:px-[100px]`}
    >
      <div
        className={`w-full flex justify-between items-center bg-[#D4C9BE] px-[20px] py-[20px] relative ${
          isOpen ? "rounded-none" : "lg:rounded-[20px]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center max-w-[163px] w-full gap-2.5">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/icons/logo.svg" alt="logo" className="w-9" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-fit gap-15 items-center sans-32">
          <div className="relative flex gap-6">
            {navbar.map((nav) => {
              const isActive =
                nav.path === "/"
                  ? pathname === "/" 
                  : pathname.startsWith(nav.path); 

              return (
                <Link
                  key={nav.id}
                  href={nav.path}
                  className={`relative px-3 py-1 text-2xl font-medium hover:text-[#123458] transition-colors z-42 ${
                    isActive
                      ? "text-[#1E3E61] font-semibold bg-[#F1EFEC] rounded-lg shadow-lg hover:bg-[#E5DDD6]"
                      : "hover:text-[#123458]"
                  }`}
                >
                  {nav.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden z-[60]">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-[6px] w-8 h-8 justify-center items-center cursor-pointer"
          >
            <span
              className={`w-7 h-[3px] bg-black rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`w-7 h-[3px] bg-black rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-7 h-[3px] bg-black rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-[#D4C9BE] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[600px] py-6 border-b-4 border-b-[#03030388] rounded-b-3xl"
            : "max-h-0 py-0"
        } px-6`}
      >
        <div className="flex flex-col gap-6 text-[#1E3E61]">
          <p className="text-base font-medium leading-relaxed">
            Hello! I’m Raihan Mulyana, a junior frontend developer from Bogor,
            Indonesia. I enjoy turning ideas into clean, smooth, and
            user-friendly web experiences with a creative touch.
          </p>

          <div className="flex flex-col gap-3">
            {navbar.map((nav) => (
              <Link
                key={nav.id}
                href={nav.path}
                onClick={() => setIsOpen(false)}
                className="bg-[#F1EFEC] text-lg font-semibold px-4 py-2 rounded-xl text-center hover:scale-[1.05] hover:bg-[#E5DDD6] transition"
              >
                {nav.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2 text-[15px] underline">
            <a
              href="mailto:raihanmul10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              raihanmul10@gmail.com
            </a>
            <a
              href="https://wa.me/6281527010410"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 815 2701 0410
            </a>
            <a
              href="https://github.com/Raihanmul"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
