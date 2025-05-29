import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import { LanguageProvider } from "./context/LanguageContext";
import Loading from "./components/Loading";
import LanguageSwitcher from "./components/LanguageSwitcher";

const Navbar = lazy(() => import("./layouts/navbar"));
const Footer = lazy(() => import("./layouts/footer"));
const Error = lazy(() => import("./pages/error"));
const Home = lazy(() => import("./pages/home"));

const App = () => {
  return (
    <LanguageProvider>
      <MyProvider>
        <LanguageSwitcher />
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </MyProvider>
    </LanguageProvider>
  );
};

export default App;
