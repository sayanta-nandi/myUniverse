import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "@/lib/useWindowSize";
import { useRef } from "react";

const PROJECTS = ["CaseCobra", "Tomato", "8puzzle", "Ai Notion"];

const Project = () => {
  const vh = 6;
  const { height, width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [1 / vh, (vh - 1) / vh],
    [0, height * (vh - 2)]
  );
  const x = useTransform(scrollYProgress, [1 / vh, 2 / vh], [0, width / 4]);
  const scale = useTransform(scrollYProgress, [1 / vh, 2 / vh], [1, 0.5]);
  const y1 = useTransform(scrollYProgress, [2 / vh, 3 / vh], [0, 60]);
  const y2 = useTransform(scrollYProgress, [3 / vh, 4 / vh], [0, 60]);
  const y3 = useTransform(scrollYProgress, [4 / vh, 5 / vh], [0, 60]);
  const y4 = useTransform(scrollYProgress, [5 / vh, 6 / vh], [0, 20]);

  const yvalues = [y1, y2, y3, y4];
  return (
    <div
      ref={ref}
      className="h-[500vh] w-full text-white text-4xl font-bold relative overflow-hidden"
      style={{
        backgroundColor: "#1E3E62",
      }}
    >
      <motion.div
        className="h-[100vh] w-full flex justify-center items-center"
        style={{
          fontSize: width / 15,
          translateY: y,
          translateX: x,
          scale: scale,
        }}
      >
        Projects
      </motion.div>
      <div
        className="flex flex-col items-center justify-between"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: "400vh",
        }}
      >
        {PROJECTS.map((p, idx) => (
          <div
            key={p}
            className="flex flex-col justify-center items-center w-11/12 aspect-square p-10"
          >
            <motion.div
              style={{
                translateY: yvalues[idx],
              }}
              className="border border-white size-full flex justify-center items-center"
            >
              {p}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
