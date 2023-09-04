import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./App.css";
import TextParagraph from "./components/TextParagraph";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <TextParagraph variant="h2" textAlignment="center" renderDivider />
      </main>
    </>
  );
}

export default App;
