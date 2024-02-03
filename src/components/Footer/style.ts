import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // background: "rgb(0, 1, 43)",
    backgroundColor: "#8C00FF",
    color: "white",
    fontSize: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  quickLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "20px",
    padding: "10px",
  },
  
  socialIcons: {
    fontSize: "2rem",
    display: "inline-block",
    lineHeight: "48px",
    color: "#8C00FF",
    backgroundColor: "white",
    width: "44px",
    height: "44px",
    textAlign: "center",
    marginRight: "10px",

    gap: "10px",
    borderRadius: "100%",
  },
});

export default useStyles;