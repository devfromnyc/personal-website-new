import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const ProgressBarGrid = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexGrow: 1,
      }}>
      <Grid
        component="ul"
        container
        spacing={2}
        sx={{ width: { xs: "auto", md: "70%" } }}>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography fontWeight="600">HTML</Typography>
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
          <Typography fontWeight="600">CSS</Typography>
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
          <Typography fontWeight="600">Javascript</Typography>
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
          <Typography fontWeight="600">Nodejs</Typography>
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
          <Typography fontWeight="600">React</Typography>
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
          <Typography fontWeight="600">Material UI</Typography>
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
          <Typography fontWeight="600">MERN Stack</Typography>
          <ProgressBar maxValue={90} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgressBarGrid;
