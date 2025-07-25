import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "@/lib/useWindowSize";
import { useRef } from "react";
import { useHover } from "@/lib/useHover";
import { useIsMobile } from "@/lib/useIsMobile";
import { projects } from "@/data/projects";
import Image from "next/image";
import { GitBranchPlus, Github, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import Button from "@/components/Button";

const Project = () => {
  const { setIsHovered } = useHover();
  const projref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const vh = 6;
  const { height: wheight, width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const height = ref.current ? ref.current.clientHeight : 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [1 / vh, (vh - 1) / vh],
    [0, height - wheight]
  );
  const x = useTransform(
    scrollYProgress,
    [1 / vh, 2 / vh],
    [0, width / 4 - 10]
  );
  const wy = useTransform(scrollYProgress, [0, 2 / vh], ["0px", "200px"]);
  const by = useTransform(scrollYProgress, [0, 2 / vh], ["0px", "-200px"]);
  const scale = useTransform(scrollYProgress, [1 / vh, 2 / vh], [1, 0.5]);
  const y1 = useTransform(scrollYProgress, [2 / vh, 3 / vh], [0, 60]);
  const y2 = useTransform(scrollYProgress, [3 / vh, 4 / vh], [0, 60]);
  const y3 = useTransform(scrollYProgress, [4 / vh, 5 / vh], [0, 60]);
  const y4 = useTransform(scrollYProgress, [5 / vh, 6 / vh], [0, 20]);

  const yvalues = [y1, y2, y3, y4];
  return (
    <div
      ref={ref}
      className="w-full font-bold relative"
      style={{
        backgroundColor: "#1E3E62",
        color: "#FFA500",
      }}
    >
      <div
        ref={projref}
        className="h-[100vh] w-full flex justify-center items-center relative"
      >
        <motion.div
          className="absolute top-8 left-8"
          style={{ fontSize: width / 15, opacity: "0.75", translateY: wy }}
        >
          What
          <motion.div
            whileInView={{
              width: 0,
            }}
            viewport={{
              margin: "0px 0px -200px 0px",
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute right-0 top-0 w-full h-full bg-[#1E3E62]"
          />
        </motion.div>
        <motion.div
          style={{ fontSize: width / 15, opacity: "0.75", translateY: by }}
          className="absolute right-8 bottom-8"
        >
          I build
          <motion.div
            whileInView={{
              width: 0,
            }}
            viewport={{
              margin: "0px 0px -200px 0px",
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute right-0 top-0 w-full h-full bg-[#1E3E62]"
          />
        </motion.div>
        <motion.div
          style={{
            fontSize: width / 15,
            translateX: isMobile ? 0 : x,
            translateY: isMobile ? 0 : y,
            scale: isMobile ? 1 : scale,
          }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Projects
          <motion.div
            whileInView={{
              width: 0,
            }}
            viewport={{
              margin: "-200px",
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute right-0 top-0 w-full h-full bg-[#1E3E62]"
          />
        </motion.div>
      </div>
      <div
        className="flex flex-col items-center justify-between overflow-x-hidden"
        style={{
          width: isMobile ? "100%" : "50%",
        }}
      >
        {projects.map((p, idx) => (
          <div
            key={p.title}
            className="flex flex-col justify-center items-center w-11/12 relative aspect-square p-10"
          >
            <motion.div
              style={{
                translateY: yvalues[idx],
                borderColor: "#FFA500",
              }}
              className="border size-full flex flex-col justify-between gap-4 p-4 relative"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ amount: "all", once: true }}
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
                  <Button color1="#1E3E62" color2="#FFA500">
                    Github
                    <Github
                      className="size-6 ml-2"
                      style={{
                        fill: "#FFA500",
                      }}
                    />
                  </Button>
                </Link>
                <Link
                  className="size-full"
                  href={p.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color1="#1E3E62" color2="#FFA500">
                    App
                    <LayoutPanelLeft
                      className="size-6 ml-2"
                      style={{
                        fill: "#FFA500",
                      }}
                    />
                  </Button>
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
