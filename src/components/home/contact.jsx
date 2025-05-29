import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const nameRegex = /^[a-zA-ZÀ-ÿ' -]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const sendInfo = (e) => {
    e.preventDefault();
    const templatesParams = {
      form_name: name,
      form_email: email,
      form_phone: phone,
      form_subject: subject,
      message: description,
      to_name: "yahya moussair",
    };
    const checkValid = (e, regexFormat) => {
      return regexFormat.test(e);
    };
    if (name && email && description) {
      if (checkValid(name, nameRegex)) {
        if (checkValid(email, emailRegex)) {
          emailjs
            .send(
              "service_mxvc664",
              "template_k11ixij",
              templatesParams,
              "ryTeY-Y7CoQGAqWvK"
            )
            .then(
              () => {
                setName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setDescription("");
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
        } else {
          alert(language === 'en' ? "Please enter a valid email format" : "Veuillez entrer un format d'email valide");
        }
      } else {
        alert(language === 'en' ? "Please enter a valid name format" : "Veuillez entrer un format de nom valide");
      }
    } else {
      alert(language === 'en' ? "Please fill in all required fields" : "Veuillez remplir tous les champs obligatoires");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact"
        className="flex flex-col gap-y-15 text-center py-9 lg:px-30 px-3 lg:py-10 z-10 w-full"
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
        <div className="flex lg:flex-row flex-col gap-x-7 gap-y-4 lg:items-start md:px-10">
          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            ref={form}
            onSubmit={sendInfo}
            className="border-[1px] border-white rounded-xl lg:w-1/2 w-full text-white p-5 md: flex flex-col gap-y-3"
          >
            <div className="w-full flex lg:flex-row md:flex-row flex-col gap-y-3 gap-x-2 items-center">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full bg-transparent"
                placeholder={t.name}
                name="user_name"
                value={name}
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full bg-transparent"
                placeholder={t.email}
                name="user_email"
                value={email}
                required
              />
            </div>
            <div className="w-full flex lg:flex-row md:flex-row flex-col gap-y-3 gap-x-2 items-center">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full bg-transparent"
                placeholder={t.phone}
                name="user_phone"
                value={phone}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full bg-transparent"
                placeholder={t.subject}
                name="user_subject"
                value={subject}
              />
            </div>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              onChange={(e) => setDescription(e.target.value)}
              name="user_description"
              className="py-3 px-4 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] bg-transparent"
              rows={8}
              placeholder={t.description}
              value={description}
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0f2027" }}
              whileTap={{ scale: 0.95 }}
              value="send"
              className="border-[1px] border-white w-full rounded-xl py-2 cursor-pointer font-semibold transition-all duration-300"
            >
              {t.submit}
            </motion.button>
          </motion.form>

          <motion.div
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 py-2"
          >
            <Link to="https://github.com/yahya-moussair" target="_blank">
              <motion.div
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#0f2027"
                }}
                className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer transition-all duration-300 border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4"
              >
                <FaGithub className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 items-center md:w-full lg:w-full justify-between">
                  <motion.div whileHover={{ x: 5, y: -5 }}>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </motion.div>
                  <h1 className="text-[1rem] font-semibold">{t.github}</h1>
                </div>
              </motion.div>
            </Link>
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
              <motion.div
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#0f2027"
                }}
                className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer transition-all duration-300 border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4"
              >
                <FaLinkedin className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between">
                  <motion.div whileHover={{ x: 5, y: -5 }}>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </motion.div>
                  <h1 className="text-[1rem] font-semibold">{t.linkedin}</h1>
                </div>
              </motion.div>
            </Link>
            <Link onClick={() => (window.location = "mailto:yahyamoussair05@gmail.com")}>
              <motion.div
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#0f2027"
                }}
                className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer transition-all duration-300 border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4"
              >
                <SiGmail className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between">
                  <motion.div whileHover={{ x: 5, y: -5 }}>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </motion.div>
                  <h1 className="text-[1rem] font-semibold">{t.email_cta}</h1>
                </div>
              </motion.div>
            </Link>
            <Link to="https://www.instagram.com/yahya.moussair/?next=%2F" target="_blank">
              <motion.div
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#0f2027"
                }}
                className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer transition-all duration-300 border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4"
              >
                <FaInstagram className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between">
                  <motion.div whileHover={{ x: 5, y: -5 }}>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </motion.div>
                  <h1 className="text-[1rem] font-semibold">{t.instagram}</h1>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
