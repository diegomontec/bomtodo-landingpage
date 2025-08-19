"use client";

import React from "react";
import Button from "@/app/components/button/Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full" id="hero">
      <img
        src="assets/hero.png"
        alt="Animação do Wh"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_70%)]"></div>

      <div className="relative flex items-center justify-center md:justify-start h-full text-white p-6 sm:p-10 md:p-28">
        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center md:items-start text-center md:text-left w-full max-w-3xl">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-2 leading-tight">
            <p className="font-extralight">A INSPIRAÇÃO QUE</p>
            <p className="font-titulo">TRANSFORMA RECEITAS</p>
          </div>
          <Button
            className="mx-auto md:mx-0"
            onClick={() => {
              const section = document.getElementById("receitas");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Você, o chef da casa!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
