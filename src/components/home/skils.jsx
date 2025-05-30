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
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { translations } from "../../constants/translations";
import { useAppContext } from "../../context";

const Skils = () => {
  const { language } = useAppContext();
  const t = translations[language].skills;
  const quote = translations[language].about.quote;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skills = [
    { icon: <IoLogoJavascript className="lg:text-5xl text-4xl" />, name: "Javascript" },
    { icon: <RiReactjsLine className="lg:text-5xl text-4xl" />, name: "React Js" },
    { icon: <RiTailwindCssFill className="lg:text-5xl text-4xl" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="lg:text-5xl text-4xl" />, name: "Bootstrap" },
    { icon: <SiGnubash className="lg:text-5xl text-4xl" />, name: "Bash" },
    { icon: <FaPhp className="lg:text-5xl text-4xl" />, name: "PHP" },
    { icon: <FaGitAlt className="lg:text-5xl text-4xl" />, name: "Git" }
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:gap-y-10 gap-y-8 items-center py-9 lg:px-30 px-3 lg:py-10 z-10 w-full bg-white/10 backdrop-blur-md border border-white/10 shadow-md"
      >
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[3rem] font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 justify-center md:grid-cols-3 grid-cols-2 gap-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#0f2027"
              }}
              className="cursor-auto lg:px-7 px-6 py-4 border-[2px] rounded-lg border-white flex flex-col gap-5 items-center transition-colors duration-300 lg:hover:scale-105 lg:hover:bg-white lg:hover:text-[#0f2027]"
            >
              <motion.div
                className="lg:hover:rotate-[360deg] transition-all duration-600"
              >
                {skill.icon}
              </motion.div>
              <motion.h1 className="lg:text-2xl text-lg font-semibold">
                {skill.name}
              </motion.h1>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          <motion.span
            initial={{ rotate: -45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="text-[1rem] text-white/80" />
          </motion.span>
          <span className="text-[1.1rem] font-semibold">
            {quote}
          </span>
          <motion.span
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteRight className="text-[1rem] text-white/80" />
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skils;
