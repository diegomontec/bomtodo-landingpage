import { Suspense, lazy } from "react";

const CortesLista = lazy(() => import("@/app/components/CortesLista"));

const Conheca_os_cortes = () => {
  return (
    <section
      className="bg-gray-50 rounded-lg px-4 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20"
      aria-labelledby="titulo-cortes"
    >
      <header className="flex flex-col gap-18 justify-center items-center">
        <div className="w-full px-2 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black font-titulo text-gray-900 text-center">
            Cortes especiais para pratos inesquecíveis.
          </h1>
        </div>

        <div className="flex justify-center items-center w-full flex-col gap-6 text-2xl sm:text-3xl md:text-2xl font-descricao leading-relaxed max-w-5xl text-gray-700 px-2 sm:px-6">
          <p className="text-left md:text-center lg:text-center">
            São 11 cortes selecionados para quem deseja qualidade e
            versatilidade no dia a dia. Embalagens práticas, frescor garantido e
            cortes que valorizam seu tempo e seu talento na cozinha.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <p className="text-center mt-12 text-gray-500">
            Carregando cortes...
          </p>
        }
      >
        <CortesLista />
      </Suspense>
    </section>
  );
};

export default Conheca_os_cortes;
