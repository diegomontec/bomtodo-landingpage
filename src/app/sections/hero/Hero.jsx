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
        src="/assets/Hero Inspiratto.png"
        alt="Asa de frango preparada na airfryer com molho blue cheese"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/assets/Hero mobile Inspiratto copy.png"
        alt="hero mobile"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />

      <div className="absolute inset-0 md:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)]" />

      <div className="relative flex items-center justify-center md:justify-start h-full text-white p-2 pb-12 sm:p-10 md:p-12">
      <div className="relative flex items-center pt-64 sm:pt-0 justify-center md:justify-start h-full text-white p-2 pb-12 sm:p-10 md:p-18">
        <header className="flex flex-col gap-6 md:gap-12 justify-center items-center md:items-start text-center md:text-left w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center md:items-start lg:max-w-xl md:justify-start gap-8 md:gap-16 mb-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight">
              <span className="block font-extralight">A INSPIRAÇÃO QUE</span>
              <span className="block font-titulo">TRANSFORMA RECEITAS</span>
            </h1>
          </div>

          <Button onClick={scrollToRecipes}>Você, o chef da casa!</Button>
        </header>
      </div>
      </div>
    </section>
  );
};

export default Hero;
