'use client'

import Carousel from '@/app/components/carrossel/Carousel';

const Carrossel_de_receitas = () => {
  return (
    <div id="contato">
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 md:pt-26 gap-8 bg-gray-50 rounded-lg">
        <div className='flex flex-col gap-8'>
          <h1 className="text-5xl font-sans font-bold">Gourmet em casa, sem complicação!</h1>
          <p className="text-2xl">Criadas pelo Chef Tarcísio com exclusividade para a linha Inspiratto.</p>
        </div>
        <div >
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Carrossel_de_receitas;
