"use client";
import { useIsMobile } from "@/lib/useIsMobile";
import { useWindowSize } from "@/lib/useWindowSize";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const { height, width } = useWindowSize();
  const isMobile = useIsMobile();

  const radius = useTransform(scrollYProgress, [0, 0.33], [width, 0]);

  const x = useTransform(scrollYProgress, [0.33, 0.66], [0, -width / 4]);
  const y = useTransform(scrollYProgress, [0.33, 0.66], [0, height]);

  const py = useTransform(scrollYProgress, [0.33, 1], [0, width / 15]);
  const py1 = useTransform(scrollYProgress, [0.33, 1], [0, -width / 20]);

  const scale = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.5]);

  return (
    <motion.div
      ref={heroRef}
      className="h-[200vh] w-ful relative"
      style={{
        backgroundColor: "#0B192C",
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
      }}
    >
      <motion.div
        className="text-white h-[100vh] w-full font-bold flex flex-col justify-center items-center relative"
        style={{
          fontSize: width / 15,
          translateX: isMobile ? 0 : x,
          translateY: isMobile ? 0 : y,
          scale: isMobile ? 1 : scale,
        }}
      >
        <motion.p
          style={{
            translateY: py,
          }}
        >
          Hey, I'm <span className="text-green-500">Sayanta Nandi</span>
        </motion.p>
        <motion.p
          style={{
            fontSize: width / 17,
          }}
        >
          I'm a <span className="text-green-500">Web Developer</span>
        </motion.p>
        <motion.p
          style={{
            translateY: py1,
            fontSize: width / 20,
          }}
        >
          I build cool <span className="text-green-500">Web Applications</span>
        </motion.p>
      </motion.div>
      <motion.div
        className="flex py-24 px-12"
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          width: isMobile ? "100%" : "50%",
          height: "100vh",
        }}
      >
        <div className="flex-1 relative">
          <Image alt="avatar" src="/avatar.png" fill className="object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
