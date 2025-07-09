"use client";

import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Lenis from "lenis";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/lib/useMousePosition";

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 20;
  useEffect(() => {
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
    <>
      <motion.div
        animate={{
          x: x - size,
          y: y - size,
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
    </>
  );
}
