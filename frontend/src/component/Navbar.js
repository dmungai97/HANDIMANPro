import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FaceIcon from "@material-ui/icons/Face";
import BuildIcon from "@material-ui/icons/Build";

import isAuth, { userType } from "../lib/isAuth";

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

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <ThemeProvider>
    <AppBar position="fixed"  style={{background:"linear-gradient(to right, #a72c2c,#244d36,#3d254b)"}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
         <CopyrightIcon/> HANDIMANPro
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
            <FaceIcon/>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Service
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
               My Services
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Handyman
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <BuildIcon/>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Requests
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
