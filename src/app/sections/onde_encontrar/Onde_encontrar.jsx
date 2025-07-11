import Button from '@/app/components/button/Button';

const Onde_encontrar = () => {
  return (
    <section className="flex flex-col bg-black rounded-lg relative">
      <div className="w-full flex flex-col gap-18 justify-start items-center px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-2xl font-black font-titulo text-gray-100 text-left md:text-center">
          A linha Inspiratto está disponível nas principais redes da Paraíba e do Rio Grande do Norte.
          <br />
          Encontre o freezer exclusivo no setor de resfriados dos supermercados parceiros.
        </h1>

        <Button>Quero encontrar um ponto de venda</Button>
      </div>
    </section>
  );
};

export default Onde_encontrar;
