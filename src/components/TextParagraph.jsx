import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
      id={sectionId}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        py: 12,
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
          sx={{ textAlign: `${textAlignment}`, fontWeight: "700" }}
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
            fontSize: "20px",
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
