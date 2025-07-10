'use client';

import Carousel from '@/app/components/carrossel/Carousel';

const Carrossel_de_receitas = () => {
  return (
    <section id="contato" className="bg-gray-50 rounded-lg px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28">
      <div className="flex flex-col items-center justify-center text-center gap-12">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-gray-900">
            Gourmet em casa, sem complicação!
          </h1>
          <p className="text-xl sm:text-2xl font-descricao text-gray-700">
            Criadas pelo Chef Tarcísio com exclusividade para a linha Inspiratto.
          </p>
        </div>

        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Carrossel_de_receitas;
