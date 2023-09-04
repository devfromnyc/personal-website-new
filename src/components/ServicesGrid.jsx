import React from "react";
import ServicesCard from "./ServicesCard";
import { Box, Grid, Typography, Divider } from "@mui/material";

const ServicesGrid = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        textAlign: "center",
        py: 12,
      }}>
      <Typography variant="h2">Services</Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
      <Grid component="ul" container spacing={2}>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard />
        </Grid>
        <Grid
          component="li"
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
