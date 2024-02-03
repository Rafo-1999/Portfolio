import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    // position: "relative"
  },
  centerText: {
    position: "absolute",
    top: "30%",
    left: "15%",
    color: "white",
    fontSize: "20px",
  },
  centerAboutButton: {
    position: "absolute",
    top: "50%",
    left: "15%",
    color: "white",
  },
  centerSocialIcons: {
    position: "absolute",
    top: "55%",
    left: "13%",
    color: "white",
    gap: "10px",
  },
  personImageDiv: {
    position: "absolute",
    top: "25%",
    right: "1%",
  },
  personImage: {
    borderRadius: "50%",
  },
  aboutButton: {
    backgroundColor: "#8C00FF",
    color: "white",
    textDecoration: "none",
    padding: "20px",
    borderRadius: "10%",
    fontSize: "20px",
    cursor: "pointer",
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
    marginRight: "20px",
    // gap: "50px",
    borderRadius: "100%",
  },
});

export default useStyles;
