'use client';

import Carousel from '@/app/components/carrossel/Carousel';

const Carrossel_de_receitas = () => {
  return (  
    <section
      id="contato"
      className="bg-gray-100 rounded-lg px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-24 lg:py-32"
    >
      <div className="flex flex-col items-center md:items-center justify-center w-full text-left md:text-center gap-18">
        <div className="flex flex-col gap-12 w-full max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-gray-900 text-left md:text-center">
            Gourmet em casa, sem complicação!
          </h1>
          <p className="text-2xl sm:text-3xl md:text-2xl font-descricao text-gray-700 text-left md:text-center">
            Criadas pelo Chef Tarcísio com exclusividade para a linha Inspiratto.
          </p>
        </div>

        <div className="w-full h-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Carrossel_de_receitas;
