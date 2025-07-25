"use client";

import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import { useHover } from "@/lib/useHover";
import { useMousePosition } from "@/lib/useMousePosition";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  const { x, y } = useMousePosition();
  const { isHovered } = useHover();
  const size = 20;
  useEffect(() => {
    document.querySelector("main")?.classList.add("scroll-lock");
    setTimeout(() => {
      document.querySelector("main")?.classList.remove("scroll-lock");
    }, 4000);

    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full h-[100vh]">
      <motion.div
        animate={{
          x: x - size,
          y: y - size,
          scale: isHovered ? 3 : 1,
        }}
        style={{
          position: "fixed",
          height: 40,
          width: 40,
          // Use mix-blend-mode to invert the color behind for a complementary effect
          mixBlendMode: "difference",
          pointerEvents: "none",
          backgroundColor: "white",

          borderRadius: "50%",
          zIndex: 100,
        }}
      />
      <Navbar />
      <SectionWrapper />
    </main>
  );
}
