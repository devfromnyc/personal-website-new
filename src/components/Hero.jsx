import React from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";

const Hero = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80";
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      component="section"
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
          zIndex: "-1",
        }}
      />
      <Typography
        variant="h1"
        color="#fff"
        textAlign="center"
        sx={{ fontWeight: 700 }}>
        Hello! I'm James
      </Typography>
      <Typography color="#fff" textAlign="center">
        Bringing a different approach to modern ecommerce and web development
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        sx={{ mt: 4 }}>
        <Button variant="contained" sx={{ mr: 4 }}>
          About Me
        </Button>
        <Button variant="contained">Portfolio</Button>
      </Box>
    </Box>
  );
};

export default Hero;
