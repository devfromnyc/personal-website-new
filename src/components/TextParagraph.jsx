import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const TextParagraph = ({
  variant,
  textAlignment,
  textContent,
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
        className="slide-up"
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
        {textContent}
      </Typography>
    </Box>
  );
};

export default TextParagraph;
