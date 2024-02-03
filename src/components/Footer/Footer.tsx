import React from "react";
import useStyles from "./style";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <h1>Rafik's Portfolio</h1>
          <p>Thank you for visiting my personal portfolio website.</p>
          <p> Connect with me over socials.</p>
        </div>

        <div className={classes.quickLinks}>
          <h1>Quick Links</h1>
          <Link to="home" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronCircleRight} /> Home
          </Link>
          <Link to="about" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronCircleRight} /> About
          </Link>
          <Link to="skills" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronCircleRight} /> Skills
          </Link>
          <Link to="education" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronCircleRight} /> Education
          </Link>
          <Link to="experience" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronCircleRight} /> Work Experiences
          </Link>
        </div>

        <div>
          <h1>Contact Info</h1>
          <FontAwesomeIcon icon={faPhone} />
          +374 55 53-57-59
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            rafomnacakanyan99@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} /> Yerevan, Armenia
          </p>
          <ul>
            <li className={classes.socialIcons}>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rafik-mnatsakanyan-206437184/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className={classes.socialIcons}>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/Rafo-1999"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
