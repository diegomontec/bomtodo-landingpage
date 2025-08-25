const ConceitoDaLinha = () => {
  return (
    <section
      id="conceito"
      className="relative border-y-4 border-[#EFBF04]"
      style={{
        backgroundImage: "url('assets/INSPIRATTO copiar_FUNDO.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 py-16 sm:px-8 md:px-16 lg:px-24 gap-12">
        
        <div className="bg-bg-azul/70 md:p-12 p-10 flex flex-col rounded-xl border text-bg-creme w-full lg:w-1/2">
          <div className="flex flex-col gap-8 text-2xl sm:text-3xl font-descricao leading-relaxed">
            <p>
              Inspiratto nasceu do desejo de levar até a mesa da família
              nordestina cortes especiais de frango com qualidade, frescor e
              sofisticação.
            </p>
            <p>
              Mais do que uma linha de produtos, é um convite à inspiração
              diária: transformar o comum em extraordinário, com receitas
              criativas e saborosas — preparadas com ingredientes que despertam
              o melhor da gastronomia dentro de casa.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-1/2 text-center">
          <img 
            src="./assets/chef.png" 
            alt="Chef Tarcísio Marinho" 
            className="max-w-xs lg:max-w-sm mx-auto"
          />
          <p className="text-bg-creme px-6 py-4 bg-bg-azul/80 rounded-lg text-2xl sm:text-3xl lg:text-4xl font-descricao">
            Linha assinada pelo chef <strong>Tarcísio Marinho</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConceitoDaLinha;
