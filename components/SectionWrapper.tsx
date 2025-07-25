"use client";

import Hero from "@/sections/hero/Hero";
import MyUniverse from "@/sections/my_unverse/MyUniverse";
import Project from "@/sections/project/Project";
import Skill from "@/sections/skill/Skill";

const SectionWrapper = () => {
  return (
    <>
      <MyUniverse />
      <Hero />
      <Project />
      <Skill />
    </>
  );
};

export default SectionWrapper;
