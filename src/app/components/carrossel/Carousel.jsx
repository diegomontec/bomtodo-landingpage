import { Swiper, SwiperSlide } from 'swiper/react'; // Importando Swiper e SwiperSlide
import 'swiper/swiper-bundle.css'; // Importando os estilos do Swiper

const data = [
  { id: '1', image: '/assets/imagem1-filé.png' },
  { id: '2', image: '/assets/imagem2-sobrecoxa.png' },
  { id: '3', image: '/assets/imagem3-tulipa.png' },
  { id: '4', image: '/assets/imagem1-filé.png' },
  { id: '5', image: '/assets/imagem2-sobrecoxa.png' },
  { id: '6', image: '/assets/imagem3-tulipa.png' },
  { id: '7', image: '/assets/imagem1-filé.png' },
  { id: '8', image: '/assets/imagem2-sobrecoxa.png' },
  { id: '9', image: '/assets/imagem3-tulipa.png' }
];

const Carousel = () => {
  return (
    <div className='w-full flex flex-row max-w-4xl p-4'>
      <Swiper
        slidesPerView={3}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`Imagem ${item.id}`}
              className="shadow-lg w-full h-90 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
