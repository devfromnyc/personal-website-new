import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TextParagraph from "./components/TextParagraph";
import ProgressBarGrid from "./components/ProgressBarGrid";
import ServicesGrid from "./components/ServicesGrid";
import MasonryImages from "./components/MasonryImages";
import FlipImages from "./components/FlipImages";
import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
