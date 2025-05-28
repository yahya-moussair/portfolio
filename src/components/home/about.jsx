import React from "react";
import images from "../../constants/images";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const About = () => {
  return (
    <>
      <div className="flex lg:flex-row lg:items-center flex-col gap-x-15 lg:gap-y-0 gap-y-10 bg-white/10 backdrop-blur-md border border-white/10 shadow-md py-9 lg:px-30 px-2 lg:text-start text-center lg:py-10 z-10 w-full">
        <div className="flex flex-col gap-y-8 lg:w-1/2 w-full">
          <h1 className="lg:text-[2.5rem] text-3xl font-bold ">WHO AM I ?</h1>
          <p className="ps-6 capitalize text-[1.2rem]">
            I'm Yahya Moussair, a frontend web developer passionate about
            creating responsive, user-friendly, and visually appealing websites.
            I enjoy turning ideas into interactive digital experiences and am
            always exploring new ways to improve my work and grow as a
            developer.
          </p>
          <div className="flex gap-x-5 w-full lg:justify-start justify-center">
            <Link to="https://github.com/yahya-moussair">
                <FaGithub className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
            </Link>
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <FaLinkedin className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
            </Link>
            <Link to="https://www.instagram.com/yahya.moussair/?next=%2F">
                <FaInstagram className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
            </Link>
            <Link to="#" onClick={() => window.location = 'mailto:yahyamoussair05@gmail.com'}>
                <SiGmail className=" text-[2.5rem] lg:hover:scale-110 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="rounded-2xl lg:w-1/2 w-full">
          <img src={images.code} alt="" className="rounded-2xl w-full" />
        </div>
      </div>
    </>
  );
};

export default About;
