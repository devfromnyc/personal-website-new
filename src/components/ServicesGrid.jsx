import React from "react";
import ServicesCard from "./ServicesCard";
import { Box, Grid, Typography, Divider } from "@mui/material";
import ImageParagraph from "./ImageParagraph";
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
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "700" }}>
        What I Do
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
      <ImageParagraph
        header="Web Development"
        paragraphText="I'm a web developer based out of New York City with 6+ years of
          experience in the field. My mission is to provide a professional web
          development experience to propel your business or personal aspirations.
          I possess a variety of skills including modern technologies like MERN
          stack, React.js, Material UI, & More!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row"
      />
      <Grid
        component="ul"
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          width: { xs: "auto", lg: "70%" },
          paddingInlineStart: { xs: "20px !important", md: "0px !important" },
        }}
      >
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
          }}
        >
          <ServicesCard
            header="Web Development"
            icon={developmentIcon}
            innerText={
              "A general service that covers personal websites and web projects that do not fall under the category of e-commerce. This can be anything from a portfolio website to a custom utility web application!"
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
          }}
        >
          <ServicesCard
            header="Shopify Development"
            icon={shopifyIcon}
            innerText={
              "This service covers any and all things Shopify! Whether you want a new online store or a theme extension, I've got you covered! I can also build re-usable components and custom landing pages for your store!"
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
          }}
        >
          <ServicesCard
            header="Freelancing/Contract"
            icon={freelanceIcon}
            innerText={
              "I'm available for hire as a freelancer or on a contract basis to handle your Shopify and/or general web development needs!"
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
