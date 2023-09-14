import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TextParagraph = ({
  variant,
  textAlignment,
  textContent,
  renderDivider,
  header,
  sectionId,
}) => {
  const elementOptions = {
    visible: {
      opacity: 1,
      scale: 1,
      transform: "translateX(0px)",
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, scale: 0, transform: "translateY(100px)" },
  };
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
        backgroundColor: "rgb(54,57,62)",
      }}
    >
      <motion.div
        className="slide-up"
        ref={ref}
        variants={elementOptions}
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
      </motion.div>
      {renderDivider && (
        <Divider
          variant="middle"
          sx={{ mt: 2, width: "25%", borderColor: "#fff" }}
        />
      )}
      <motion.div
        className="slide-up"
        ref={ref}
        variants={elementOptions}
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
