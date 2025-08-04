"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@/app/components/button/Button";
import receitas from "@/receitas.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const [selectedReceita, setSelectedReceita] = useState(null);

  const openModal = (receita) => {
    setSelectedReceita(receita);
  };

  const closeModal = () => {
    setSelectedReceita(null);
  };

  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={6}
        style={{
          paddingBottom: "30px",
          "--swiper-pagination-color": "#192648",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[300px]"
        breakpoints={{
          430: { slidesPerView: 1 },
          540: { slidesPerView: 2.2 },
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: 4.2 },
        }}
      >
        {receitas.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => openModal(item)}
              className="group relative w-full h-full rounded-xl gap-6 overflow-hidden shadow-md bg-bg-creme border-1 border-bg-azul transition-transform duration-500 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.titulo}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg-azul/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-2xl font-descricao mb-2">{item.titulo}</h2>
                <Button className="px-7 py-2">Ver Receita</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedReceita && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300"
          onClick={closeModal} // clicando fora fecha modal
        >
          <div
            className="bg-bg-creme shadow-2xl rounded-3xl p-8 w-full max-w-5xl max-h-[80vh] overflow-y-auto relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl transition-colors duration-200"
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-titulo text-left">
              {selectedReceita.titulo}
            </h2>

            {selectedReceita.video && (
              <div className="mb-6">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={selectedReceita.video.replace("watch?v=", "embed/")}
                    title={selectedReceita.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-left">
              <div>
                <h3 className="text-2xl font-medium mb-3 font-titulo">
                  Ingredientes
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  {selectedReceita.ingredientes.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3 font-titulo">
                  Modo de Preparo
                </h3>
                <ol className="list-decimal pl-6 space-y-2">
                  {selectedReceita.modoDePreparo.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
