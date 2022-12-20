import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "50px", minHeight: "50vh" , backgroundImage:"url('./bg.png')"}}
    >
      <Grid item>
        <Typography variant="h1" style={{color:"white" ,marginBottom:"10px" ,background: "black",opacity:".9"}}>HANDIMANPro</Typography>
        <Typography variant="p" style={{ color:"#263238", fontSize:"20px" , fontWeight:"bold"}}>HANDIMANPro is a web application for connecting clients with available handyman service</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
