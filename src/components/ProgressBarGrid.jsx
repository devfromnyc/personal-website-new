import React from "react";
import { Box, Grid, ListItem, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const ProgressBarGrid = () => {
  return (
    <Box component="section" sx={{ flexGrow: 1 }}>
      <Grid component="ul" container spacing={2}>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>HTML</Typography>
          <ProgressBar maxValue={60} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>CSS</Typography>
          <ProgressBar maxValue={70} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>Javascript</Typography>
          <ProgressBar maxValue={80} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>Nodejs</Typography>
          <ProgressBar maxValue={90} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>React</Typography>
          <ProgressBar maxValue={90} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>Material UI</Typography>
          <ProgressBar maxValue={90} />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography>MERN Stack</Typography>
          <ProgressBar maxValue={90} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgressBarGrid;
