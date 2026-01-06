'use client';

import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-bg-creme text-bg-azul px-6 py-6 sm:px-8 sm:py-7 md:px-16 md:py-8 lg:px-24 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
        <div className="flex flex-row items-center gap-8">
          <img className="w-32 h-full" src="https://cdn.yellowkite.cloud/public/inspiratto/assets/seloQualidade.png" alt="" />
          <h1 className="text-2xl sm:text-3xl font-titulo text-left bg-clip-text text-bg-azul">
            Alta gastronomia no seu dia a dia!
          </h1>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3 font-descricao text-left">
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection("conceito")}
            >
              Sobre a Linha
            </span>
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection("receitas")}
            >
              Receitas
            </span>
          </div>

          <div className="flex flex-col gap-3 font-descricao text-left">
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection("cortes")}
            >
              Cortes
            </span>
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection("encontrar")}
            >
              Onde encontrar
            </span>
          </div>

          <div className="flex flex-col gap-3 font-descricao text-left">
            <span
              className="cursor-pointer"
              onClick={() => openLink("https://www.instagram.com/sigabomtodo/")}
            >
              Instagram
            </span>
            <span
              className="cursor-pointer"
              onClick={() => openLink("https://www.youtube.com/@sigabomtodo")}
            >
              Youtube
            </span>
            <span
              className="cursor-pointer"
              onClick={() => openLink("https://www.tiktok.com/@sigabomtodo")}
            >
              Tiktok
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
