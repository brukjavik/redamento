import React from "react";
import "../styles/intro.scss";

export function Intro() {
  return (
    <>
      <section className="intro">
        <p className="motivational-quote">Domine já a Redação do ENEM!</p>
        <img
          src="/61177fab5cb3460fd6112691_How-Long-Is-an-Essay--Basic-Academic-Recommendations 1.png"
          className="image"
        />
        <p className="description">
          <p>
            Somos atualmente a
            <b>&nbsp;maior plataforma de correção on-line do</b>
            <br />
            <b>Brasil.</b>
          </p>
          <br></br>
          • Agilidade nas correções
          <br></br>
          • Corretores capacitados
          <br></br>
          • Planos para os mais diferentes estilos e propósitos
          <br></br>
          <br></br>
        </p>
        <br></br>
        <div className="rectangle"></div>
        <p className="text">ASSINAR AGORA</p>
      </section>
    </>
  );
}
