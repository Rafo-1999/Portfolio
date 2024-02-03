import useStyles from "./style";
import { Link } from 'react-scroll';


const Header = () => {
    const classes = useStyles();
  
    return (
      <header className={classes.header}>
        <Link className={classes.logo} to="home" smooth={true} duration={1000} style={{cursor: "pointer"}}>
          Rafo
        </Link>
        <nav className={classes.navbar}>
          <Link className={classes.navbarLink} to="home" smooth={true} duration={1000}>
            Home
          </Link>
          <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link className={classes.navbarLink} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
          <Link className={classes.navbarLink} to="education" smooth={true} duration={1000}>
            Education
          </Link>
          <Link className={classes.navbarLink} to="experience" smooth={true} duration={1000}>
            Work Experiences
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Header;

