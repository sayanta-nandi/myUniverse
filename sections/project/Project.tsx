import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "@/lib/useWindowSize";
import { useRef } from "react";
import { useHover } from "@/lib/useHover";
import { useIsMobile } from "@/lib/useIsMobile";
import { projects } from "@/data/projects";
import Image from "next/image";
import Button from "./Button";
import { GitBranchPlus, Github, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

const Project = () => {
  const { setIsHovered } = useHover();
  const isMobile = useIsMobile();
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
      className="h-[500vh] w-full font-bold relative overflow-hidden"
      style={{
        backgroundColor: "#1E3E62",
        color: "#FFA500",
      }}
    >
      <motion.div
        className="h-[100vh] w-full flex justify-center items-center"
        style={{
          fontSize: width / 15,
          translateY: isMobile ? 0 : y,
          translateX: isMobile ? 0 : x,
          scale: isMobile ? 1 : scale,
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Projects
        </div>
      </motion.div>
      <div
        className="flex flex-col items-center justify-between"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: isMobile ? "100%" : "50%",
          height: "400vh",
        }}
      >
        {projects.map((p, idx) => (
          <div
            key={p.title}
            className="flex flex-col justify-center items-center w-11/12 aspect-square p-10"
          >
            <motion.div
              style={{
                translateY: yvalues[idx],
                borderColor: "#FFA500",
              }}
              className="border size-full flex flex-col justify-between gap-4 p-4 relative"
            >
              <div className="w-full h-7/12 relative">
                <Image
                  alt="projects"
                  src={p.image}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {p.tech.map((t) => (
                  <Magnetic key={t}>
                    <div className="px-2 hover:cursor-default select-none flex justify-center items-center border rounded-2xl">
                      {t}
                    </div>
                  </Magnetic>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-2xl">{p.title}</h4>
                <p className="text-sm">{p.smdesc}</p>
              </div>
              <div className="flex justify-between gap-4">
                <Link
                  className="size-full"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Magnetic>
                    <Button>
                      Github
                      <Github
                        className="size-6 ml-2"
                        style={{
                          fill: "#FFA500",
                        }}
                      />
                    </Button>
                  </Magnetic>
                </Link>
                <Link
                  className="size-full"
                  href={p.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Magnetic>
                    <Button>
                      App
                      <LayoutPanelLeft
                        className="size-6 ml-2"
                        style={{
                          fill: "#FFA500",
                        }}
                      />
                    </Button>
                  </Magnetic>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
