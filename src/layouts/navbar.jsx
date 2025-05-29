import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 w-full h-screen z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <div className="z-50 lg:px-10 px-4 lg:py-3 py-2 bg-gradient-to-r from-[#0f2027]/90 via-[#203a43]/90 to-[#2c5364]/90 backdrop-blur-md fixed w-[100%] left-[50%] translate-x-[-50%] flex items-center justify-between">
        <Link to="/">
          <h1 className="text-[3rem] text-white  font-bold font-mono lg:hover:scale-120 transition-all duration-300">
            YMS
          </h1>
        </Link>
        <nav
          className={`transition-all duration-700 z-50 flex lg:flex-row flex-col items-center lg:relative fixed lg:top-0 lg:translate-x-0 translate-x-[-50%] lg:left-0 left-[50%] lg:translate-y-0 lg:bg-transparent bg-white lg:text-white text-black lg:w-fit lg:gap-x-15 gap-y-9 w-[95%] lg:py-0 py-20 lg:rounded-none rounded-2xl ${
            isOpen ? "translate-y-[70%]" : "translate-y-[-200%]"
          }`}
        >
          <MdCancel
            className="text-2xl absolute top-[10px] right-[10px] lg:hidden block"
            onClick={() => setIsOpen(false)}
          />
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-xl capitalize relative group"
          >
            home
            <span className="absolute top-[95%] left-0 w-0 bg-white h-[1px] group-hover:w-full transition-all duration-300 lg:block hidden"></span>
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-xl capitalize relative group"
          >
            about
            <span className="absolute top-[95%] left-0 w-0 bg-white h-[1px] group-hover:w-full transition-all duration-300 lg:block hidden"></span>
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-xl capitalize relative group"
          >
            projects
            <span className="absolute top-[95%] left-0 w-0 bg-white h-[1px] group-hover:w-full transition-all duration-300 lg:block hidden"></span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xl capitalize relative group"
          >
            contact
            <span className="absolute top-[95%] left-0 w-0 bg-white h-[1px] group-hover:w-full transition-all duration-300 lg:block hidden"></span>
          </a>
        </nav>
        <div className="flex items-center lg:gap-x-5 gap-x-2 ">
          <Link to="https://github.com/yahya-moussair" target="_blank">
            <FaGithub className="text-[1.7rem] lg:hover:scale-120 transition-all duration-300 text-white" />
          </Link>
          <Link
            to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
          >
            <FaLinkedin className="text-[1.7rem] lg:hover:scale-120 transition-all duration-300 text-white" />
          </Link>
          <Link
            to="https://www.instagram.com/yahya.moussair/?next=%2F"
            target="_blank"
          >
            <FaInstagram className="text-[1.7rem] lg:hover:scale-120 transition-all duration-300 text-white" />
          </Link>
          <FaBars
            className="text-[1.5rem] text-white lg:hidden"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
