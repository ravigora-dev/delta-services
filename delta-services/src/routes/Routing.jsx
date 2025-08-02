import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
};

export default Routing;
