import React from "react";
import PricingCard from "./PricingCard";
import { Box, Grid, Typography, Divider } from "@mui/material";

const Pricing = () => {
  return (
    <Box
      component="section"
      id="Pricing"
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
        Pricing
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, mb: 10, width: "25%", borderColor: "#000" }}
      />
      <Grid
        component="ul"
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          paddingInlineStart: { xs: "20px !important", md: "0px !important" },
        }}>
        <Grid
          component="li"
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingLeft: "0px !important",
          }}>
          <PricingCard
            header="Basic"
            price="300"
            listItems={["Hello", "World", "Random", "Lorem Ipsum"]}
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
          <PricingCard
            header="Standard"
            price="400"
            listItems={["Hello", "World", "Random", "Lorem Ipsum"]}
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
          <PricingCard
            header="Advanced"
            price="500"
            listItems={["Hello", "World", "Random", "Lorem Ipsum"]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
