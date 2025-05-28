import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { MyProvider } from "./context";

const App = () => {
  return (
    <MyProvider>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </MyProvider>
  );
};

export default App;
