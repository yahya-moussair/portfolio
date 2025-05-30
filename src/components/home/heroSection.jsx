import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { translations } from "../../constants/translations";
import { useAppContext } from "../../context";

const HeroSection = () => {
  const { language } = useAppContext();
  const t = translations[language].hero;

  return (
    <>
      <div id="hero" className="lg:px-10 px-0 lg:py-20 py-7 flex lg:flex-row flex-col gap-x-15 lg:gap-y-0 gap-y-10 justify-center items-center z-10 w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/3 rounded-2xl w-full overflow-hidden lg:hover:shadow-2xl/10 lg:hover:shadow-white/100"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={images.heroImg}
            alt=""
            className="w-full rounded-2xl z-10"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/2 w-full flex flex-col gap-y-6 lg:text-start text-center"
        >
          <div className="flex flex-col gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              {t.greeting}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:text-3xl text-xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent"
            >
              {t.role}
            </motion.p>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:text-xl text-[1rem]"
          >
            {t.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-3"
          >
            <a href="#about">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0f2027" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="border-[2px] text-xl cursor-pointer text-white bg-transparent border-white font-semibold py-2 px-15 rounded-lg shadow-md w-full"
              >
                {t.about}
              </motion.button>
            </a>
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0f2027" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="border-[2px] text-xl cursor-pointer text-white bg-transparent border-white font-semibold py-2 px-15 rounded-lg shadow-md w-full"
              >
                {t.projects}
              </motion.button>
            </a >
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
