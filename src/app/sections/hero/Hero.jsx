'use client'

import React from "react";
import Button from "@/app/components/button/Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full" id="hero">
      <img
        src="assets/Whisk_gif_thlyzixmmm.gif"
        alt="Animação do Wh"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_70%)]"></div>
      {/* <img
        src="assets/Image_fx (5).jpg"
        alt="Animação do Wh"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <div className="relative flex items-center justify-center h-full text-white text-center">
        <div className="flex gap-8 flex-col justify-center items-center">
          <div className="text-5xl mb-2">
            <p className="font-extralight">A INSPIRAÇÃO QUE</p>
            <p className="font-titulo">TRANSFORMA RECEITAS</p>
          </div>
          <Button
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
