import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    height: "100vh",
    backgroundColor: "#8C00FF",
    padding: "30px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "55px",
    color: "white",
  },
  skillsContainer: {
    color: "#fff",
    borderRadius: "1rem",
    padding: "2rem",
    width: "90%",
    margin: "auto",
    marginTop: "2rem",
    backgroundColor: "#4A0078",
  },
  skillContainerRow: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    flexWrap: "wrap",
    gap: "1.8rem",
  },
  skillElement: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "1rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    background: "rgba(0, 0, 22, 0.9)",
    transition: "0.2s",
    display: "flex",
    flexDirection: "column",
  },
  skillElementInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginTop: "1rem",
    fontSize: " 30px",
  },
  skillImage: {
    width: "100%",
    height: "19vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

export default useStyles;
