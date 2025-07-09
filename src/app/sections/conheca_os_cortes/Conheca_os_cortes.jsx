const Conheca_os_cortes = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 md:pt-26 gap-20 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold">
          Cortes especiais para pratos inesquecíveis.
        </h1>
        <p className="text-xl">
          São 11 cortes selecionados para quem deseja qualidade e versatilidade no dia a dia.
          <br />
          Embalagens práticas, frescor garantido e cortes que valorizam seu tempo e seu talento na
          cozinha.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 p-8 md:p-14 bg-gray-50 rounded-lg">
        {/* FILÉ DE PEITO – CUBO */}
        <div className="relative w-60 h-[70px] rounded-lg overflow-hidden group">
          <img
            src="assets/imagem1-filé.png"
            alt="Filé de peito em cubos"
            className="w-60 h-[70px] object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong className="block text-base">Filé de peito</strong>
            <span className="text-sm">Ideal para strogonoff e espetinhos</span>
          </div>
        </div>

        {/* COXA COM SOBRECOXA – SEM PELE */}
        <div className="relative w-60 h-[70px] rounded-lg overflow-hidden group">
          <img
            src="assets/imagem2-sobrecoxa.png"
            alt="Coxa com sobrecoxa sem pele"
            className="w-60 h-[70px] object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong className="block text-base">Coxa com sobrecoxa</strong>
            <span className="text-sm">Perfeito para assados com ervas</span>
          </div>
        </div>

        {/* TULIPA DA COXINHA */}
        <div className="relative w-60 h-[70px] rounded-lg overflow-hidden group">
          <img
            src="assets/imagem3-tulipa.png"
            alt="Tulipa da coxinha"
            className="w-60 h-[70px] object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <strong className="block text-base">Tulipa da coxinha</strong>
            <span className="text-sm">Petisco crocante e suculento</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conheca_os_cortes;
