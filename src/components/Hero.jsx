import * as React from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";

// Images

// Pallettes
// https://www.color-hex.com/color-palette/993
// https://www.color-hex.com/color-palette/28549
// https://www.color-hex.com/color-palette/64550
const Hero = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1554078140-01f553ad4d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      component="section"
      id="Home"
      sx={{ height: "100vh", width: "100%" }}>
      <Box
        component="div"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRFepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: "-1",
        }}
      />
      <Typography
        variant="h1"
        color="#fff"
        textAlign="center"
        sx={{
          fontSize: "140px",
          fontWeight: 700,
          textShadow: "2px 2px black",
        }}>
        Hello! I'm James
      </Typography>
      <Typography
        color="#fff"
        textAlign="center"
        sx={{
          fontSize: "28px",
          textShadow: "1px 1px black",
          maxWidth: "800px",
          lineHeight: 1.1,
        }}>
        Bringing the power of modern web development right to you! With a
        variety of flexible services and packages available, I'm your one-stop
        solution that will satisfy your budget and project requirements!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          mt: 4,
        }}>
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
              backgroundColor: "rgb(51,115,166)",
              borderColor: "rgb(51,115,166)",
            },
            ":focus:": {
              backgroundColor: "rgb(51,115,166)",
              borderColor: "rgb(51,115,166)",
            },
          }}>
          About Me
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "transparent",
            border: "2px solid #fff",
            px: 8,
            py: 2,
            textShadow: "1px 1px black",
            ":hover": {
              backgroundColor: "rgb(51,115,166)",
              borderColor: "rgb(51,115,166)",
            },
          }}>
          Portfolio
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
