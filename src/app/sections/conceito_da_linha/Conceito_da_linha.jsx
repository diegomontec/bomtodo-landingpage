const ConceitoDaLinha = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 rounded-lg relative">
      <div className="w-full md:w-1/2 flex flex-col gap-18 justify-start px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28">
        <h1 className="text-4xl sm:text-5xl font-black font-titulo text-gray-900 text-left">
          Uma linha criada para quem transforma a cozinha em palco da criatividade.
        </h1>

        <div className="flex flex-col gap-6 text-2xl sm:text-3xl md:text-2xl font-descricao leading-relaxed text-gray-700 text-left">
          <p>
            Inspiratto nasceu do desejo de levar até a mesa da família
            nordestina cortes especiais de frango com qualidade, frescor e
            sofisticação.
          </p>
          <p>
            Mais do que uma linha de produtos, é um convite à inspiração diária:
            transformar o comum em extraordinário, com receitas criativas e
            saborosas — preparadas com ingredientes que despertam o melhor da
            gastronomia dentro de casa.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <img
          src="/assets/fotoChef.png"
          alt="Conceito da linha"
          className="w-full h-auto object-cover rounded-2xl shadow-md"
        />
        <img
          src="/assets/seloQualidade.png"
          alt="Selo de Qualidade"
          className="absolute bottom-4 right-4 w-32 sm:w-28 md:w-32 lg:w-64 h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ConceitoDaLinha;
