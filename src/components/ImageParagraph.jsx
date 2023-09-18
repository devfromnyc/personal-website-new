import React from "react";
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
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: `${mobileDirection}`, md: `${direction}` },
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        width: "100%",
        pt: 10,
        pb: 10,
      }}
    >
      <Box
        sx={{ width: { xs: "85%", md: "60%", lg: "50%" }, maxWidth: "600px" }}
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
          textAlign: "left",
          margin: { xs: 0, md: 4, lg: 12 },
        }}
      >
        <motion.div
          className="slide-in"
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={control}
        >
          <Typography variant="h3">{header}</Typography>
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
