import bgiamge from "../assets/bg-slate.png";

import { GiHamburgerMenu } from "react-icons/gi";
import black from "../assets/black.png";
export default function Hero() {
  const bgimage = {
    backgroundImage: `url(${bgiamge})`,
    backgroundrepeat: "repeat",
    backgroundSize: "cover",
    backgrupostion: "center",
  };
  return (
    <div style={bgimage}>
      <div className="container  min-h-[750px]">
        <div className="flex pt-4  md:pt-8  items-center justify-between">
          <h1 className="uppercase text-base flex gap-x-2 font-semibold  md:text-2xl ">
            <span className="text-primary">coders</span>
            <span className="text-white">coffee.</span>
          </h1>
          <div className="text-white cursor-pointer text-2xl md:text-3xl">
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  relative">
          <img
            src={black}
            className="absolute hidden md:block top-full md:top-0 md:inset-x-1/2 md:-translate-x-1/2"
            alt=""
          />
          <div className="md:py-40 py-20 relative  text-lightOrange">
            <div className="flex pb-20 translate-x-20 gap-y-3 flex-col text-6xl font-bold md:text-7xl text">
              <h1>Blvck</h1>
              <h1>Tumbler</h1>
            </div>
            <div className="relative translate-y-7 flex flex-col gap-y-4">
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
            </div>
          </div>
          <div className="md:hidden flex justify-center ">
            <img src={black} className="" alt="coffeee" />
          </div>
          <div className="py-40 hidden relative md:flex items-end justify-end  text-lightOrange">
            <div className=" relative translate-y-7 md:flex flex-col gap-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
