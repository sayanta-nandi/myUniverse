import { GithubIcon } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  color1 = "black",
  color2 = "white",
}: {
  children: ReactNode;
  color1: string;
  color2: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative overflow-hidden"
    >
      <motion.div
        className="flex items-center gap-2 justify-center font-medium border-1 w-full text-center py-2 px-8"
        style={{
          borderColor: color2,
        }}
        initial={{ rotateX: 0 }}
        animate={{
          rotateX: isHovered ? 90 : 0,

          transformOrigin: "top",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex items-center -rotate-x-90 gap-2 justify-center font-medium border-1 w-full text-center py-2 px-8 absolute top-0 left-0"
        style={{
          backgroundColor: color2,
          color: color1,
          borderColor: color2,
        }}
        initial={{ rotateX: -90 }}
        animate={{
          rotateX: isHovered ? 0 : -90,
          transformOrigin: "bottom",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Button;
