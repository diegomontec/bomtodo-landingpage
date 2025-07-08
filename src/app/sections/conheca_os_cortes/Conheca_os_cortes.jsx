const Conheca_os_cortes = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 md:pt-26 gap-20 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold" >Cortes especiais para pratos inesquecíveis.</h1>
        <p className="text-xl" >São 11 cortes selecionados para quem deseja qualidade e versatilidade no dia a dia.
          <br />Embalagens práticas, frescor garantido e cortes que valorizam seu tempo e seu talento na
          cozinha.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 p-8 md:p-14 bg-gray-50 rounded-lg">
          <img 
          src="assets/imagem1-filé.png" alt=""
          className="w-60 h-70 rounded-lg object-cover mb-2"
          />
          <img
          src="assets/imagem2-sobrecoxa.png" alt="" 
          className="w-60 h-70 rounded-lg object-cover mb-2"
          />
          <img 
          src="assets/imagem3-tulipa.png" alt="" 
          className="w-60 h-70 rounded-lg object-cover mb-2"
          />
      </div>
    </div>
  )
}

export default Conheca_os_cortes;