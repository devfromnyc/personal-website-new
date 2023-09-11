import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TextParagraph from "./components/TextParagraph";
import ProgressBarGrid from "./components/ProgressBarGrid";
import ServicesGrid from "./components/ServicesGrid";
import FlipImages from "./components/FlipImages";
import Pricing from "./components/Pricing";
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
          header="About Me"
          sectionId="About"
          renderDivider
        />
        <ProgressBarGrid />
        <ServicesGrid />
        <Pricing />
        <FlipImages />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
