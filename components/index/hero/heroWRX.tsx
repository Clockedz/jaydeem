import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Integra() {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const containerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    showImg: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="lg:w-1/2 w-screen h-1/2 relative bg-black flex justify-center items-center">
      <motion.div
        className="w-full h-full absolute top-0 left-0 bg-jdmgray"
        ref={ref}
        initial="hidden"
        animate={inView ? ["visible", "showImg"] : "hidden"}
        variants={containerVariants}
      />
      <motion.img
        src="/images/wrx.jpg"
        style={{ position: "relative", opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      />
      <motion.p
        style={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl lg:text-3xl font-bold text-center z-10"
      >
        Subaru: Rally Icon
      </motion.p>
    </div>
  );
}
