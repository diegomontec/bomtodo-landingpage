import Button from "@/app/components/button/Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full ">
      <img
        src="/assets/Heroimg.jpg"
        alt="Fundo hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex items-center justify-center h-full text-white text-center">
        <div className="flex gap-8 flex-col justify-start">
          <h1 className="text-5xl mb-2 font-titulo">
            A INSPIRAÇÃO QUE TRANSFORMA RECEITAS
          </h1>
          <Button href="#contato">Você, o chef da casa!</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
