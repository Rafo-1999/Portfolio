import React from "react";
import useStyles from "./style";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-ignore
import aboutImage from "../../Images/Raf.jpg";

const About = () => {
  const classes = useStyles();

  const handleResumeButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1IQp7LdQn3ypEhn8SCvamVtacZivICKRN/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <h1>
          <FontAwesomeIcon icon={faUserAlt} /> About <span style={{ color: "#8C00FF" }}>Me</span>
        </h1>
      </div>
      <div className={classes.imageContainer}>
        <div>
          <img src={aboutImage} className={classes.image} />
        </div>

        <div className={classes.aboutMeText}>
          <p style={{ fontSize: "30px" }}>
            <b>
              I'm <span style={{ color: "#8C00FF" }}>Rafik</span>
            </b>
          </p>
          <p style={{ color: "#8C00FF", fontSize: "25px" }}>
            <b>Full-Stack Developer</b>
          </p>
          <p style={{ fontSize: "20px" }}>
            I'm a self-motivated, enthusiastic, balanced, tolerant and responsible person. I always
            concentrate on self education as I think there's no success without it. I can work
            unsupervised alone or as a member of a team and I like to use my skills to make a
            positive contribution to the workforce. I always willing to enrich my knowledge
          </p>

          <p style={{ fontSize: "20px" }}>
            <b style={{ color: "#8C00FF" }}>Email: </b> rafomnacakanyan99@gmail.com
          </p>
          <p style={{ fontSize: "20px" }}>
            <b style={{ color: "#8C00FF" }}>Place: </b> Yerevan, Armenia
          </p>

          <button className={classes.resumeButton} onClick={handleResumeButtonClick}>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
