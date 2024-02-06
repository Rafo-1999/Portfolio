import React from "react";
import Home from "../components/Home/Home";
import useStyles from "./style";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about" style={{ height: "100vh" }}>
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience" style={{ height: "90vh" }}>
        <Experience />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default MainContent;
