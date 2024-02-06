import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./style";
//@ts-ignore
import polytechnicLogo from "../../Images/polytechnic.jpeg";
//@ts-ignore
import picsartAcademyLogo from "../../Images/picsartAcademy.jpeg";
//@ts-ignore
import acaLogo from "../../Images/aca.png";

const Education = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={classes.title}>
        <h1 className="heading">
          <i className="fas fa-graduation-cap">
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          My <b style={{ color: "#8C00FF" }}>Education</b>
        </h1>
      </div>

      <div className={classes.container}>
        <div className={classes.university}>
          <img src={polytechnicLogo} />
        </div>
        <div className={classes.content}>
          <h1 style={{ color: "#8C00FF", fontSize: "44px" }}>
            National Polytechnic University of Armenia
          </h1>
          <span style={{ color: "#8C00FF", fontSize: "24px" }}>
            {" "}
            Computer Engineering
          </span>
          <h4 style={{ color: "#8C00FF", fontSize: "24px" }}>
            2016-2020 | Bachelors Degree{" "}
          </h4>
        </div>
      </div>

      <div className={classes.title}>
        <h1 className="heading">
          <i className="fas fa-graduation-cap">
            {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
            <img
              src="https://img.icons8.com/?size=100&id=tYGHPEO9yx8X&format=gif"
              alt=""
            />
          </i>
          <b style={{ color: "#8C00FF" }}> My </b>Certificates
        </h1>
      </div>

      <div className={classes.container}>
        <div className={classes.university}>
          <img src={picsartAcademyLogo} />
        </div>
        <div className={classes.content}>
          <h1 style={{ color: "#8C00FF", fontSize: "44px" }}>
            Picsart Academy
          </h1>
          <span style={{ color: "#8C00FF", fontSize: "24px" }}>
            {" "}
            Full-Stack Web Development Course
          </span>
          <h4 style={{ color: "#8C00FF", fontSize: "24px" }}>2022-2023 </h4>
        </div>
      </div>
      <br />
      <div className={classes.container}>
        <div className={classes.university}>
          <img src={picsartAcademyLogo} />
        </div>
        <div className={classes.content}>
          <h1 style={{ color: "#8C00FF", fontSize: "44px" }}>
            Picsart Academy
          </h1>
          <span style={{ color: "#8C00FF", fontSize: "24px" }}>
            Java Development Course
          </span>
          <h4 style={{ color: "#8C00FF", fontSize: "24px" }}>2022-2023 </h4>
        </div>
      </div>
      <br />
      <div className={classes.container}>
        <div className={classes.university}>
          <img src={acaLogo} />
        </div>
        <div className={classes.content}>
          <h1 style={{ color: "#8C00FF", fontSize: "44px" }}>
            Armenian Code Academy
          </h1>
          <span style={{ color: "#8C00FF", fontSize: "24px" }}>
            Introduction to Programming
          </span>
          <h4 style={{ color: "#8C00FF", fontSize: "24px" }}>2022-2022 </h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
