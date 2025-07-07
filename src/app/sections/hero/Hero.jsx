import Button from '@/app/components/button/Button';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/assets/HeroImagem.png"
        alt="Fundo hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex items-center justify-center h-full text-white text-center">
        <div className='flex gap-8 flex-col' >
          <h1 className="text-4xl font-bold mb-4">A inspiração que transforma receitas</h1>
          <a href="#contato" className="inline-block">
            <Button>Você, o chef da casa!</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
