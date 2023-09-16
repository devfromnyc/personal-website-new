import React from "react";
import ServicesCard from "./ServicesCard";
import { Box, Grid, Typography, Divider } from "@mui/material";
import ImageParagraph from "./ImageParagraph";
import shopifyIcon from "../assets/money-bag.gif";
import developmentIcon from "../assets/html.gif";
import freelanceIcon from "../assets/success.gif";

const ServicesGrid = ({ header, paragraphText, mainImage, direction }) => {
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
        header={header}
        paragraphText={paragraphText}
        mainImage={mainImage}
        direction={direction}
      />
      <Grid
        component="ul"
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
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
