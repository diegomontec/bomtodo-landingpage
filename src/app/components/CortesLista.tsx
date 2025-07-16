"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type Corte = {
  id: number;
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
};

export default function CortesLista() {
  const [cortes, setCortes] = useState<Corte[] | null>(null);

  useEffect(() => {
    fetch("/data/cortes.json")
      .then((res) => res.json())
      .then(setCortes)
      .catch(() => setCortes([]));
  }, []);

  if (!cortes) {
    return <p className="text-center text-gray-500">Carregando cortes...</p>;
  }

  return (
    <div className="mt-16 w-full px-4" aria-label="Galeria de cortes">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={6}
        autoplay={{ delay: 3000 }}
        // slidesPerView={3.2}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        
        breakpoints={{
          0: { slidesPerView: 3.2 },
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: 4.2 },
        }}
        className="pb-10"
        style={{
          paddingBottom: '30px',
          // @ts-ignore
          '--swiper-pagination-color': '#eee1c6',
        }}
      >
        {cortes.map(({ id, imagem, alt, titulo, descricao }) => (
        <SwiperSlide key={id}>
          <div className="group relative w-full h-80 rounded-xl overflow-hidden shadow-md border border-bg-creme transition-transform duration-500">
            
            <Image
              src={imagem}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-bg-creme">
              <h3 className="font-bold text-lg font-titulo">{titulo}</h3>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-bg-azul/80 text-bg-creme opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4 text-md font-bold font-descricao z-30">
              {descricao}
            </div>
          </div>
        </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}