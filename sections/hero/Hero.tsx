"use client";
import { useHover } from "@/lib/useHover";
import { useIsMobile } from "@/lib/useIsMobile";
import { useWindowSize } from "@/lib/useWindowSize";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "../../components/Button";
import { GithubIcon } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const picRef = useRef<HTMLDivElement>(null);
  const isPic = useInView(picRef, { amount: 0.8, once: true });
  const { setIsHovered } = useHover();
  const barRef = useRef<HTMLDivElement>(null);
  // const isInView = useInView(heroRef, { amount: 0.5, once: true });
  const isBar = useInView(barRef, { amount: "all", once: true });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const { height, width } = useWindowSize();
  const isMobile = useIsMobile();

  const radius = useTransform(scrollYProgress, [0, 0.33], [width, 0]);

  const x = useTransform(scrollYProgress, [0.33, 0.66], [0, -width / 4]);
  const y = useTransform(scrollYProgress, [0.33, 0.66], [0, height]);
  const hght = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "100%"]);

  const py = useTransform(scrollYProgress, [0.33, 1], [0, width / 15]);
  const py1 = useTransform(scrollYProgress, [0.33, 1], [0, -width / 20]);

  const scale = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.5]);

  return (
    <motion.div
      ref={heroRef}
      className="h-[200vh] w-full relative"
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
        <div ref={barRef} className="relative flex flex-col items-end">
          <motion.div
            className={`absolute top-0 -right-24 w-1 bg-green-300 ${
              isMobile && "hidden"
            }`}
            style={{
              height: hght,
            }}
          />
          <motion.div
            style={{
              position: "relative",
              translateY: py,
              zIndex: 1,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              style={{ zIndex: 1 }}
              className="absolute left-0 w-full h-full top-[100%] bg-[#0B192C]"
            />
            <motion.p
              animate={{
                translateY: isBar ? 0 : "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              Hey, I'm <span className="text-green-500">Sayanta Nandi</span>
            </motion.p>
          </motion.div>
          <motion.div
            style={{
              fontSize: width / 17,
              position: "relative",
              zIndex: 2,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              style={{ zIndex: 1 }}
              className="absolute left-0 w-full h-full top-[100%] bg-[#0B192C]"
            />
            <motion.p
              animate={{
                translateY: isBar ? 0 : "100%",
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              I'm a <span className="text-green-500">Web Developer</span>
            </motion.p>
          </motion.div>
          <motion.div
            style={{
              translateY: py1,
              fontSize: width / 20,
              zIndex: 3,
              position: "relative",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              style={{ zIndex: 1 }}
              className="absolute left-0 w-full h-full top-[100%] bg-[#0B192C]"
            />
            <motion.p
              animate={{
                translateY: isBar ? 0 : "100%",
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: "easeInOut",
              }}
            >
              I build cool{" "}
              <span className="text-green-500">Web Applications</span>
            </motion.p>
          </motion.div>
          <motion.div
            className={`w-full flex justify-center pt-24 lg:pt-12 px-12`}
            style={{
              fontSize: width / 25,
              zIndex: 4,
              position: "relative",
            }}
            animate={{
              opacity: !isMobile ? (isPic ? 1 : 0) : 1,
            }}
          >
            <Button color1="#0B192C" color2="white">
              <div style={{ zIndex: 5 }} className="flex items-center gap-2">
                GitHub{" "}
                <GithubIcon
                  style={{
                    width: width / 25,
                    height: width / 25,
                  }}
                />
              </div>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        ref={picRef}
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
