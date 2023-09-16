import React from "react";
import { Box, Typography } from "@mui/material";

const ImageTextParagraph = ({
  header,
  paragraphText,
  mainImage,
  direction,
  mobileDirection,
}) => {
  const margin = { xs: 0, md: 4, lg: 12 };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: `${mobileDirection}`, md: `${direction}` },
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        width: "100%",
        pt: 10,
        pb: 10,
      }}
    >
      <Box
        sx={{ width: { xs: "85%", md: "60%", lg: "50%" }, maxWidth: "600px" }}
      >
        <img src={mainImage.src} alt={mainImage.alt} className="services-img" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", lg: "flex-start" },
          flexDirection: "column",
          color: "#000",
          textAlign: "left",
          margin: margin,
        }}
      >
        <Typography variant="h3">{header}</Typography>
        <Typography
          sx={{ maxWidth: { xs: "600px", md: "400px", lg: "500px" }, mt: 2 }}
        >
          {paragraphText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageTextParagraph;
