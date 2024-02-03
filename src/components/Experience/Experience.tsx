
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import useStyles from './style';
//@ts-ignore
import picsart from "../../Images/picsart.jpeg";
//@ts-ignore
import codeRepubliCLab from "../../Images/codeRepublicLab.jpeg";
//@ts-ignore
import ucom from "../../Images/ucom.png";


 const Experience = () => {
    const classes=useStyles();
  return (
    <div>
      <div className={classes.title}>
        <h1 className="heading">
          <i className="fas fa-graduation-cap">
            <FontAwesomeIcon icon={faBriefcase} />
          </i>
          My <b style={{ color: "#8C00FF" }}>Work Experiences</b>
        </h1>
      </div>

      <div className={classes.container}>
        <div className={classes.officeElement}>
          <div className={classes.officeImage}>
            <img src={picsart} />
          </div>
          <div className={classes.officeName}>
            {" "}
            <b style={{ color: "#8C00FF" }}>Picsart</b>
          </div>
          <div className={classes.officeName}>
            <b>Software Engineer</b>
          </div>
          <div className={classes.officeName}>2023 August - 2024 January</div>
        </div>
        <div className={classes.officeElement} style={{ gap: "8px" }}>
          <div className={classes.officeImage}>
            <img src={codeRepubliCLab} />
          </div>
          <div className={classes.officeName}>
            {" "}
            <b style={{ color: "#8C00FF" }}>Code Republic Lab</b>
          </div>
          <div className={classes.officeName}>
            <b>Software Engineer Intern</b>
          </div>
          <div className={classes.officeName}>2023 March - 2023 July</div>
        </div>
        <div className={classes.officeElement}>
          <div className={classes.officeImage}>
            <img src={ucom} />
          </div>
          <div className={classes.officeName}>
            <b style={{ color: "#8C00FF" }}>Ucom LLC</b>
          </div>
          <div className={classes.officeName}>
            <b>Technical Support Specialist</b>
          </div>
          <div className={classes.officeName}>2020 July - 2022 October</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
