import React from "react";
import "../styles/footer.scss";

export function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-blue-background">
          <p className="footer-title">Redamento</p>
          <img className="footer-img" id="footer-img-1" src="/facebook.png" />
          <img className="footer-img" id="footer-img-2" src="/instagram.png" />
          <img className="footer-img" id="footer-img-3" src="/whatsapp.png" />
          <p className="copyright">
            © 2022 Bruno Costa. Todos os direitos reservados.
          </p>
          <p className="contato">Contato</p>
          <p className="sobre">Sobre</p>
          <p className="depoimentos">Depoimentos</p>
        </div>
      </section>
    </>
  );
}
