import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
    </Routes>
  );
}

export default router;
