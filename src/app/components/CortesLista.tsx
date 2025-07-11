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
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        // pagination={{ clickable: true }}
        className="pb-10"
      >
        {cortes.map(({ id, imagem, alt, titulo, descricao }) => (
          <SwiperSlide key={id}>
          <div className="group relative w-full h-80 rounded-xl gap-5 overflow-hidden shadow-md bg-white border border-gray-200 transition-transform duration-300">
              <Image
                src={imagem}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4 text-white">
                <h3 className="font-bold text-lg font-titulo">{titulo}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 text-center p-4 text-sm font-descricao">
                {descricao}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
