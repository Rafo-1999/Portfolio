import React from 'react'
import useStyles from './style';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const classes=useStyles();

  return (
    <div>
        <h1 className={classes.title}>  <FontAwesomeIcon icon={faUserAlt} /> About <span style={{color: "#4B0082"}}>Me</span> </h1>
        <img src="https://avatars.githubusercontent.com/u/64949957?v=4" className={classes.image} />
    </div>
  )
}

export default About
