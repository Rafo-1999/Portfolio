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
              <img
                src="https://img.icons8.com/?size=160&id=Q5FXgRZybr2A&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Html</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=160&id=4d9YPiN04osD&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Css</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=128&id=qsQZWvMuX4ad&format=png"
                alt=""
              />
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
              <img
                src="https://img.icons8.com/?size=96&id=108784&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>JavaScript</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>TypeScript</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=80&id=Nlsua06Gvxel&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>React</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Express.js</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=96&id=54087&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Node.js</div>
          </div>

          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=128&id=FRRACRKRsw2s&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Java</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoMjehJt2wceO5794Qe7FZ2U2uG1jw0JxLQ&usqp=CAU"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>

            <div className={classes.skillElementInfo}>OOP</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=96&id=74402&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Mongo DB</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=160&id=en2FZIAZdquE&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Git VCS</div>
          </div>

          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=128&id=52539&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>GitHub</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=128&id=104145&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>GitLab</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=160&id=HF4xGsjDERHf&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Linux</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=160&id=KlZnzoT0Dyjy&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}>Networking</div>
          </div>
          <div className={classes.skillElement}>
            <div className={classes.skillImage}>
              <img
                src="https://img.icons8.com/?size=160&id=GIBaguuy0lGN&format=png"
                alt=""
              />
            </div>
            <div className={classes.skillElementInfo}> Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
