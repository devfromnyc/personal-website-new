import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const PricingCard = ({ header, listItems, price }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "300px" }} className="pricing-card">
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
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
          <Typography
            sx={{ fontSize: 22, mb: 2 }}
            variant="h3"
            fontWeight="bold"
            gutterBottom>
            {header}
            <Typography sx={{ fontSize: "40px", mb: 2 }}>{price}</Typography>
            <Divider
              variant="middle"
              sx={{
                margin: "0 auto",
                width: "25%",
                borderColor: "#000",
                mb: 6,
              }}
            />
          </Typography>
          <Box component="ul" sx={{ paddingInlineStart: "0px !important" }}>
            {listItems.map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  listStyle: "none",
                }}>
                <Typography
                  component="span"
                  sx={{ display: "inline-block", mr: 2 }}>
                  &#10003;
                </Typography>
                <Typography component="span">{item}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PricingCard;
