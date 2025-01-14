import download from "../assets/coffee-cover.jpg";
import { motion } from "motion/react";
import one from "../assets/website/app_store.png";
import two from "../assets/website/play_store.png";
export default function Download() {
  const animation = {
    init: { opacity: 0, translateY: "50px" },
    first: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.5, type: "spring", stiffness: 50 },
    },
    second: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.7, type: "spring", stiffness: 50 },
    },
    third: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.9, type: "spring", stiffness: 50 },
    },
  };
  return (
    <div>
      <div className="container py-10">
        <div className="relative">
          <div className="absolute max-w-[400px] md:left-auto top-2 right-0 left-0 bottom-0  md:right-16 md:top-16  flex flex-col gap-y-4">
            <motion.h1
              variants={animation}
              initial="init"
              whileInView="first"
              className="capitalize  text-4xl  text-center"
            >
              Download the app
            </motion.h1>
            <motion.h1
              variants={animation}
              initial="init"
              whileInView="second"
              className="text-center"
            >
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis
            </motion.h1>
            <motion.div
              variants={animation}
              initial="init"
              whileInView="third"
              className="flex *:w-40 justify-evenly"
            >
              <img src={one} alt="" />

              <img src={two} alt="" />
            </motion.div>
          </div>
          <img
            src={download}
            alt="download"
            className=" rounded-md w-full max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
