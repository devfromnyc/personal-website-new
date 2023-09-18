import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { fadeUp, fadeIn } from "../hooks/AnimationOptions";

// Pallettes
// https://www.color-hex.com/color-palette/7395
// https://www.color-hex.com/color-palette/8630

const Hero = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

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
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      component="section"
      id="Home"
      sx={{ height: "100vh", width: "100%" }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRFepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: "-1",
        }}
      />
      <motion.div
        className="slide-up"
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={control}
      >
        <Typography
          variant="h1"
          color="#fff"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "50px",
              sm: "85px",
              md: "calc(12vw - 10px)",
              lg: "calc(9vw - 10px)",
            },
            fontWeight: 700,
            textShadow: "2px 2px black",
          }}
        >
          Hello! I'm James
        </Typography>
      </motion.div>
      <motion.div
        className="slide-up"
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={control}
      >
        <Typography
          color="#fff"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "18px",
              sm: "24px",
              lg: "28px",
              xl: "32px",
            },
            textShadow: "1px 1px black",
            maxWidth: { xs: "300px", sm: "600px", md: "700px", lg: "780px" },
            lineHeight: 1.1,
            marginTop: { xs: 2, lg: 0 },
          }}
        >
          Or you can call me Jimmy, whichever you prefer! Need a website built
          or work on a Shopify Store? Let's work together!
        </Typography>
      </motion.div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          mt: 4,
        }}
      >
        <motion.div
          className="slide-in"
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={control}
        >
          <Button
            variant="contained"
            sx={{
              mr: { xs: "0px", sm: 4 },
              mb: { xs: 4, sm: 0 },
              backgroundColor: "transparent",
              border: "2px solid #fff",
              textShadow: "1px 1px black",
              px: 8,
              py: 2,
              ":hover": {
                backgroundColor: "rgb(133, 105, 65)",
                borderColor: "rgb(133, 105, 65)",
              },
              ":focus:": {
                backgroundColor: "rgb(133, 105, 65)",
                borderColor: "rgb(133, 105, 65)",
              },
            }}
          >
            About Me
          </Button>
        </motion.div>
        <motion.div
          className="slide-in"
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={control}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              border: "2px solid #fff",
              px: 8,
              py: 2,
              textShadow: "1px 1px black",
              ":hover": {
                backgroundColor: "rgb(133, 105, 65)",
                borderColor: "rgb(133, 105, 65)",
              },
            }}
          >
            Portfolio
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
