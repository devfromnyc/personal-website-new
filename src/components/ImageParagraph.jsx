import React from "react";
import { Box, Typography } from "@mui/material";

const ImageTextParagraph = ({
  header,
  paragraphText,
  mainImage,
  direction,
}) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: `${direction}` },
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        pt: 10,
        pb: 10,
      }}
    >
      <Box
        sx={{ width: { xs: "90%", md: "80%", lg: "50%" }, maxWidth: "600px" }}
      >
        <img src={mainImage.src} alt={mainImage.alt} className="services-img" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          color: "#000",
          textAlign: "left",
          ml: { xs: 0, md: 4, lg: 12 },
        }}
      >
        <Typography variant="h3">{header}</Typography>
        <Typography
          sx={{ maxWidth: { xs: "300px", md: "400px", lg: "500px" }, mt: 2 }}
        >
          {paragraphText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageTextParagraph;
