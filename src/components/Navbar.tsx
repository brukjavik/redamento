import React from "react";
import "../styles/navbar.scss";

export function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="blue-rectangle"></div>
        <p className="website-title">Redamento</p>
        <p className="bt nav-bt-1">Como Funciona</p>
        <p className="bt nav-bt-2">Preço</p>
        <p className="bt nav-bt-3">Depoimentos</p>
        <p className="nav-dash">|</p>
        <p className="bt nav-bt-4">Login</p>
        <div className="button-assinar"></div>
        <p className="bt nav-bt-5">ASSINAR</p>
      </section>
    </>
  );
}
