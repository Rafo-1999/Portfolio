import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "35px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    borderRadius: "0.5rem",
    boxShadow: "0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
    marginTop: "2rem",
    marginLeft: "10%",
    // overflow: "hidden",
    transition: "0.3s",
    background: "rgb(252, 252, 252)",
  },
  university: {
    // width: "100%",
    height: "15rem",
    padding: "1rem",
    
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto"
  },
});

export default useStyles;
