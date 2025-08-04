const Footer = () => {
  return (
    <footer className="bg-bg-creme text-bg-azul px-6 py-6 sm:px-8 sm:py-7 md:px-16 md:py-8 lg:px-24 lg:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
        <div className="flex flex-row items-center gap-8">
          <img className="w-32 h-full" src="/assets/seloQualidade.png" alt="" />
          <h1 className="text-2xl sm:text-3xl font-titulo text-left">
            Alta gastronomia no seu dia a dia!
          </h1>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3 font-descricao text-left">
            <a href="/sobre">Sobre a Linha</a>
            <a href="/receitas">Receitas</a>
          </div>
          <div className="flex flex-col gap-3 font-descricao text-left">
            <a href="/cortes">Cortes</a>
            <a href="#">Fale Conosco</a>
          </div>

          <div className="flex flex-col gap-3 font-descricao text-left">
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
