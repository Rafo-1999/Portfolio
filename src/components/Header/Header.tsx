import useStyles from "./style";
import { Link } from 'react-scroll';


const Header = () => {
    const classes = useStyles();
  
    return (
      <header className={classes.header}>
        <nav className={classes.navbar}>
        <Link className={classes.navbarLink} to="home" smooth={true} duration={1000}>Home</Link>
        <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>About</Link>
        <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>Skills</Link>
        <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>Education</Link>
        <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>Work Experience</Link>
        <Link className={classes.navbarLink} to="about" smooth={true} duration={1000}>Contact</Link>
         
        </nav>
      </header>
    );
  }
  
  export default Header;

//   <nav className={classes.navbar}>
//   <Link to="/" className={classes.navbarLink}>Home</Link>
//   <Link to="/about" className={classes.navbarLink} onClick={handleClick}>About</Link>
//   <Link to="/skills" className={classes.navbarLink}>Skills</Link>
//   <Link to="/education" className={classes.navbarLink}>Education</Link>
//   <Link to="/work-experience" className={classes.navbarLink}>Work Experience</Link>
//   <Link to="/contact" className={classes.navbarLink}>Contact</Link>
// </nav>