"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHover } from "@/lib/useHover";

const Button = ({ children }: { children: React.ReactNode }) => {
  const { setIsHovered } = useHover();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="border relative size-full flex justify-center items-center p-4 overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsHover(false);
      }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 rounded-tr-full"
        style={{
          backgroundColor: "#FFA500",
          mixBlendMode: "difference",
          zIndex: 1,
        }}
        animate={{
          width: isHover ? "150%" : "0%",
          height: isHover ? "150%" : "0%",
        }}
        transition={{
          duration: 0.7,
          ease: "backInOut",
        }}
      />
    </div>
  );
};

export default Button;
