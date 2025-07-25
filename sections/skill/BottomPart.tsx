import { SKILLS } from "@/data/skills";
import React from "react";
import SkillBox from "./SkillBox";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useWindowSize } from "@/lib/useWindowSize";

const BottomPart = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const { height, width } = useWindowSize();

  const { scrollYProgress, scrollY } = useScroll({
    target: skillRef,
    offset: ["start start", "end end"],
  });

  

  return (
    <div
      ref={skillRef}
      style={{ zIndex: 2 }}
      className="px-8 w-full flex flex-col overflow-y-visible absolute top-0 left-0"
    >
      
    </div>
  );
};

export default BottomPart;
