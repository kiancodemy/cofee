import word from "../assets/world-map.png";
import { motion } from "motion/react";
export default function Order() {
  const animation = {
    init: { opacity: 0, translateY: "50px" },
    first: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.2, delay: 0.3, type: "spring", stiffness: 80 },
    },
    second: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.2, delay: 0.5, type: "spring", stiffness: 80 },
    },
    third: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.2, delay: 0.7, type: "spring", stiffness: 80 },
    },
  };
  return (
    <div>
      <div className=" p-4 items-center flex-col gap-y-6 md:flex-row flex py-20">
        <div className=" flex flex-col gap-y-6 ">
          <motion.h1
            variants={animation}
            initial="init"
            whileInView="first"
            className="font-serif text-xl  md:text-4xl text-darkGray font-bold"
          >
            Buy our products from anywhere
          </motion.h1>

          <div className="flex flex-col gap-y-8">
            <motion.div
              variants={animation}
              initial="init"
              whileInView="second"
              className="flex md:flex-row flex-col gap-y-4"
            >
              <input
                placeholder="name"
                type="text"
                className="placeholder:capitalize placeholder:px-2  border md:w-[30%] rounded-md p-2 border-gray-400"
              />
              <input
                placeholder="email"
                type="text"
                className="placeholder:capitalize placeholder:px-2 border grow rounded-md p-2 border-gray-400"
              />
            </motion.div>
            <motion.div
              variants={animation}
              initial="init"
              whileInView="second"
              className="flex md:flex-row flex-col gap-y-4"
            >
              <input
                placeholder="country"
                type="text"
                className="placeholder:capitalize placeholder:px-2 border md:w-[60%] rounded-md p-2 border-gray-400"
              />
              <input
                placeholder="zipcode"
                type="text"
                className="placeholder:capitalize placeholder:px-2 border w-[20%]  grow rounded-md p-2 border-gray-400"
              />
            </motion.div>
            <motion.button
              variants={animation}
              initial="init"
              whileInView="third"
              className="bg-primary capitalize p-2 rounded-md text-white"
            >
              order now
            </motion.button>
          </div>
        </div>

        <div className="basis-[50%] flex">
          <img src={word} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
