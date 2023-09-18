import React from "react";
import { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { fadeIn } from "../hooks/AnimationOptions";

const ServicesCard = ({ header, icon, innerText }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (!animated) {
      if (inView) {
        control.start("visible");
        setAnimated(true);
      } else {
        control.start("hidden");
        setAnimated(false);
      }
    }
  }, [control, inView]);
  return (
    <Box sx={{ minWidth: 275 }}>
      <motion.div
        className="slide-left"
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={control}
      >
        <Card
          variant="outlined"
          sx={{
            border: "none",
            borderRadius: 0,
            py: 4,
            transition: "all 0.4s ease 0s",
            ":hover": {
              backgroundColor: "rgb(133, 105, 65)",
              color: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <img src={icon} alt="Coding Icon" className="icon-img" />
            <Typography
              sx={{ fontSize: 22, mb: 2 }}
              variant="h3"
              fontWeight="bold"
              gutterBottom
            >
              {header}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 14, maxWidth: "300px" }}
            >
              {innerText}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ServicesCard;
