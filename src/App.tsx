import MainContent from "./MainContent/MainContent";
import useStyles from "./style";



function App() {

  const classes=useStyles();

  return (
    <div className={classes.root} > 
     <MainContent/>
    </div>

  );
}

export default App;
