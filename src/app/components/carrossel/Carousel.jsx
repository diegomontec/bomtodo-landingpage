import { Swiper } from 'swiper'; // Importando Swiper
import 'swiper/css';

const data = [
  { id: '1', image: '/assets/imagem1-filé.png' },
  { id: '2', image: '/assets/imagem2-sobrecoxa.png' },
  { id: '3', image: '/assets/imagem3-tulipa.png' },
];

const Carousel = () => {
  return (
<<<<<<< HEAD
    <Swiper
      slidesPerView={3} // Exibe 3 itens por vez
      spaceBetween={10} // Espaço entre os slides
      // navigation
      // pagination={{ clickable: true }}
    >
      {data.map((item, idx) => (
        <div key={idx} className="swiper-slide"> {/* Elemento dentro do Swiper */}
          <img
            src={item.image}
            alt={`Imagem ${item.id}`}
            className="w-170 h-180 rounded-lg object-cover"
          />
        </div>
      ))}
    </Swiper>
  );
};

export default Carousel;
=======
    <div>Carousel</div>
  )
}
export default Carousel
>>>>>>> 405cd8bd37c34944a9689805aeae256fe9066036
