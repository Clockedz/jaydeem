import Layout from "@components/layout";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Thumbnail from "@components/index/thumbnail";

export default function Home() {
  const text1 = ["Ori"];
  const text2 = ["gin"];
  const [rotateValue, setRotateValue] = React.useState(0);

  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      setRotateValue((prevRotateValue) => prevRotateValue + 270);
    }
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  const child2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.45,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.45,
      },
    },
  };

  return (
    <Layout>
      <main className="overflow-x-hidden">
        <div className="relative h-screen w-auto overflow-hidden">
          <video
            src={require("@public/videos/video.mp4")}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover z-0"
          ></video>
          <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full font-text flex-col text-5xl lg:text-7xl text-center sm:text-left">
            <h1 className="block">Japan's</h1>
            <h1 className="block w-100 pt-2">Prestigious Lineage</h1>
          </div>
        </div>
        <div className="font-text justify-center flex items-center w-full h-1/2 overflow-hidden pt-64 sm:pt-32">
          <section className="inline-flex width-screen">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              {text1.map((text, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  animate={inView ? "visible" : "hidden"}
                  className="text-4xl lg:text-5xl text-black z-10 ml-2 mt-2 lg:ml-4 lg:mt-4"
                >
                  {text}
                </motion.span>
              ))}
              {text2.map((texted, index) => (
                <motion.span
                  variants={child2}
                  key={index}
                  animate={inView ? "visible" : "hidden"}
                  className="text-4xl lg:text-5xl mt-2 lg:mt-4"
                >
                  {texted}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              ref={ref}
              animate={{ rotate: rotateValue }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-zinc-300 absolute rounded-md lg:w-20 lg:h-20"
            ></motion.div>
          </section>
        </div>
        <div className="font-text w-screen flex justify-center items-center pt-8 lg:pt-14">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Thumbnail />
      </main>
    </Layout>
  );
}
