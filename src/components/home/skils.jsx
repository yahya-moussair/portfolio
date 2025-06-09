import React from "react";
import {
  FaBootstrap,
  FaGitAlt,
  FaPhp,
  FaQuoteLeft,
  FaQuoteRight,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { translations } from "../../constants/translations";
import { useAppContext } from "../../context";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 className="text-4xl" />, name: "HTML5", color: "from-orange-500 to-orange-600" },
        { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3", color: "from-blue-500 to-blue-600" },
        { icon: <IoLogoJavascript className="text-4xl" />, name: "JavaScript", color: "from-yellow-500 to-yellow-600" },
        { icon: <RiReactjsLine className="text-4xl" />, name: "React", color: "from-cyan-500 to-cyan-600" },
        { icon: <RiTailwindCssFill className="text-4xl" />, name: "Tailwind", color: "from-teal-500 to-teal-600" },
        { icon: <FaBootstrap className="text-4xl" />, name: "Bootstrap", color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs className="text-4xl" />, name: "Node.js", color: "from-green-500 to-green-600" },
        { icon: <SiExpress className="text-4xl" />, name: "Express", color: "from-gray-500 to-gray-600" },
        { icon: <SiMongodb className="text-4xl" />, name: "MongoDB", color: "from-emerald-500 to-emerald-600" },
        { icon: <FaPhp className="text-4xl" />, name: "PHP", color: "from-indigo-500 to-indigo-600" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt className="text-4xl" />, name: "Git", color: "from-red-500 to-red-600" },
        { icon: <SiGnubash className="text-4xl" />, name: "Bash", color: "from-gray-500 to-gray-600" },
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {t.title}
          </motion.h1>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {category.title}
                </h2>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative overflow-hidden rounded-xl bg-gray-800/20 backdrop-blur-md border border-gray-700/30 p-6 flex flex-col items-center gap-4 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-full bg-gradient-to-r ${skill.color} text-white`}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h3>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gray-800/20 backdrop-blur-md border border-gray-700/30 rounded-2xl p-6">
              <motion.span
                initial={{ rotate: -45 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400"
              >
                <FaQuoteLeft className="text-2xl" />
              </motion.span>
              <p className="text-xl text-gray-300 italic">
                {quote}
              </p>
              <motion.span
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-400"
              >
                <FaQuoteRight className="text-2xl" />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
