import { Suspense, lazy } from "react";

const CortesLista = lazy(() => import("@/app/components/CortesLista"));

const Conheca_os_cortes = () => {
  return (
    <section
      className="bg-gray-50 rounded-lg px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28"
      aria-labelledby="titulo-cortes"
    >
      <header className="flex flex-col items-center justify-center text-center gap-8 max-w-3xl mx-auto">
        <h1
          id="titulo-cortes"
          className="text-4xl sm:text-5xl font-bold font-titulo text-gray-900"
        >
          Cortes especiais para pratos inesquecíveis.
        </h1>
        <div className="text-lg sm:text-xl font-descricao text-gray-700 leading-relaxed space-y-4">
          <p>
            São 11 cortes selecionados para quem deseja qualidade e
            versatilidade no dia a dia.
          </p>
          <p>
            Embalagens práticas, frescor garantido e cortes que valorizam seu
            tempo e seu talento na cozinha.
          </p>
        </div>
      </header>

      <Suspense fallback={<p className="text-center mt-12 text-gray-500">Carregando cortes...</p>}>
        <CortesLista />
      </Suspense>
    </section>
  );
};

export default Conheca_os_cortes;
