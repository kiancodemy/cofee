import React from "react";
import download from "../assets/coffee-cover.jpg";
import one from "../assets/website/app_store.png";
import two from "../assets/website/play_store.png";
export default function Download() {
  return (
    <div>
      <div className="container py-10">
        <div className="relative">
          <div className="absolute max-w-[400px] md:left-auto top-2 right-0 left-0 bottom-0  md:right-16 md:top-16  flex flex-col gap-y-4">
            <h1 className="capitalize  text-4xl  text-center">
              Download the app
            </h1>
            <h1 className="text-center">
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis
            </h1>
            <div className="flex *:w-40 justify-evenly">
              <img src={one} alt="" />

              <img src={two} alt="" />
            </div>
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
