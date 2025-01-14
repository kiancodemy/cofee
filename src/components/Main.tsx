import first from "../assets/coffee/coffee1.png";

import { motion } from "motion/react";
import two from "../assets/coffee/coffee3.png";
export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col py-10 gap-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 1, delay: 0.5 },
            }}
            className={`text-center duration-1000 delay-150 text-4xl 
              font-bold capitalize text-darkGray`}
          >
            <span className=" capitalize ">Fresh and </span>
            <span className="text-primary capitalize ">Tasty coffee</span>
          </motion.div>
          <div className="text-center md:max-w-[60%] container  ">
            <motion.h1
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{
                opacity: 1,
                scale: [1, 1.2, 0.9, 1],

                transition: { duration: 0.5, delay: 0.8 },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              reprehenderit eum ducimus, distinctio cum eaque totam voluptatem
              ex dolorem fuga.
            </motion.h1>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.3, duration: 0.7 },
            }}
            className="flex flex-col items-center"
          >
            <img src={first} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.6, duration: 0.7 },
            }}
            className="flex flex-col items-center"
          >
            <img src={two} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.9, duration: 0.7 },
            }}
            className="flex flex-col items-center"
          >
            <img src={first} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
