import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-5 right-5 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </motion.button>
  );
};

export default LanguageSwitcher; 