import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className=" lg:px-10 px-0 lg:py-20 py-7 flex lg:flex-row flex-col gap-x-15 lg:gap-y-0 gap-y-10 justify-center items-center z-10 w-[80%] mx-auto">
        <div className="lg:w-1/3 rounded-2xl w-full overflow-hidden lg:hover:shadow-2xl/10 lg:hover:shadow-white/100">
          <img
            src={images.heroImg}
            alt=""
            className="w-full rounded-2xl lg:hover:scale-110 z-10 transition-all duration-300"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-y-6 lg:text-start text-center">
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-5xl text-3xl font-bold">Hi, I'm Yahya</h1>
            <p className="lg:text-3xl text-xl font-semibold">
              Full Satck Web Devloper
            </p>
          </div>
          <p className="lg:text-xl text-[1rem]">
            "I create modern, responsive websites that blend clean design with
            powerful functionality.
          </p>
          <div className="flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-3">
            <Link to="/about">
              <button className="bg-gradient-to-r text-xl cursor-pointer from-cyan-400 to-blue-600 text-white font-semibold py-2 px-15 rounded-lg shadow-md lg:hover:scale-105 transition-transform duration-200">
                About
              </button>
            </Link>
            <Link to="/project">
              <button className="bg-gradient-to-r text-xl cursor-pointer from-cyan-400 to-blue-600 text-white font-semibold py-2 px-13 rounded-lg shadow-md lg:hover:scale-105 transition-transform duration-200">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
