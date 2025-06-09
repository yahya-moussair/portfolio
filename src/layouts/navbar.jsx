import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../context";

const navTranslations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useAppContext();
  const t = navTranslations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", text: t.home },
    { href: "#about", text: t.about },
    { href: "#projects", text: t.projects },
    { href: "#contact", text: t.contact },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm w-full h-screen z-50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`z-50 px-4 lg:px-10 py-3 fixed w-full left-[50%] translate-x-[-50%] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl lg:text-4xl font-bold font-mono bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            YMS
          </motion.h1>
        </Link>

        <nav
          className={`transition-all duration-500 z-50 flex lg:flex-row flex-col items-center lg:relative fixed lg:top-0 lg:translate-x-0 translate-x-[-50%] lg:left-0 left-[50%] lg:translate-y-0 lg:bg-transparent bg-gray-900/95 lg:text-white text-white lg:w-fit lg:gap-x-8 gap-y-6 w-[90%] lg:py-0 py-16 lg:rounded-none rounded-2xl backdrop-blur-md ${
            isOpen ? "translate-y-[70%]" : "translate-y-[-200%]"
          }`}
        >
          <MdCancel
            className="text-2xl absolute top-4 right-4 lg:hidden block text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          />
          
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-lg lg:text-xl capitalize relative group px-2"
            >
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 lg:block hidden" />
            </motion.a>
          ))}

          {/* Language button for mobile/tablet only */}
          {isOpen && (
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl capitalize px-5 py-1 border border-black rounded-full bg-black hover:bg-white hover:text-black transition-colors duration-300 text-white lg:hidden mt-4"
            >
              {language === "en" ? "FR" : "EN"}
            </motion.button>
          )}
        </nav>

        <div className="flex items-center lg:gap-x-5 gap-x-2">
          <Link to="https://github.com/yahya-moussair" target="_blank">
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaGithub className="text-[1.7rem] transition-all duration-300 text-white" />
            </motion.div>
          </Link>
          <Link
            to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaLinkedin className="text-[1.7rem] transition-all duration-300 text-white" />
            </motion.div>
          </Link>
          <Link
            to="https://www.instagram.com/yahya.moussair/?next=%2F"
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaInstagram className="text-[1.7rem] transition-all duration-300 text-white" />
            </motion.div>
          </Link>
          {/* Language button for desktop only */}
          <div className="hidden lg:flex items-center ml-6">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-white"
            >
              {language === "en" ? "FR" : "EN"}
            </motion.button>
          </div>
          <FaBars
            className="text-[1.5rem] text-white lg:hidden"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
