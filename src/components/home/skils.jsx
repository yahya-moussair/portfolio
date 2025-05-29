import React from "react";
import {
  FaBootstrap,
  FaGitAlt,
  FaPhp,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash } from "react-icons/si";

const Skils = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-y-10 gap-y-8 items-center py-9 lg:px-30 px-3 lg:py-10 z-10 w-full bg-white/10 backdrop-blur-md border border-white/10 shadow-md">
        <h1 className="text-[3rem] font-bold">Skills</h1>

        <div className="grid lg:grid-cols-5 justify-center md:grid-cols-3 grid-cols-2 gap-5">
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <IoLogoJavascript className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">Javascript</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <RiReactjsLine className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">React Js</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <RiTailwindCssFill className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">Tailwind CSS</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <FaBootstrap className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">Bootstrap</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <SiGnubash className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">Bash</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <FaPhp className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">PHP</h1>
          </div>
          <div className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center lg:hover:bg-white lg:hover:text-black lg:hover:scale-105 transition-all duration-300">
            <FaGitAlt className="lg:text-5xl text-4xl" />
            <h1 className="lg:text-2xl text-lg font-semibold">Git</h1>
          </div>
        </div>
        <p className="flex lg:gap-x-3 gap-x-1 text-center w-full justify-center">
          <FaQuoteLeft className="text-[0.7rem]" />
          <span className="text-[1.1rem] font-semibold flex gap-2">
            There’s no limit to what I can create with <span className="flex justify-center lg:gap-x-3 gap-x-1">code.<FaQuoteRight className="text-[0.7rem]" /></span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Skils;
