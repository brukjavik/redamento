import React from "react";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Beneficios } from "./components/Beneficios";
import { Precos } from "./components/Precos";
import { Relatos } from "./components/Relatos";
import { Juntese } from "./components/Juntese";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Beneficios />
      <Precos />
      <Relatos />
      <Juntese />
      <Footer />
    </>
  );
}

export default App;
