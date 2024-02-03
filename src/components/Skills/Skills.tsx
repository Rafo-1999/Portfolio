import React from "react";
import useStyles from "./style";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: "18px" }} />
        Skills & <b style={{ color: "yellow" }}>Abilities</b>
      </div>

      <div className={classes.skillsContainer}>
        <div className={classes.skillContainerRow}>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=Q5FXgRZybr2A&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Html</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=4d9YPiN04osD&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Css</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=128&id=qsQZWvMuX4ad&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Sass</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oM2r28D-VetB4P0fYlTXnBQDkjOjJZYYJWOMCZLLjF1ZG4L-BOzIGkUOi-gNwFEbXh4&usqp=CAU"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Jss</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=96&id=108784&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>JavaScript</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>TypeScript</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=80&id=Nlsua06Gvxel&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>React</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Express.js</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=96&id=54087&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Node.js</div>
          </div>

          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=128&id=FRRACRKRsw2s&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Java</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoMjehJt2wceO5794Qe7FZ2U2uG1jw0JxLQ&usqp=CAU"
                alt=""
              />
            </div>

            <div className={classes.skillElementInfo}>OOP</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=96&id=74402&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Mongo DB</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=en2FZIAZdquE&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Git VCS</div>
          </div>

          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=128&id=52539&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>GitHub</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=128&id=104145&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>GitLab</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=HF4xGsjDERHf&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Linux</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=KlZnzoT0Dyjy&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}>Networking</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img src="https://img.icons8.com/?size=160&id=GIBaguuy0lGN&format=png" alt="" />
            </div>
            <div className={classes.skillElementInfo}> Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


