import { useHover } from "@/lib/useHover";
import { useWindowSize } from "@/lib/useWindowSize";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SkillBox from "./SkillBox";

const SKILLS = [
  {
    name: "Java",
    icon: "/java.svg",
    invert: true,
  },
  {
    name: "JavaScript",
    icon: "/js.svg",
    invert: false,
  },
  {
    name: "HTML",
    icon: "/html.svg",
    invert: false,
  },
  {
    name: "CSS",
    icon: "/css.svg",
    invert: false,
  },
  {
    name: "ReactJS",
    icon: "/react.svg",
    invert: true,
  },
  {
    name: "MySQL",
    icon: "/mysql.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "/mongodb.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "/postgre.svg",
    invert: true,
  },
  {
    name: "Prisma",
    icon: "/prism.svg",
    invert: true,
  },
];

const Skill = () => {
  const { width, height } = useWindowSize();
  const { setIsHovered } = useHover();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height / 2 + width / 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [0, 1, 1, 0]
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] w-full"
      style={{
        backgroundColor: "#144C52",
      }}
    >
      <div className="relative h-[100vh] w-full text-white flex justify-center items-center">
        <motion.div
          className="select-none font-bold"
          style={{
            fontSize: width / 15,
            y,
            scale,
            position: "absolute",
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Skills
        </motion.div>
        <motion.div
          className="absolute text-white"
          style={{
            top: width / 15 + height / 2,
            fontSize: width / 36,
            opacity,
          }}
        >
          What I've Learned and used in projects
        </motion.div>
      </div>
      <div className="h-[100vh] w-full p-24">
        <div className="border flex flex-wrap border-white w-full h-full p-8 space-x-8 space-y-8">
          {SKILLS.map((skill) => (
            <SkillBox
              key={skill.name}
              skill={skill.name}
              icon={`/skills/${skill.icon}`}
              invert={skill.invert}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
