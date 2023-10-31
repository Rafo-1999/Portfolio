import React from "react";
import Home from "../components/Home/Home";
import useStyles from "../components/Header/style";
import Header from "../components/Header/Header";
import About from "../components/About/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "../components/Skills/Skills";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default MainContent;

{
  /* <Routes>
          <Route path="/" element={<Home/>} />
         
        </Routes> */
}
