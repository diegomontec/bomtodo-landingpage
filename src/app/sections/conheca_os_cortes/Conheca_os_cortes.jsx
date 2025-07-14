'use client';

import { Suspense, lazy } from 'react';

const CortesLista = lazy(() => import('@/app/components/CortesLista'));

const Conheca_os_cortes = () => {
  return (
    <section
      className="bg-bg-azul text-bg-creme px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-24 lg:py-32"
      aria-labelledby="titulo-cortes"
    >
      <header className="flex flex-col items-start md:items-center gap-12 max-w-6xl mx-auto">
        <h1
          id="titulo-cortes"
          className="text-4xl sm:text-5xl font-black font-titulo text-start md:text-center"
        >
          Cortes especiais para pratos inesquecíveis.
        </h1>

        <p className="text-2xl sm:text-3xl md:text-2xl font-descricao leading-relaxed text-start md:text-center">
          São 11 cortes selecionados para quem deseja qualidade e versatilidade no dia a dia. Embalagens práticas, frescor garantido e cortes que valorizam seu tempo e seu talento na cozinha.
        </p>
      </header>

      <div className="mt-32">
        <Suspense
          fallback={
            <p className="text-center text-bg-azul">Carregando cortes...</p>
          }
        >
          <CortesLista />
        </Suspense>
      </div>
    </section>
  );
};

export default Conheca_os_cortes;
