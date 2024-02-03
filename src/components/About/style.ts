import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "35px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    gap: "100px",
    marginLeft: "15%",
    marginRight: "15%",
  },
  image: {
    height: "30rem",
    marginRight: "20px",
    borderRadius: "5%",
  },
  aboutMeText: {
    // textAlign: "center"
  },
  resumeButton: {
    backgroundColor: "#8C00FF",
    // backgroundColor: "#092924",
    padding: "10px",
    borderRadius: "8%",
    boxShadow: "50px",
    color: "white",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
  },
});

export default useStyles;
