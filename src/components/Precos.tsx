import React from "react";
import "../styles/precos.scss";

export function Precos() {
  return (
    <>
      <section className="precos">
        <p className="title">ESTUDE COM A GENTE</p>
        <p className="subtitle">Preços e opções</p>
        <div className="retangulo" id="ret-bronze">
          <p className="ret-title" id="ret-title-bronze">
            Plano Bronze
          </p>
          <img className="ret-img" id="ret-img-bronze" src="/bcontract.png" />
          <p className="ret-price" id="ret-price-bronze">
            <b>R$</b> 19,90
          </p>
          <p className="ret-desc" id="ret-desc-bronze">
            O plano mais comum, com todo conteúdo básico da plataforma por um
            preço justo.
          </p>
          <div className="ret-square" id="ret-square-bronze">
            <p className="ret-square-text" id="ret-square-text-bronze">
              ASSINAR
            </p>
          </div>
        </div>
        <div className="retangulo" id="ret-silver">
          <p className="ret-title" id="ret-title-silver">
            Plano Prata
          </p>
          <img className="ret-img" id="ret-img-silver" src="/scontract.png" />
          <p className="ret-price" id="ret-price-silver">
            <b>R$</b> 29,90
          </p>
          <p className="ret-desc" id="ret-desc-silver">
            Um plano com mais benefícios, com todo conteúdo básico e vantagens
            plus da plataforma por um preço justo.
          </p>
          <div className="ret-square" id="ret-square-silver">
            <p className="ret-square-text" id="ret-square-text-silver">
              ASSINAR
            </p>
          </div>
        </div>
        <div className="retangulo" id="ret-gold">
          <div className="faixa-azul">
            <p className="faixa-azul-text">OPÇÃO MAIS VENDIDA</p>
          </div>
          <p className="ret-title" id="ret-title-gold">
            Plano Ouro
          </p>
          <img className="ret-img" id="ret-img-gold" src="/gcontract.png" />
          <p className="ret-price" id="ret-price-gold">
            <b>R$</b> 49,90
          </p>
          <p className="ret-desc" id="ret-desc-gold">
            O plano de luxo da plataforma, com acesso ilimitado em todos nossos
            recursos, aqui você é rei!
          </p>
          <div className="ret-square" id="ret-square-gold">
            <p className="ret-square-text" id="ret-square-text-gold">
              ASSINAR
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
