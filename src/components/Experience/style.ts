import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "35px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    flexWrap: "wrap",
    gap: "1.8rem",
    marginLeft: "10%",
    marginRight: "10%",
    alignItems: "center",
    justifyContent: "center",
   
    
  },
  officeElement: {
    marginBottom: "15px",

    padding: "10px",
    borderRadius: "1rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    // background: "rgba(0, 0, 22, 0.9)",
    transition: "0.2s",
    display: "flex",
    flexDirection: "column",
    
  },
  officeImage: {
    width: "100%",
    // height: "19vh",
    // alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  officeName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginTop: "1rem",
    fontSize: " 30px",
  },
});

export default useStyles;
