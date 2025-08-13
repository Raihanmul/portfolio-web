"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    title: "Home",
    links: [
      { label: "About", target: "#about" },
      { label: "Projects", target: "#projects" },
      { label: "Contact", target: "#contact" },
    ],
  },
  {
    title: "About",
    links: [{ label: "Skills / Tools", path: "/about#skills" }],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="w-full bg-[#030303] flex flex-col text-white">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 p-20">
        <div className="flex gap-10 items-center justify-center">
          <a href="/#">
            <img
              src="/icons/logo-white.svg"
              alt="Logo"
              className="w-[100px] h-auto"
            />
          </a>
          <a
            href="https://www.kodein.sch.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logo-kodein-flat.png"
              alt="logo kodein"
              className="w-[100px] h-auto"
            />
          </a>
        </div>

        <div className="flex flex-wrap gap-20">
          {navGroups.map((group, index) => (
            <div key={index} className="flex flex-col gap-2 min-w-[120px]">
              <h4 className="text-lg font-bold grotesk">{group.title}</h4>
              <div className="flex flex-col gap-1 text-white/70">
                {group.links.map((link, i) =>
                  link.path ? (
                    <Link
                      key={i}
                      href={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={i}
                      href={isHome ? link.target : `/${link.target}`}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-white/20 py-4 text-center text-sm text-white/60">
        2025 © Raihan Mulyana.
      </div>
    </footer>
  );
}
