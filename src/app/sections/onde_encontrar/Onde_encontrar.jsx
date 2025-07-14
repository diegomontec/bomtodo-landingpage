import Button from "@/app/components/button/Button";

const Onde_encontrar = () => {
  return (
    <section className="flex flex-col bg-bg-azul text-bg-creme relative">
      <div className="w-full flex flex-col gap-16 justify-start items-center px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-2xl sm:text-3xl md:text-2xl font-descricao text-left md:text-center">
            A linha Inspiratto está disponível nas principais redes da Paraíba e
            do Rio Grande do Norte.
          </p>

          <p className="text-2xl sm:text-3xl md:text-2xl  font-descricao text-left md:text-center">
            Encontre o freezer exclusivo no setor de resfriados dos
            supermercados parceiros.
          </p>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-4 md:gap-8 md:justify-left justify-center items-start md:items-center">
          <Button>Paraíba</Button>
          <Button>R. G. do Norte</Button>
        </div>
      </div>
    </section>
  );
};

export default Onde_encontrar;
