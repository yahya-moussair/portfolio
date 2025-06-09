import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: { yoyo: Infinity, duration: 0.8 },
        y: { yoyo: Infinity, duration: 0.4 },
      },
    },
    animationTwo: {
      y: [0, -40],
      x: [0, 20],
      transition: {
        x: { yoyo: Infinity, duration: 0.8 },
        y: { yoyo: Infinity, duration: 0.6 },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 w-full h-full flex items-center justify-center bg-gray-950 z-50"
    >
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center"
      >
        <motion.div
          variants={loaderVariants}
          animate="animationOne"
          className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
        />
        <motion.div
          variants={loaderVariants}
          animate="animationTwo"
          className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 shadow-lg"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-16 text-lg text-gray-400 font-semibold"
      >
        Loading your awesome portfolio...
      </motion.h1>
    </motion.div>
  );
};

export default Loading; 