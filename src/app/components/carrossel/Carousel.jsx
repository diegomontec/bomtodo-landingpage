import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
const data = [
  { id: "1", image: "/assets/imagem1-file.png" },
  { id: "2", image: "/assets/imagem2-sobrecoxa.png" },
  { id: "3", image: "/assets/imagem3-tulipa.png" },
  { id: "4", image: "/assets/imagem1-file.png" },
  { id: "5", image: "/assets/imagem2-sobrecoxa.png" },
  { id: "6", image: "/assets/imagem3-tulipa.png" },
  { id: "7", image: "/assets/imagem1-file.png" },
  { id: "8", image: "/assets/imagem2-sobrecoxa.png" },
  { id: "9", image: "/assets/imagem3-tulipa.png" },
  { id: "10", image: "/assets/imagem1-file.png" },
  { id: "11", image: "/assets/imagem2-sobrecoxa.png" },
];

const Carousel = () => {
  return (
    <div className="w-full flex flex-row p-4 gap-5">
      <Swiper slidesPerView={3}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {item.image && (
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={`Imagem ${item.id}`}
                  width={500}
                  height={200}
                  className="shadow-lg object-cover rounded-xl"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
