import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const TextParagraph = ({ variant, textAlignment, renderDivider, header }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        py: 12,
      }}>
      <Typography
        variant={variant}
        sx={{ textAlign: `${textAlignment}`, fontWeight: "700" }}>
        {header}
      </Typography>
      {renderDivider && (
        <Divider
          variant="middle"
          sx={{ mt: 2, width: "25%", borderColor: "#000" }}
        />
      )}
      <Typography
        sx={{ marginTop: 5, maxWidth: "600px", textAlign: `${textAlignment}` }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </Typography>
    </Box>
  );
};

export default TextParagraph;
