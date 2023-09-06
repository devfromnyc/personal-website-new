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
        backgroundColor: "#fff",
        color: "#000",
        py: 12,
      }}>
      <Typography variant="h2" sx={{ fontWeight: "700" }}>
        Services
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
      <Grid
        component="ul"
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "auto", lg: "70%" },
        }}>
        <Grid
          component="li"
          item
          xs={12}
          sm={6}
          md={5}
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
          xs={12}
          sm={6}
          md={5}
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
          xs={12}
          sm={6}
          md={5}
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
          xs={12}
          sm={6}
          md={5}
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
