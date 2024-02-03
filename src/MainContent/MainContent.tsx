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
      <section id="home" style={{ height: "100vh" }}>
        <Home />
      </section>
      <section id="about" style={{ height: "100vh" }}>
        <About />
      </section>
      <section id="skills" style={{ height: "107vh" }}>
        <Skills />
      </section>
      <section id="education" style={{ height: "137vh" }}>
        <Education />
      </section>
      <section id="experience" style={{ height: "90vh" }}>
        <Experience />
      </section>
      <section  >
        <Footer />
      </section>
    </div>
  );
};

export default MainContent;

