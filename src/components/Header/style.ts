import {createUseStyles} from 'react-jss'

const useStyles=createUseStyles({
    header: {
        textAlign: 'right',
        backgroundColor: '#333',
        padding: '25px',
        position: 'fixed', 
        width: '95.4%',     
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
        
      },
      navbar: {
        justifyContent: 'space-between',
      },
      navbarLink: {
        color: 'white',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '1rem',
      },
})

export default useStyles;