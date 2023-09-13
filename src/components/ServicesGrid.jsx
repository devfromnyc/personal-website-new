import React from "react";
import ServicesCard from "./ServicesCard";
import { Box, Grid, Typography, Divider } from "@mui/material";
import shopifyIcon from "../assets/money-bag.gif";
import developmentIcon from "../assets/html.gif";
import freelanceIcon from "../assets/success.gif";

const ServicesGrid = () => {
  return (
    <Box
      component="section"
      id="Services"
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
          paddingInlineStart: { xs: "20px !important", md: "0px !important" },
        }}>
        <Grid
          component="li"
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard
            header="Web Development"
            icon={developmentIcon}
            innerText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Fusce id velit ut tortor."
            }
          />
        </Grid>
        <Grid
          component="li"
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard
            header="Shopify Development"
            icon={shopifyIcon}
            innerText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Fusce id velit ut tortor."
            }
          />
        </Grid>
        <Grid
          component="li"
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0px !important",
          }}>
          <ServicesCard
            header="Freelancing/Contract"
            icon={freelanceIcon}
            innerText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Fusce id velit ut tortor."
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
