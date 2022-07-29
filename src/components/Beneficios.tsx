import React from "react";
import "../styles/beneficios.scss";

export function Beneficios() {
  return (
    <>
      <section className="beneficios">
        <p className="section-title">BENEFÍCIOS</p>
        <p className="section-subtitle">O que nosso time te proporciona</p>
        <p className="section-description">
          Nós organizamos nossa plataforma de uma maneira que potencializará seu
          crescimento e irá acelerar seus resultados.
        </p>
        <img className="section-img" id="img-1" src="/bar-chart.png" />
        <img className="section-img" id="img-2" src="/file.png" />
        <img className="section-img" id="img-3" src="/presentation.png" />
        <img className="section-img" id="img-4" src="/lightbulb.png" />
        <div className="elipse-azul" id="el-1"></div>
        <div className="elipse-azul" id="el-2"></div>
        <div className="elipse-azul" id="el-3"></div>
        <div className="elipse-azul" id="el-4"></div>
        <div className="img-title" id="title-1">
          Análise de desempenho
        </div>
        <div className="img-title" id="title-2">
          Explicações detalhadas
        </div>
        <div className="img-title" id="title-3">
          Treino com temas atuais
        </div>
        <div className="img-title" id="title-4">
          Dicas incríveis
        </div>
        <div className="img-desc" id="desc-1">
          Conforme você vai submetendo suas redações, vamos mostrar todo o seu
          crescimento durante o tempo e gerar prospecções para o futuro.
        </div>
        <div className="img-desc" id="desc-2">
          Nossos profissionais dão ênfase no aprendizado do aluno, dessa forma,
          buscamos sempre deixar tudo o mais esclarecido possível, para que não
          reste dúvidas.
        </div>
        <div className="img-desc" id="desc-3">
          Cansado de fazer redações sobre temas comuns? Aqui nós separamos temas
          bastante atuais que são relevantes em todos os âmbitos.
        </div>
        <div className="img-desc" id="desc-4">
          Você encontrará as melhores dicas à sua disposição, dessa forma, você
          terá todas as ferramentas para fazer arrasar no ENEM!
        </div>
      </section>
    </>
  );
}
