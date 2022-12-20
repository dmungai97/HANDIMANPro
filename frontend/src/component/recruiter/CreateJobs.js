import { useContext, useEffect, useState } from "react";
import React from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
  duration,
} from "@material-ui/core";
import axios from "axios";
import ChipInput from "material-ui-chip-input";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";
import MyJobs from "./MyJobs";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
}));




function CreateJobs(props) {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    title: "",
    maxApplicants: 10,
    maxPositions: 3,
    deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substr(0, 16),
    skillsets: [],
    jobType: "Part-Time",
    duration: 0,
    salary: 0,
  });






  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setJobDetails({
          title: "",
          maxApplicants: 10,
          maxPositions: 3,
          deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
            .toISOString()
            .substr(0, 16),
          skillsets: [],
          jobType: "Full Time",
          duration: 0,
          salary: 0,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };





  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh", width: "" }}
      >
        <Grid item>
          <Typography variant="h2"  style={{color:"black" ,marginBottom:"10px" ,background: "#fff179",opacity:".8"}}>Add Service</Typography>
        </Grid>
        <Grid item container xs direction="column" justify="center">
          <Grid item>
            <Paper
              style={{
                padding: "20px",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    label="Title"
                    value={jobDetails.title}
                    onChange={(event) => handleInput("title", event.target.value)}
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item>
                  <ChipInput
                    className={classes.inputBox}
                    label="Skills"
                    variant="outlined"
                    helperText="Press enter to add skills"
                    value={jobDetails.skillsets}
                    onAdd={(chip) => setJobDetails({
                      ...jobDetails,
                      skillsets: [...jobDetails.skillsets, chip],
                    })}
                    onDelete={(chip, index) => {
                      let skillsets = jobDetails.skillsets;
                      skillsets.splice(index, 1);
                      setJobDetails({
                        ...jobDetails,
                        skillsets: skillsets,
                      });
                    } }
                    fullWidth />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Service Type"
                    variant="outlined"
                    value={jobDetails.jobType}
                    onChange={(event) => {
                      handleInput("jobType", event.target.value);
                    } }
                    fullWidth
                  >
                    
                    <MenuItem value="Freelance">Freelance</MenuItem>

                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Duration"
                    variant="outlined"
                    value={jobDetails.duration}
                    onChange={(event) => {
                      handleInput("duration", event.target.value);
                    } }
                    fullWidth
                  >
                    <MenuItem value={0}>Flexible</MenuItem>
                    <MenuItem value={1}>1 Week</MenuItem>
                    <MenuItem value={2}>2 Weeks</MenuItem>
                    <MenuItem value={3}>3 Weeks</MenuItem>
                    <MenuItem value={4}>4 Weeks</MenuItem>
                    <MenuItem value={5}>5 Weeks</MenuItem>
                    <MenuItem value={6}>6 Weeks</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Rate Charge"
                    type="number"
                    variant="outlined"
                    value={jobDetails.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    } }
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth />
                </Grid>
                <Grid item>
                  <TextField
                    label="Deadline"
                    type="datetime-local"
                    value={jobDetails.deadline}
                    onChange={(event) => {
                      handleInput("deadline", event.target.value);
                    } }
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item>
                  <TextField
                    label="Maximum Of Those Who Can Apply"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    } }
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth />
                </Grid>
                <Grid item>
                  <TextField
                    label="Required Positions"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxPositions}
                    onChange={(event) => {
                      handleInput("maxPositions", event.target.value);
                    } }
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", marginTop: "30px" }}
                onClick={() => handleUpdate()}
              >
                Add Service
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateJobs;
