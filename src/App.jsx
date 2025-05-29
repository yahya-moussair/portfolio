import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { MyProvider } from "./context";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  return (
    <LanguageProvider>
      <MyProvider>
        <LanguageSwitcher />
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </MyProvider>
    </LanguageProvider>
  );
};

export default App;
