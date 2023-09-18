import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TextParagraph from "./components/TextParagraph";
import ProgressBarGrid from "./components/ProgressBarGrid";
import ServicesContainer from "./components/ServicesContainer";
import FlipImages from "./components/FlipImages";
import Footer from "./components/Footer";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Ysabeau SC, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <Box component="main" sx={{ color: "#fff" }}>
        <TextParagraph
          variant="h2"
          textAlignment="center"
          textContent="I'm a web developer based out of New York City with 6+ years of
          experience in building websites. My mission is to provide a curated web
          development experience to propel your business or personal aspirations.
          I possess a variety of skills including modern technologies like MERN
          stack, React.js, Material UI, & More!"
          header="About Me"
          sectionId="About"
          renderDivider
        />
        <ProgressBarGrid />
        <ServicesContainer />
        <FlipImages />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
