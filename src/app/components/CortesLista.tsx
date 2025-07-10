"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <main
      className="mt-16 flex flex-wrap justify-center gap-12"
      aria-label="Lista de cortes disponíveis"
    >
      {cortes.map(({ id, imagem, alt, titulo, descricao }) => (
        <figure
          key={id}
          className="relative w-64 h-40 rounded-lg overflow-hidden group shadow-md"
        >
          <img
            src={imagem}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 256px"
          />
          <figcaption className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
            <strong className="block text-lg font-titulo">{titulo}</strong>
            <span className="text-sm font-descricao">{descricao}</span>
          </figcaption>
        </figure>
      ))}
    </main>
  );
}
