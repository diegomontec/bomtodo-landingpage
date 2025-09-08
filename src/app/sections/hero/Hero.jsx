"use client";

import React from "react";
import Button from "@/app/components/button/Button";

const Hero = () => {
  const scrollToRecipes = () => {
    document.getElementById("receitas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen">
      <img
        src="/assets/receitas/asa-airfryer-blue-cheese copy.jpg"
        alt="Asa de frango preparada na airfryer com molho blue cheese"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)]" />

      <div className="relative flex items-center justify-center md:justify-start h-full text-white p-6 sm:p-10 md:p-28">
        <header className="flex flex-col gap-6 md:gap-12 justify-center items-center md:items-start text-center md:text-left w-full max-w-3xl">
          <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-8 md:gap-16 mb-2">
            <div className="w-64">
              <img
                src="/assets/seloQualidade.png"
                alt="Selo de qualidade Inspiratto"
                className="w-full h-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl leading-tight">
              <span className="block font-extralight">A INSPIRAÇÃO QUE</span>
              <span className="block font-titulo">TRANSFORMA RECEITAS</span>
            </h1>
          </div>

          <Button onClick={scrollToRecipes}>Você, o chef da casa!</Button>
        </header>
      </div>
    </section>
  );
};

export default Hero;
