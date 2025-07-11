'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  { id: '1', image: '/assets/imagem1-file.png', title: 'Frango Assado', description: 'Sabor inconfundível, direto do forno.' },
  { id: '2', image: '/assets/imagem2-sobrecoxa.png', title: 'Sobrecoxa Especial', description: 'Perfeita para seu almoço em família.' },
  { id: '3', image: '/assets/imagem3-tulipa.png', title: 'Tulipa Crocante', description: 'O petisco ideal para qualquer ocasião.' },
  { id: '4', image: '/assets/imagem1-file.png', title: 'Frango Assado', description: 'Sabor inconfundível, direto do forno.' },
  { id: '5', image: '/assets/imagem2-sobrecoxa.png', title: 'Sobrecoxa Especial', description: 'Perfeita para seu almoço em família.' },
  { id: '6', image: '/assets/imagem3-tulipa.png', title: 'Tulipa Crocante', description: 'O petisco ideal para qualquer ocasião.' },
];

const Carousel = () => {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[300px]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={item.image}
                alt={`Imagem ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4">{item.description}</p>
                <a href="https://www.youtube.com/watch?v=rC3qkJMBaQ8"><button className="bg-white cursor-pointer text-black px-5 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                  Assistir vídeo da receita
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
