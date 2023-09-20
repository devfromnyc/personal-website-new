import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fadeUp } from "../hooks/AnimationOptions";

const TextParagraph = ({
  variant,
  textAlignment,
  textContent,
  renderDivider,
  header,
  sectionId,
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
      component="section"
      id={sectionId}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "rgb(133,105,65)",
      }}
    >
      <motion.div
        className="slide-up"
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={control}
      >
        <Typography
          variant={variant}
          className="slide-up"
          sx={{
            textAlign: `${textAlignment}`,
            fontWeight: "700",
            fontSize: { xs: "2.75rem", md: "3.75rem" },
          }}
        >
          {header}
        </Typography>
        {renderDivider && (
          <Divider
            variant="middle"
            sx={{ mt: 2, ml: 0, width: "100%", borderColor: "#fff" }}
          />
        )}
      </motion.div>
      <motion.div
        className="slide-up"
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={control}
      >
        <Typography
          sx={{
            marginTop: 5,
            maxWidth: "700px",
            fontSize: { xs: "16px", md: "20px" },
            textAlign: `${textAlignment}`,
          }}
        >
          {textContent}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default TextParagraph;
