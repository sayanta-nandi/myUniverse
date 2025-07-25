"use client";
import { useWindowSize } from "@/lib/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";

const navOptions = [
  "Home",
  "Projects",
  "Slills",
  "Education",
  "Interests",
  "Contact me",
];

const Navbar = () => {
  // const ref = useRef(null);
  const navRef = useRef<HTMLDivElement>(null);
  // const textRef = useRef<HTMLDivElement>(null);
  // Track scroll progress for the whole page
  const { scrollY } = useScroll();

  const { height, width } = useWindowSize();

  const navHeight = navRef.current ? navRef.current.clientHeight : 0;

  const scrollSpeed = 0.5;

  const navY = useTransform(scrollY, [0, height / scrollSpeed], [0, navHeight]);

  return (
    <motion.div
      ref={navRef}
      className="hidden w-full md:flex justify-end py-4.5 px-4"
      style={{
        position: "fixed",
        top: navRef.current ? -navHeight : 0,
        y: navY,
        zIndex: 998,
      }}
    >
      <div className="flex gap-4">
        {navOptions.map((option, index) => (
          <div key={index} className="text-lg font-bold text-white">
            <Magnetic>{option}</Magnetic>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
