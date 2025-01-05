import React from "react";
import word from "../assets/world-map.png";
export default function Order() {
  return (
    <div>
      <div className="container justify-between items-center flex-col gap-y-6 md:flex-row flex py-20">
        <div className="basis-[35%] flex flex-col gap-y-6 ">
          <h1 className="font-serif text-4xl text-darkGray font-bold">
            Buy our products from anywhere
          </h1>

          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-2 ">
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
            </div>
            <div className="flex gap-x-2">
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
            </div>
            <button className="bg-primary capitalize p-2 rounded-md text-white">
              order now
            </button>
          </div>
        </div>

        <div className="basis-[50%] flex">
          <img src={word} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
