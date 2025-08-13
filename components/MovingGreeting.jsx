"use client";

import { useState, useEffect } from "react";

const greetings = [
  "Hello!",
  "Halo!",
  "สวัสดี!",
  "Hallo!",
  "你好!",
  "Bonjour!",
  "Ciao!",
  "¡Hola!",
  "Привет!",
  "नमस्ते",
  "Hujambo!",
  "Olá!",
];

export default function MovingGreeting() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const [activeGreetings, setActiveGreetings] = useState([
    greetings[2], // prev (off-screen)
    greetings[1], // left
    greetings[0], // center
    greetings[greetings.length - 1], // right
  ]);

  const used = [
    greetings[2],
    greetings[1],
    greetings[0],
    greetings[greetings.length - 1],
  ];
  const [remaining, setRemaining] = useState(
    greetings.filter((g) => !used.includes(g))
  );

  const [positions, setPositions] = useState([
    "prev",
    "left",
    "center",
    "right",
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Aktifkan animasi geser
    setDisableTransition(false);
    setPositions(["left", "center", "right", "exit"]);

    setTimeout(() => {
      setDisableTransition(true);

      const nextGreeting = remaining[0];
      const updatedRemaining = [...remaining.slice(1), activeGreetings[3]];

      const newActive = [
        nextGreeting, // prev
        activeGreetings[0], // left
        activeGreetings[1], // center
        activeGreetings[2], // right
      ];

      setActiveGreetings(newActive);
      setRemaining(updatedRemaining);
      setPositions(["prev", "left", "center", "right"]);

      setTimeout(() => {
        setDisableTransition(false);
        setIsAnimating(false);
      }, 20);
    }, 500); // durasi animasi
  };

  const getStyle = (pos) => {
    switch (pos) {
      case "prev":
        return "left-[-30%] top-[70%] translate-y-[-50%] text-xl opacity-0 z-0 absolute";
      case "left":
        return "left-[0%] top-[60%] translate-y-[-50%] text-[60px] lg:text-[100px] text-[#F1EFEC] z-10 absolute opacity-50";
      case "center":
        return "left-[50%] top-[5%] md:top-[25%] xl:top-[25%] 3xl:top-[35%] translate-x-[-50%] text-[200px] lg:text-[250px] text-[#F1EFEC] z-20 cursor-pointer absolute";
      case "right":
        return "left-[85%] top-[60%] translate-y-[-50%] text-[60px] lg:text-[100px] text-[#F1EFEC] z-10 absolute opacity-50";
      case "exit":
        return "left-[120%] top-[70%] opacity-0 text-xl z-0 absolute";
      default:
        return "";
    }
  };

  return (
    <div
      className={`absolute w-full h-screen overflow-hidden flex items-center justify-center transition-all duration-1000 delay-1000 ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {activeGreetings.map((greet, idx) => (
          <button
            key={idx}
            onClick={idx === 2 ? handleClick : undefined}
            className={`grotesk absolute uppercase font-bold ${
              disableTransition ? "" : "transition-all duration-500 ease-in-out"
            } ${getStyle(positions[idx])}`}
            style={{ WebkitTextStroke: "1px black" }}
          >
            {greet}
          </button>
        ))}
      </div>
    </div>
  );
}
