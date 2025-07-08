const Carrossel_de_receitas = () => {
  return (
    <div id="contato" >
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 md:pt-26 gap-8 bg-gray-50 rounded-lg">
        <h1 className="text-5xl font-bold" >Gourmet em casa, sem complicação!</h1>
        <p className="text-2xl" >Criadas pelo Chef Tarcísio com exclusividade para a linha Inspiratto.</p>
      </div>
      <div className="Carrossel flex flex-col md:flex-row items-center justify-center p-8 md:p-14 bg-gray-50 rounded-lg">
          <img 
          src="assets/imagem1-filé.png" alt=""
          className="w-170 h-180 rounded-lg object-cover"
          />
      </div>
    </div>
  )
}

export default Carrossel_de_receitas