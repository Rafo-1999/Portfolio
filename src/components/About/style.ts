import {createUseStyles} from "react-jss"

const useStyles=createUseStyles({
    content:{
        display: "flex",
        flexDirection: "column"
    },
    title:{
        left: "50%"
    },
    image:{
        height: "15rem"
    }
})

export default useStyles;