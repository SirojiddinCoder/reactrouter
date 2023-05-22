import { Route, Routes } from "react-router-dom";

import React from "react";
import Blog from "./Blog";
import Home from "./Home";
import About from "./About";

export default function Pages() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
