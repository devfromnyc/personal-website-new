import * as React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Pricing = () => {
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
        Pricing
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
    </Box>
  );
};

export default Pricing;
