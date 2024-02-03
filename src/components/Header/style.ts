import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    textAlign: "right",
    backgroundColor: "#8C00FF",
    padding: "25px",
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "96.46%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  navbar: {
    justifyContent: "space-between",
  },
  navbarLink: {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  logo:{
    textAlign: "left",
    marginLeft: "10%",
    color: "white",
    fontSize: "1.9rem",
  fontWeight: "800",
  textDecoration: "none",
  }
});

export default useStyles;
