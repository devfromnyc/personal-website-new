import React from "react";
import ServicesCard from "./ServicesCard";
import { Box, Grid } from "@mui/material";
import ImageParagraph from "./ImageParagraph";

const ServicesGrid = ({
  header,
  paragraphText,
  mainImage,
  direction,
  mobileDirection,
  icons,
}) => {
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
        pb: 12,
      }}
    >
      <ImageParagraph
        header={header}
        paragraphText={paragraphText}
        mainImage={mainImage}
        direction={direction}
        mobileDirection={mobileDirection}
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
          sm={6}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingLeft: "0px !important",
          }}
        >
          <ServicesCard
            header={icons[0].alt}
            icon={icons[0].src}
            alt={icons[0].alt}
            innerText={icons[0].innerText}
          />
        </Grid>
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
            paddingLeft: "0px !important",
          }}
        >
          <ServicesCard
            header={icons[1].alt}
            icon={icons[1].src}
            alt={icons[1].alt}
            innerText={icons[1].innerText}
          />
        </Grid>
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
            paddingLeft: "0px !important",
          }}
        >
          <ServicesCard
            header={icons[2].alt}
            icon={icons[2].src}
            alt={icons[2].alt}
            innerText={icons[2].innerText}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
