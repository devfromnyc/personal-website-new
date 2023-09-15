import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { perspective } from "../hooks/AnimationOptions";

const PricingCard = ({ header, listItems, price }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "300px",
        height: "100%",
      }}
      className="pricing-card"
    >
      <motion.div
        className="slide-perspective"
        ref={ref}
        variants={perspective}
        initial="hidden"
        animate={control}
      >
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            py: 4,
            height: "350px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            transition: "all 0.4s ease 0s",
            ":hover": {
              backgroundColor: "rgb(16,125,172)",
              color: "#fff",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 32, mb: 0 }}
              variant="h3"
              fontWeight="bold"
              gutterBottom
            >
              {header}
            </Typography>
            <Typography
              sx={{ fontSize: "50px", mb: 2, fontWeight: "700", lineHeight: 1 }}
            >
              <sup>$</sup>
              {price}
              <sup>*</sup>
            </Typography>
            <Divider
              variant="middle"
              sx={{
                margin: "0 auto",
                width: "25%",
                borderColor: "#000",
                mb: 4,
              }}
            />
            <Box component="ul" sx={{ paddingInlineStart: "0px !important" }}>
              {listItems.map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    listStyle: "none",
                    mb: 2
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: "inline-block",
                      mr: 2,
                      border: "1.5px solid #000",
                      borderRadius: "40px",
                      maxHeight: "25px",
                      padding: "0 6px",
                    }}
                  >
                    &#10003;
                  </Typography>
                  <Typography component="span" textAlign="left">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default PricingCard;
