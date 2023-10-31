import React, { useEffect, useState } from 'react'
import useStyles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faTelegramPlane,  } from '@fortawesome/free-brands-svg-icons';


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
    <div  className={classes.root}>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/740/41/desktop-wallpaper-cube-full-and-backgrounds-black-cube.jpg" alt="" width={"100%"}/>

        <div className={classes.centerText} >
            <h1>Hi There</h1>
            <h1>I'm Rafik Mnatsakanyan</h1>
            <h2>I'm into {profession}</h2>

            <a href="#about" className={classes.aboutButton} ><span>About Me </span></a>
            <br/>
            <br/>
            <br/>
        
      <ul >
        <li className={classes.socialIcons}><a  aria-label="LinkedIn" href="https://www.linkedin.com/in/jigar-sable/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className={classes.socialIcons}><a className="github" aria-label="GitHub" href="https://github.com/jigar-sable" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li className={classes.socialIcons}><a className="twitter" aria-label="Twitter" href="https://twitter.com/jigar_sable" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li className={classes.socialIcons}><a className="telegram" aria-label="Telegram" href="https://t.me/lifecode5" target="_blank"><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
      </ul>


        </div>
        <div className={classes.personImageDiv}>
          <img src="https://avatars.githubusercontent.com/u/64949957?v=4" alt="" className={classes.personImage}/>
        </div>


    </div>
  )
}

export default Home;
