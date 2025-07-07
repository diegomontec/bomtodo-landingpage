const ConceitoDaLinha = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-50 p-8 md:p-10 rounded-lg relative">
      {/* Texto */}
      <div className="md:w-1/2 flex flex-col gap-8 space-y-4 justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Uma linha criada para quem transforma a cozinha em palco da criatividade.
        </h1>
        <div>
          <p className="text-lg md:text-2xl leading-relaxed">
            Inspiratto nasceu do desejo de levar até a mesa da família nordestina cortes especiais de frango com qualidade, frescor e sofisticação.
            <br /><br />
            Mais do que uma linha de produtos, é um convite à inspiração diária: transformar o comum em extraordinário, com receitas criativas e saborosas — preparadas com ingredientes que despertam o melhor da gastronomia dentro de casa.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 relative flex items-center justify-center">
        <img
          src="/assets/fotoChef.png"
          alt="Conceito da linha"
          className="w-full h-auto object-cover rounded-md shadow max-w-[500px] md:max-w-[600px]"
        />
        <img
          src="/assets/seloQualidade.png"
          alt="Selo de Qualidade"
          className="absolute bottom-12 right-6 w-66 h-50 object-contain"
        />
      </div>
    </section>
  );
};

export default ConceitoDaLinha;

