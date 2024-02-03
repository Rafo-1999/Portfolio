import React, { useEffect, useState } from 'react'
import useStyles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,   } from '@fortawesome/free-brands-svg-icons';
// @ts-ignore
import homeImage from "../../Images/img.jpeg"; 
import { Link } from "react-scroll";


const Home = () => {
    const classes =useStyles();

    const [profession,setProfession]=useState("Java Development");

    const professions=["Frontend Development", "Backend Development", "Web Development"];

    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentIndex = professions.indexOf(profession);
        const nextIndex = (currentIndex + 1) % professions.length;
  
        setProfession(professions[nextIndex]);
      }, 1200); 
  
      return () => clearInterval(intervalId);
    }, [profession]); 
  
    

  return (
    <div className={classes.root}>
      <img
        src="https://e0.pxfuel.com/wallpapers/329/765/desktop-wallpaper-web-design-dark-developer.jpg"
        alt=""
        width={"100%"}
      />

      <div className={classes.centerText}>
        <h1 style={{ color: "#8C00FF" }}>Hi There</h1>
        <h1>I'm Rafik Mnatsakanyan</h1>
        <h2>
          I'm into <span style={{ color: "#8C00FF" }}>{profession}</span>
        </h2>
      </div>

      {/* <a href="#about" className={classes.aboutButton}>
          <span>About Me </span>
        </a> */}

      <div className={classes.centerAboutButton}>
        <Link className={classes.aboutButton} to="about" smooth={true} duration={1000}>
          About Me
        </Link>
      </div>

      <div className={classes.centerSocialIcons}>
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
            <a aria-label="GitHub" href="https://github.com/Rafo-1999" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.personImageDiv}>
        <img src={homeImage} alt="" width="50%" height="50%" className={classes.personImage} />
      </div>
    </div>
  );
}

export default Home;
