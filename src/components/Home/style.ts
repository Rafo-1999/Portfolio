import {createUseStyles} from "react-jss"


const useStyles=createUseStyles({
    root:{
        // position: "relative"   

    },
    centerText:{
        position: "absolute",
        top: "30%",
        left: "15%",
        color: "white",

    },
    personImageDiv:{
        position: "absolute",
        top: "20%",
        right: "15%",
    },
    personImage:{
        borderRadius: "50%"
    },
    aboutButton:{
        backgroundColor: "#4B0082",
        color: "white",
        textDecoration: 'none',
        padding: "10px",
        borderRadius: "50px"        
    },
    socialIcons:{
        fontSize: "2rem",
        display: "inline-block",
        lineHeight: "44px",
        color: "#00d9ff",
        backgroundColor: "white",
        width: "44px",
        height: "44px",
        textAlign: "center",
        marginRight: "8px",
        borderRadius: "100%",
        
       

        
    }

})

export default useStyles;