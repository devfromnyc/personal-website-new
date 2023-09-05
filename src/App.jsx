import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TextParagraph from "./components/TextParagraph";
import ProgressBarGrid from "./components/ProgressBarGrid";
import ServicesGrid from "./components/ServicesGrid";
import MasonryImages from "./components/MasonryImages";
import FlipImages from "./components/FlipImages";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import "./Fonts.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Oxygen", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <main>
        <TextParagraph
          variant="h2"
          textAlignment="center"
          header="About Me"
          renderDivider
        />
        <ProgressBarGrid />
        <ServicesGrid />
        <MasonryImages />
        <FlipImages />
      </main>
    </ThemeProvider>
  );
}

export default App;
