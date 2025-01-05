import bgiamge from "../assets/bg-slate.png";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Hero() {
  const bgimage = {
    backgroundImage: `url(${bgiamge})`,
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={bgimage}>
      <div className="container mx-auto w-full min-h-[750px]">
        <div className="flex pt-4  md:pt-8  items-center justify-between">
          <h1 className="uppercase text-base flex gap-x-2 font-semibold  md:text-2xl ">
            <span className="text-primary">coders</span>
            <span className="text-white">coffee.</span>
          </h1>
          <div className="text-white cursor-pointer text-2xl md:text-3xl">
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        </div>
        <div className="grid-cols-1 grid md:grid-cols-2">
          <div className="py-40  text-lightOrange">
            <div className="flex pb-20 translate-x-20 gap-y-3 flex-col text-4xl font-bold md:text-7xl text">
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
          <div className="py-40  flex items-end justify-end  text-lightOrange">
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
              <div className="bg-darkGray absolute z-[1] -right-20 -top-5 rounded-sm w-[250px] h-[180px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
