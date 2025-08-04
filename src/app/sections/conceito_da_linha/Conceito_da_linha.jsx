const ConceitoDaLinha = () => {
  return (
    <section
      id="sobre"
      className="flex flex-col lg:flex-row md:flex-col bg-bg-creme text-bg-azul relative items-center"
    >
      {/* Bloco da esquerda */}
      <div className="w-full lg:w-1/2 flex flex-col gap-18 justify-start px-6 py-12 sm:px-8 sm:py-14 md:px-8 md:py-14 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-5x1 font-titulo text-left">
          Uma linha criada para quem transforma a cozinha em palco da
          criatividade.
        </h1>

        <div className="flex flex-col gap-6 text-2xl sm:text-3xl md:text-3xl font-descricao leading-relaxed text-left">
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

      <div className="w-full lg:w-1/2 flex flex-col items-center px-6 py-6 sm:px-8 sm:py-14 md:px-8 md:py-14 lg:px-24">
        <div className="w-full">
          <img
            src="/assets/chef.png"
            alt="Chef Tarcísio Marinho"
            className="w-full max-w-[500px] h-auto object-contain mx-auto"
          />
        </div>

        <p className="bg-bg-azul text-bg-creme w-full px-6 py-8 font-descricao text-2xl rounded-lg text-center mt-0">
          Linha assinada pelo chef <strong>Tarcísio Marinho</strong>
        </p>
      </div>
    </section>
  );
};

export default ConceitoDaLinha;
