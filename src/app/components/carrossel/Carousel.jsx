'use client';

import Image from 'next/image';

const data = [
  { id: '1', image: '/assets/imagem1-file.png' },
  { id: '2', image: '/assets/imagem2-sobrecoxa.png' },
  { id: '3', image: '/assets/imagem3-tulipa.png' },
];

const Carousel = () => {
  return (
    <div className="w-full px-4 py-6 flex flex-col md:flex-row gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-full md:flex-1 h-[300px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={item.image}
            alt={`Imagem ${item.id}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
