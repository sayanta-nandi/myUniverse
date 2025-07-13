import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      style={{
        zIndex: 1000,
      }}
      className="h-[100vh] w-full bg-black flex items-center justify-center text-white text-4xl font-bold"
      initial="initial"
      exit="exit"
    >
      Hello
    </motion.div>
  );
};

export default PreLoader;
