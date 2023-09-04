import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TextParagraph from "./components/TextParagraph";
import ProgressBarGrid from "./components/ProgressBarGrid";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <TextParagraph variant="h2" textAlignment="center" renderDivider />
        <ProgressBarGrid />
      </main>
    </>
  );
}

export default App;
