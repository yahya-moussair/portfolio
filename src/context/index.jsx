import React, { createContext, useContext, useState } from "react";
import projects from "../json/projects.json"

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [project , setProjet] = useState(projects)

    const data = {
        project,
        setProjet
    };

    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    );
};

const useAppContext = () => useContext(MyContext);

export { MyProvider, useAppContext };
