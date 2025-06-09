import React, { createContext, useContext, useState } from "react";
import projects from "../data/projects";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [project, setProjet] = useState(projects);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const data = {
    project,
    setProjet,
    language,
    toggleLanguage,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

const useAppContext = () => useContext(MyContext);

export { MyProvider, useAppContext };
