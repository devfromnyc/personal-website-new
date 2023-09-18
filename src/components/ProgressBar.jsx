import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeLeft } from "../hooks/AnimationOptions";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: "100%",
          mr: 1,
          backgroundColor: "#fff",
          "& span.MuiLinearProgress-root": { backgroundColor: "#fff" },
          "& span.MuiLinearProgress-bar": {
            backgroundColor: "rgb(44,46,45)",
          },
        }}
      >
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const ProgressBar = ({ maxValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress === maxValue) return;
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 5 : prevProgress + 5
      );
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

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
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <motion.div
        className="slide-left"
        ref={ref}
        variants={fadeLeft}
        initial="hidden"
        animate={control}
      >
        <LinearProgressWithLabel value={progress} sx={{ height: "8px" }} />
      </motion.div>
    </Box>
  );
};

export default ProgressBar;
