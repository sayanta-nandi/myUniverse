"use client";
import { useWindowSize } from "@/lib/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const navOptions = [
  "Home",
  "Projects",
  "Slills",
  "Education",
  "Interests",
  "Contact me",
];

const Navbar = () => {
  const ref = useRef(null);
  const navRef = useRef<HTMLDivElement>(null);
  // Track scroll progress for the whole page
  const { scrollY } = useScroll();

  const { width, height } = useWindowSize();

  const navHeight = navRef.current ? navRef.current.clientHeight : 0;

  const scrollSpeed = 0.5;

  // Animate scale from 1 to 0.5 as you scroll 0 to 200px
  const scale = useTransform(scrollY, [0, height / scrollSpeed], [1, 0.5]);
  // Animate x from 0 to -calc(50vw - 50px) (center to left)
  const x = useTransform(
    scrollY,
    [0, height / scrollSpeed],
    [0, -width / 2 + 100]
  );
  // Animate y from 0 to -calc(50vh - 50px) (center to top)
  const y = useTransform(
    scrollY,
    [0, height / scrollSpeed],
    [0, -height / 2 + 30]
  );

  const navY = useTransform(scrollY, [0, height / scrollSpeed], [0, navHeight]);

  return (
    <div
      ref={ref}
      className="h-[200vh] w-full flex justify-center items-center"
      style={{
        position: "relative",
        zIndex: 998,
      }}
    >
      <motion.div
        ref={navRef}
        className="hidden w-full md:flex justify-end py-4.5 px-4"
        style={{
          position: "fixed",
          top: navRef.current ? -navHeight : 0,
          y: navY,
        }}
      >
        <div className="flex gap-4">
          {navOptions.map((option, index) => (
            <div key={index} className="text-lg font-bold text-white">
              {option}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="text-6xl font-bold rounded shadow"
        style={{
          background:
            "linear-gradient(90deg, #ff0057, #0099ff, #00ffae, #ff0057)", // seamless start/end
          backgroundSize: "400% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          scale: scale,
          x: x,
          y: y,
          position: "fixed",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 10,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          backgroundPosition: {
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      >
        MyUniverse
      </motion.div>
    </div>
  );
};

export default Navbar;
