import React from "react";
import images from "../../constants/images";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { translations } from "../../constants/translations";
import { useAppContext } from "../../context";

const About = () => {
  const { language } = useAppContext();
  const t = translations[language].about;

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-5 items-center bg-white/10 backdrop-blur-md border border-white/10 shadow-md py-9 lg:px-30 px-3 lg:py-10 z-10 w-full"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[3rem] font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h1>
        <div
          id="about"
          className="flex lg:flex-row lg:items-center flex-col-reverse gap-x-15 lg:gap-y-0 gap-y-10 lg:text-start text-center "
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-8 lg:w-1/2 w-full"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:text-[2.5rem] text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              {t.whoami}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:ps-6 capitalize text-[1.2rem]"
            >
              {t.description}
            </motion.p>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex lg:flex-row flex-col w-full items-center gap-y-6"
            >
              <div className="flex gap-x-5 w-full lg:justify-start justify-center">
                <Link target="_blank" to="https://github.com/yahya-moussair">
                  <motion.div variants={socialIconVariants} whileHover="hover">
                    <FaGithub className="text-[2.5rem]" />
                  </motion.div>
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                  <motion.div variants={socialIconVariants} whileHover="hover">
                    <FaLinkedin className="text-[2.5rem]" />
                  </motion.div>
                </Link>
                <Link target="_blank" to="https://www.instagram.com/yahya.moussair/?next=%2F">
                  <motion.div variants={socialIconVariants} whileHover="hover">
                    <FaInstagram className="text-[2.5rem]" />
                  </motion.div>
                </Link>
                <Link target="_blank" to="#" onClick={() => (window.location = "mailto:yahyamoussair05@gmail.com")}>
                  <motion.div variants={socialIconVariants} whileHover="hover">
                    <SiGmail className="text-[2.5rem]" />
                  </motion.div>
                </Link>
              </div>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0f2027" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('The resume is currently being prepared and will be available soon.')}
                // href={resume}
                // download="resume"
                className="text-xl cursor-pointer text-white bg-transparent border-white font-semibold w-[65%] text-center py-2 px-1 rounded-lg shadow-md border-[2px] transition-colors duration-200"
              >
                {t.downloadResume}
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[50%] lg:w-1/2 w-full"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={images.code} 
              alt="" 
              className="rounded-xl w-full" 
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
