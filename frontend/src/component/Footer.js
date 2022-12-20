import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
  } from "@material-ui/core";
  import { useHistory } from "react-router-dom";
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
 
const Footer=()=>{
  const classes = useStyles();
  let history = useHistory();
  
    return (
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
           &copy; HANDIMANPro
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  

  

export default Footer;