const Footer = () => {
  return (
    <footer className="bg-bg-creme text-bg-azul px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
        <h1 className="text-2xl sm:text-3xl font-titulo text-left">
          Alta gastronomia no seu dia a dia!
        </h1>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3 font-descricao text-left">
            <a href="#">Sobre a Linha</a>
            <a href="#">Receitas</a>
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
