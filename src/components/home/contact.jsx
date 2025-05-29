import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const nameRegex = /^[a-zA-ZÀ-ÿ' -]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    if (name != "" && email != "" && description != "") {
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
          alert("Please enter a valid email format");
        }
      } else {
        alert("Please enter a valid name format");
      }
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };
  return (
    <>
      <div
        id="projects"
        className="flex flex-col gap-y-15 text-center bg-white/10 backdrop-blur-md border border-white/10 shadow-md py-9 lg:px-30 px-3 lg:py-10 z-10 w-full"
      >
        <h1 className="text-[3rem] font-bold">Contact</h1>
        <div className="flex lg:flex-row flex-col gap-x-7 gap-y-4 lg:items-start md:px-10">
          <form
            ref={form}
            onSubmit={sendInfo}
            action=""
            className="border-[1px] border-white rounded-xl lg:w-1/2 w-full text-white p-5 md: flex flex-col gap-y-3"
          >
            <div className="w-full flex lg:flex-row md:flex-row flex-col gap-y-3 gap-x-2 items-center">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full"
                placeholder="Name"
                name="user_name"
                value={name}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full"
                placeholder="Email"
                name="user_email"
                value={email}
              />
            </div>
            <div className="w-full flex lg:flex-row md:flex-row flex-col gap-y-3 gap-x-2 items-center">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full"
                placeholder="Phone Number"
                name="user_phone"
                value={phone}
              />
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="focus:outline-none py-2 px-3 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem] lg:w-1/2 w-full"
                placeholder="Subject"
                name="user_subject"
                value={subject}
              />
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="user_description"
              id=""
              className="py-3 px-4 border-[1px] border-white rounded-xl placeholder:text-white text-[1.1rem]"
              rows={8}
              placeholder="Description"
              value={description}
            ></textarea>
            <button
              value="send"
              className="border-[1px] border-white w-full rounded-xl py-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
            >
              Submit
            </button>
          </form>
          <div className="lg:w-1/2 w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 py-2">
            <Link to="https://github.com/yahya-moussair" target="_blank">
              <div className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer lg:hover:bg-[white] lg:hover:text-black transition-all duration-300 lg:hover:scale-[102%] border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4">
                <FaGithub className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 items-center md:w-full lg:w-full justify-between ">
                  <FaArrowUpRightFromSquare className="text-2xl" />
                  <h1 className="text-[1rem] font-semibold">
                    See GitHub repo
                  </h1>
                </div>
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              <div className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer lg:hover:bg-[white] lg:hover:text-black transition-all duration-300 lg:hover:scale-[102%] border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4">
                <FaLinkedin className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between ">
                  <FaArrowUpRightFromSquare className="text-2xl" />
                  <h1 className="text-[1rem] font-semibold">
                    Find me on LinkedIn
                  </h1>
                </div>
              </div>
            </Link>
            <Link
              onClick={() =>
                (window.location = "mailto:yahyamoussair05@gmail.com")
              }
            >
              <div className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer lg:hover:bg-[white] lg:hover:text-black transition-all duration-300 lg:hover:scale-[102%] border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4">
                <SiGmail className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between ">
                  <FaArrowUpRightFromSquare className="text-2xl" />
                  <h1 className="text-[1rem] font-semibold">
                    Let’s chat by email
                  </h1>
                </div>
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/yahya.moussair/?next=%2F"
              target="_blank"
            >
              <div className="flex lg:flex-col md:flex-col flex-row justify-between lg:items-start md:items-start items-center border-[2px] cursor-pointer lg:hover:bg-[white] lg:hover:text-black transition-all duration-300 lg:hover:scale-[102%] border-white lg:h-[13rem] md:h-[10rem] h-fit rounded-lg px-4 py-4">
                <FaInstagram className="text-4xl" />
                <div className="flex lg:flex-row md:flex-row flex-row-reverse lg:gap-0 gap-x-4 lg:w md:w-full lg:w-full justify-between ">
                  <FaArrowUpRightFromSquare className="text-2xl" />
                  <h1 className="text-[1rem] font-semibold">
                    Connect on Instagram
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
