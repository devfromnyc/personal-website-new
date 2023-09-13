import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const TextParagraph = ({
  variant,
  textAlignment,
  renderDivider,
  header,
  sectionId,
}) => {
  return (
    <Box
      component="section"
      id={sectionId}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        py: 12,
        backgroundColor: "rgb(54,57,62)",
      }}>
      <Typography
        variant={variant}
        sx={{ textAlign: `${textAlignment}`, fontWeight: "700" }}>
        {header}
      </Typography>
      {renderDivider && (
        <Divider
          variant="middle"
          sx={{ mt: 2, width: "25%", borderColor: "#fff" }}
        />
      )}
      <Typography
        sx={{
          marginTop: 5,
          maxWidth: "700px",
          fontSize: "20px",
          textAlign: `${textAlignment}`,
        }}>
        I'm a web developer based out of New York City with 6+ years of
        experience in the field. My mission is to provide a professional web
        development experience to propel your business or personal aspirations.
        I possess a variety of skills including modern technologies like MERN
        stack, React.js, Material UI, & More!
      </Typography>
    </Box>
  );
};

export default TextParagraph;
