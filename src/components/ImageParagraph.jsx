import React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { perspective, fadeIn } from "../hooks/AnimationOptions";

const ImageTextParagraph = ({
  header,
  paragraphText,
  mainImage,
  direction,
  mobileDirection,
}) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: `${mobileDirection}`, md: `${direction}` },
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        width: "100%",
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, sm: 2, md: 10 },
      }}
    >
      <Box
        sx={{ width: { xs: "95%", md: "60%", lg: "50%" }, maxWidth: "600px" }}
      >
        <motion.div
          className="perspective"
          ref={ref}
          variants={perspective}
          initial="hidden"
          animate={control}
        >
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="services-img"
          />
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", lg: "flex-start" },
          flexDirection: "column",
          color: "#000",
          textAlign: { xs: "center", md: "left" },
          margin: { xs: 2, md: 4, lg: 12 },
        }}
      >
        <motion.div
          className="slide-in"
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={control}
        >
          <Typography
            variant="h3"
            sx={{
              marginTop: { xs: 2, md: 0 },
              fontSize: { xs: "30px", md: "3rem" },
            }}
          >
            {header}
          </Typography>
          <Typography
            sx={{ maxWidth: { xs: "600px", md: "400px", lg: "500px" }, mt: 2 }}
          >
            {paragraphText}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ImageTextParagraph;
