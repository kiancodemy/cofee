import bgiamge from "../assets/bg-slate.png";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./Navbar";
import { useState } from "react";
import disableScroll from "disable-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import black from "../assets/black.png";
export default function Hero() {
  const handleClick = () => {
    setShow(!show);
    if (show) {
      disableScroll.off();
    } else {
      disableScroll.on();
    }
  };

  const [show, setShow] = useState<boolean>(false);
  const text = {
    start: {
      opacity: 0,
      translateY: "100vh",
    },
    end: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 40,
        delay: 0.8,
      },
    },
  };
  const bgimage = {
    backgroundImage: `url(${bgiamge})`,
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    backgrupostion: "center",
  };
  return (
    <div style={bgimage}>
      <AnimatePresence>
        {show && <Navbar handleClick={handleClick}></Navbar>}
      </AnimatePresence>

      <div className="container  min-h-[750px]">
        <motion.div
          initial={{ translateY: "-100vh" }}
          animate={{
            translateY: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              delay: 0.2,
            },
          }}
          className="flex pt-4  md:pt-8  items-center justify-between"
        >
          <motion.h1 className="uppercase text-base flex gap-x-2 font-semibold  md:text-2xl ">
            <span className="text-primary">coders</span>
            <span className="text-white">coffee.</span>
          </motion.h1>
          <div
            onClick={handleClick}
            className="text-white cursor-pointer text-2xl md:text-3xl"
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        </motion.div>
        <div className="grid  md:grid-cols-2 grid-cols-1  relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: 1,
              scale: [1, 1.4, 0.9, 1],

              transition: {
                duration: 0.8,
                type: "tween",
                ease: "easeOut",

                delay: 1,
              },
            }}
            src={black}
            className="absolute inset-0 m-auto hidden md:block"
            alt="coddefef"
          />
          <div className="md:py-40 py-20 relative  text-lightOrange">
            <motion.div
              initial={{ opacity: 0, translateY: "-100vh" }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.8,
                },
              }}
              className="flex pb-20 translate-x-20 gap-y-3 flex-col text-6xl font-bold md:text-7xl text"
            >
              <h1>Blvck</h1>
              <h1>Tumbler</h1>
            </motion.div>
            <motion.div
              variants={text}
              initial="start"
              animate="end"
              className="relative translate-y-7 flex flex-col gap-y-4"
            >
              <h1 className="z-[1000] capitalize text-2xl relative text-lightOrange">
                Black Lifestyle Lovers,
              </h1>
              <div className="flex *:z-[1000]  flex-col gap-y-3">
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="bg-lightGray absolute z-[1] -left-8 -top-5 rounded-sm w-[250px] h-[180px]"></div>
            </motion.div>
          </div>
          <div className="md:hidden flex justify-center ">
            <img src={black} className="" alt="coffeee" />
          </div>
          <div className="py-40 hidden relative md:flex items-end justify-end  text-lightOrange">
            <motion.div
              variants={text}
              initial="start"
              animate="end"
              className=" relative translate-y-7 md:flex flex-col gap-y-4"
            >
              <h1 className="z-[1000] capitalize text-2xl relative text-lightOrange">
                Black Lifestyle Lovers,
              </h1>
              <div className="flex *:z-[1000]  flex-col gap-y-3">
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="bg-darkGray absolute z-[1] -right-20 -top-5 rounded-sm w-[250px] h-[180px]"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
