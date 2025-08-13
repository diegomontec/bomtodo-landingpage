const ConceitoDaLinha = () => {
  return (
    <section
      id="conceito"
      className="relative flex flex-col items-start justify-center text-bg-creme min-h-screen border-y-4 border-[#EFBF04]"
      style={{
        backgroundImage: "url('assets/chefeIa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-16 sm:px-8 md:px-16 lg:px-24 text-left">
        <h1 className="text-4xl sm:text-5xl font-titulo mb-8">
          Uma linha criada para quem transforma a cozinha em palco da
          criatividade.
        </h1>

        <div className="flex flex-col gap-6 text-2xl sm:text-3xl font-descricao leading-relaxed">
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
        <br />
        <br />
        <br />

        <p className="mt-10 inline-block bg-bg-creme text-bg-azul px-8 py-4 rounded-lg text-2xl font-descricao">
          Linha assinada pelo chef <strong>Tarcísio Marinho</strong>
        </p>
      </div>
    </section>
  );
};

export default ConceitoDaLinha;
