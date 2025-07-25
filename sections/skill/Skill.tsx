import { SKILLS } from "@/data/skills";
import { useWindowSize } from "@/lib/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SkillBox from "./SkillBox";

const Skill = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { height, width } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const refheight = ref.current
    ? ref.current.getBoundingClientRect().height
    : 0;

  const offsety = width - height < -96 ? 48 : 8;
  const offsetx1 = width < height ? "0%" : "10%";
  const offsetx2 = width < height ? "0%" : "20%";

  const y0 = useTransform(scrollYProgress, [0, 1], [0, refheight - height]);
  const x1 = useTransform(scrollYProgress, [0, 1 / 5], ["150%", "0%"]);
  const y1 = useTransform(scrollYProgress, [1 / 5, 1], [0, height * 4]);
  const x2 = useTransform(scrollYProgress, [2 / 5, 3 / 5], ["150%", offsetx1]);
  const y2 = useTransform(
    scrollYProgress,
    [2 / 5, 3 / 5, 1],
    [0, offsety, height * 2 + offsety]
  );
  const x3 = useTransform(scrollYProgress, [4 / 5, 5 / 5], ["150%", offsetx2]);
  const y3 = useTransform(scrollYProgress, [4 / 5, 1], [0, offsety * 2]);

  const x = [x1, x2, x3];
  const y = [y1, y2, y3];

  return (
    <div
      ref={ref}
      className="relative w-full overflow-x-hidden overflow-y-visible"
      style={{
        backgroundColor: "#144C52",
        color: "white",
      }}
    >
      <motion.div
        style={{
          zIndex: 0,
          y: y0,
        }}
        className={`w-full absolute top-0 left-0 py-8 lg:py-48 lg:px-12 lg:text-6xl flex items-center justify-end px-8 text-4xl font-bold md:py-16`}
      >
        <div className="relative">
          <motion.p
            initial={{
              translateY: "100%",
            }}
            whileInView={{
              translateY: 0,
            }}
            viewport={{
              margin: "0px 0px -300px 0px",
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Skills
          </motion.p>
          <div
            style={{ zIndex: 1 }}
            className="absolute w-full h-full bg-[#144C52] top-[100%]"
          />
        </div>
      </motion.div>
      {SKILLS.map((sk, idx) => (
        <div key={sk.type}>
          <div className="w-full h-screen" />
          <div className="w-full h-screen relative pb-8 pt-24 px-8">
            <motion.div
              style={{ x: x[idx], y: y[idx] }}
              className={` border border-white/20 bg-white/10 backdrop-blur-xl relative ${
                width < height ? "w-full" : "h-full"
              }  aspect-square shrink-0`}
            >
              <div className="flex flex-wrap mx-auto max-w-full max-h-full px-8 py-4 gap-8">
                <div className="w-full font-semibold text-lg">
                  {sk.type.toUpperCase()}
                </div>
                {sk.skills.map((skill) => (
                  <SkillBox
                    key={skill.name}
                    skill={skill.name}
                    icon={`/skills/${skill.icon}`}
                    invert={skill.invert}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
