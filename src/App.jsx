import React, { useState } from "react";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Haeder from "./components/Header";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Haeder />

      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
