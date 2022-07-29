import React from "react";
import "../styles/relatos.scss";

export function Relatos() {
  return (
    <>
      <section className="relatos">
        <p className="relatos-title">RELATOS</p>
        <p className="relatos-subtitle">Depoimentos dos usuários</p>
        <p className="relatos-desc">
          Sinta um pouco da experiência de como é utilizar essa plataforma
          incrível que já ajudou milhares de pessoas em seus objetivos
        </p>
        <div className="arrows">
          {" "}
          <div className="relatos-circle" id="relatos-circle-left"></div>
          <div className="relatos-circle" id="relatos-circle-right"></div>
          <img id="relatos-arrow-left" src="/left.png" />
          <img id="relatos-arrow-right" src="/right.png" />
        </div>
        <div className="dep-normal" id="dep-left"></div>
        <div className="dep-centro"></div>
        <div className="dep-normal" id="dep-right"></div>
      </section>
    </>
  );
}
