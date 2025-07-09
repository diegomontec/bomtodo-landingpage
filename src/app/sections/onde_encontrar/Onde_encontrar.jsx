import Button from '@/app/components/button/Button';

const Onde_encontrar = () => {
  return (
    <div>
      <div className='p-8 md:p-20 justify-center items-center flex flex-col gap-20 text-center bg-gray-50 rounded-lg'>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          A linha Inspiratto está disponível nas principais redes da Paraíba e do Rio Grande do Norte.
          Encontre o freezer exclusivo no setor de resfriados dos supermercados parceiros.
        </h1>
        <Button>Quero encontrar um ponto de venda</Button>
      </div>
    </div>
  )
}
export default Onde_encontrar
