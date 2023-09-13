import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const ServicesCard = ({ header, icon, innerText }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          borderRadius: 0,
          py: 4,
          transition: "all 0.4s ease 0s",
          ":hover": {
            backgroundColor: "rgb(51,115,166)",
            color: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          },
        }}>
        <CardContent
          sx={{
            textAlign: "center",
          }}>
          <img src={icon} alt="Coding Icon" className="icon-img" />
          <Typography
            sx={{ fontSize: 22, mb: 2 }}
            variant="h3"
            fontWeight="bold"
            gutterBottom>
            {header}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 14, maxWidth: "300px" }}>
            {innerText}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServicesCard;
