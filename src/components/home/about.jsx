import React from "react";
import images from "../../constants/images";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import resume from "../../assets/files/somatosensory.pdf";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 items-center bg-white/10 backdrop-blur-md border border-white/10 shadow-md py-9 lg:px-30 px-3 lg:py-10 z-10 w-full">
        <h1 className="text-[3rem] font-bold">About Me</h1>
        <div
          id="about"
          className="flex lg:flex-row lg:items-center flex-col-reverse gap-x-15 lg:gap-y-0 gap-y-10 lg:text-start text-center "
        >
          <div className="flex flex-col gap-y-8 lg:w-1/2 w-full">
            <h1 className="lg:text-[2.5rem] text-3xl font-bold ">WHO AM I ?</h1>
            <p className="lg:ps-6  capitalize text-[1.2rem]">
              I'm Yahya Moussair, a frontend web developer passionate about
              creating responsive, user-friendly, and visually appealing
              websites. I enjoy turning ideas into interactive digital
              experiences and am always exploring new ways to improve my work
              and grow as a developer.
            </p>
            <div className="flex lg:flex-row flex-col w-full  items-center gap-y-6 ">
              <div className="flex gap-x-5 w-full lg:justify-start justify-center">
                <Link target="_blank" to="https://github.com/yahya-moussair">
                  <FaGithub className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                >
                  <FaLinkedin className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/yahya.moussair/?next=%2F"
                >
                  <FaInstagram className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
                </Link>
                <Link
                  target="_blank"
                  to="#"
                  onClick={() =>
                    (window.location = "mailto:yahyamoussair05@gmail.com")
                  }
                >
                  <SiGmail className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
                </Link>
              </div>
              <a
                href={resume}
                download="resume"
                className="bg-gradient-to-r text-xl cursor-pointer from-cyan-400 to-blue-600 text-white font-semibold w-[65%] text-center py-2  px-1 rounded-lg shadow-md lg:hover:scale-105 transition-transform duration-200"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <div className="rounded-[50%] lg:w-1/2 w-full">
            <img src={images.code} alt="" className="rounded-xl w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
