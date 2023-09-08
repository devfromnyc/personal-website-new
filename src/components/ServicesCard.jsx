import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import codingLogo from "../assets/coding-icon.gif";

const ServicesCard = () => {
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
          },
        }}>
        <CardContent
          sx={{
            textAlign: "center",
          }}>
          <img src={codingLogo} alt="Coding Icon" className="icon-img" />
          <Typography
            sx={{ fontSize: 22, mb: 2 }}
            variant="h3"
            fontWeight="bold"
            gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 14, maxWidth: "300px" }}>
            Fruit saw for brought fish forth had ave is man a that their Two he
            is dominion evening their Fruit saw for brought fish forth
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServicesCard;
