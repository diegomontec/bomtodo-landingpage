import Button from "@/app/components/button/Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full ">
      <img
        src="/assets/BOM TODO - CHEF - SELO.jpg"
        alt="Fundo hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex items-center justify-center h-full text-white text-center">
        <div className="flex gap-8 flex-col justify-center items-center">
          <div className="text-5xl mb-2">
            <p className="font-extralight">A INSPIRAÇÃO QUE</p>
            <p className="font-titulo">TRANSFORMA RECEITAS</p>
          </div>
          <Button href="#contato">Você, o chef da casa!</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
