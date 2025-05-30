import React from "react";
import { useAppContext } from "../../context";
import { motion } from "framer-motion";
import { translations } from "../../constants/translations";
import images from "../../constants/images";

const Project = () => {
  const { project , language } = useAppContext();
  const t = translations[language].projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className='flex flex-col gap-y-15 py-9 lg:px-10 px-3 text-center lg:py-10 z-10 w-full'
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
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 place-items-center"
        >
          {project?.map((e, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group overflow-hidden relative cursor-pointer gap-y-5 w-fit h-fit bg-white/30 backdrop-blur-md border rounded-2xl border-white/10 shadow-lg lg:hover:shadow-xl lg:hover:shadow-white/20"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={images.portfolio}
                alt=""
                className="lg:rounded-xl rounded-t-xl"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="lg:group-hover:bottom-0 flex flex-col lg:gap-y-7 justify-center gap-y-5 px-5 py-5 items-start bg-gray-700/70 w-full h-full lg:absolute lg:bottom-[-200%] lg:transition-all lg:duration-600 relative bottom-0"
              >
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-bold"
                >
                  {e[language].projectName}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-start font-semibold"
                >
                  {e[language].description}
                </motion.p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${'repoLink' in e ? "flex gap-x-4" : ""}`}
                >
                  {'repoLink' in e && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="lg:hover:scale-105"
                    >
                      <a
                        href={e.repoLink}
                        target="_blank"
                        className="bg-white px-5 py-2 text-black font-semibold rounded-lg lg:hover:bg-black lg:hover:text-white transition-all duration-300"
                      >
                        {t.getCode}
                      </a>
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="lg:hover:scale-105"
                  >
                    <a
                      href={e.demoLink}
                      target="_blank"
                      className="bg-white px-5 py-2 text-black font-semibold rounded-lg lg:hover:bg-black lg:hover:text-white transition-all duration-300"
                    >
                      {t.demo}
                    </a>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
