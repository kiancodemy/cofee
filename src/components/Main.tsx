import React from "react";
import first from "../assets/coffee/coffee1.png";
import two from "../assets/coffee/coffee3.png";
export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col py-10 gap-y-2">
          <div className="flex text-3xl justify-center gap-x-3 font-bold">
            <span className=" capitalize ">Fresh and </span>
            <span className="text-primary capitalize ">Tasty coffee</span>
          </div>
          <div className="text-center md:max-w-[60%] container  ">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              reprehenderit eum ducimus, distinctio cum eaque totam voluptatem
              ex dolorem fuga.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3">
          <div className="flex flex-col items-center">
            <img src={first} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={two} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={first} alt="" className="w-[60%] " />
            <div className="flex items-center text-center flex-col gap-y-3 py-4">
              <h1 className="font-bold text-primary text-2xl capitalize">
                black coffe
              </h1>
              <h1 className="px-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
