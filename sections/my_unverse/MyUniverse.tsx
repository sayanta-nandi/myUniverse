"use client";

import { useWindowSize } from "@/lib/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MYUNIVERSE = ["M", "y", "U", "n", "i", "v", "e", "r", "s", "e"];

const MyUniverse = () => {
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y5 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y6 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y7 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y8 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y9 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );
  const y10 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${Math.floor(Math.random() * 200)}px`]
  );

  const y = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];

  return (
    <div className="w-full h-[150vh] py-8">
      <div ref={ref} className="w-full h-[100vh] flex justify-center">
        <motion.div
          className={`font-bold flex relative rounded shadow overflow-hidden`}
          style={{
            fontFamily: "Manufacturing Consent",
            color: "white",
            fontSize: `${width / 5}px`,
            height: `${width / 3}px`,
          }}
        >
          <motion.div
            className={`absolute top-0 lg:top-24 right-0 h-3.5 bg-gradient-to-r from-blue-300 to-green-300`}
            animate={{
              width: width / 3,
            }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-0 left-0 h-3.5 bg-gradient-to-r from-purple-300 to-blue-500`}
            animate={{
              width: width / 3,
            }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
          />
          {MYUNIVERSE.map((c, idx) => (
            <motion.span
              style={{
                color: idx == 0 || idx == 2 ? "white" : "#b7eb34",
                translateY: y[idx],
              }}
              initial={{
                translateY: idx % 2 == 0 ? "100%" : "-100%",
              }}
              animate={{
                translateY: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              key={idx}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
        <div className="absolute bottom-12 flex gap-8 right-12">
          <motion.div
            className="flex flex-col gap-4 text-white text-6xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <p>Sroll to</p>
            <p>Explore</p>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{
              delay: 3,
              duration: 1,
              ease: "easeInOut",
              repeatType: "reverse",
              repeat: Infinity,
            }}
            className="w-px bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MyUniverse;
