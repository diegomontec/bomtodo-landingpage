"use client";

import { useState } from "react";

const estados = [
  {
    estado: "Paraíba",
    textEstado: "na Paraíba",
    lojas: [
      {
        cidade: "João Pessoa",
        loja: "Mateus Supermercados",
        endereco: "R. João Virgínio Acioli",
        numero: "707",
        bairro: "Altiplano Cabo Branco",
        link: "https://maps.app.goo.gl/2mFjSgfdC2t3xGNz9",
      },
      {
        cidade: "João Pessoa",
        loja: "Super Atacado Bom Todo",
        cnpj: "",
        endereco: "Av. Sen. Ruy Carneiro",
        numero: "180",
        bairro: "Manaíra",
        link: "https://maps.app.goo.gl/isw2wy11qtCtQfqN6",
      },
      {
        cidade: "João Pessoa",
        loja: "Mateus Supermercados",
        endereco: "R. Profa. Luzia Simões Bartolini",
        numero: "55",
        bairro: "Aeroclube",
        link: "https://maps.app.goo.gl/4rEpGjP1W6KBEwLfA",
      },
      {
        cidade: "João Pessoa",
        loja: "Mateus Supermercados",
        endereco: "Av. Gov. Flávio Ribeiro Coutinho",
        numero: "615",
        bairro: "Manaíra",
        link: "https://maps.app.goo.gl/SA8c2HjAeG53oeqN7",
      },
      {
        cidade: "João Pessoa",
        loja: "Mateus Supermercados",
        endereco: "Av. Sen. Ruy Carneiro",
        numero: "320",
        bairro: "Manaíra",
        link: "https://maps.app.goo.gl/mMJmUzAXFCe7QZ8n7",
      },
    ],
  },
  {
    estado: "Rio Grande do Norte",
    textEstado: "no Rio Grande do Norte",
    lojas: [
      {
        cidade: "Natal",
        loja: "Nordestão Cidade Jardim",
        endereco: "R. Leôncio Etelvino de Medeiros",
        numero: "2877",
        bairro: "Capim Macio",
        link: "https://maps.app.goo.gl/MLfG5twEKjax3UkA6",
      },
      {
        cidade: "Natal",
        loja: "Nordestão",
        endereco: "Av. Sen. Salgado Filho",
        numero: "1656",
        bairro: "Lagoa Nova",
        link: "https://maps.app.goo.gl/PZsLYhwVBgba2iB79",
      },
      {
        cidade: "Natal",
        loja: "Nordestão",
        endereco: "Av. Prudente de Morais",
        numero: "1140",
        bairro: "Tirol",
        link: "https://maps.app.goo.gl/du7chUTDi736tH1b7",
      },

      {
        cidade: "Natal",
        loja: "Nordestão - Ponta Negra",
        endereco: "Av. Engenheiro Roberto Freire",
        numero: "2050",
        bairro: "Capim Macio",
        link: "https://maps.app.goo.gl/7aL46eHgyH2uHF5aA",
      },
      {
        cidade: "Natal",
        loja: "Rede Mais - Cidade da Esperança",
        endereco: "R. Conceição",
        numero: "01/03",
        bairro: "Cidade da Esperança",
        link: "https://maps.app.goo.gl/42uYnw9TAzynpAje6",
      },
      {
        cidade: "Natal",
        loja: "Favorito Supermercados - Ayrton Senna",
        endereco: "Av. Ayrton Senna",
        numero: "3215",
        bairro: "Neópolis",
        link: "https://maps.app.goo.gl/2Qbvi7NSqoZqmabd7",
      },
      {
        cidade: "Natal",
        loja: "Favorito Supermercados - Ponta Negra",
        endereco: "Av. Engenheiro Roberto Freire",
        numero: "1460",
        bairro: "Capim Macio",
        link: "https://maps.app.goo.gl/exnn8C8QozA5J7Wz9",
      },
      {
        cidade: "Parnamirim",
        loja: "Nordestão - Maria Lacerda",
        endereco: "Av. Maria Lacerda Montenegro",
        numero: "1400",
        bairro: "Nova Parnamirim",
        link: "https://maps.app.goo.gl/GJfzT8CqfPFBDQmv6",
      },
    ],
  },
];

export default function Onde_encontrar() {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const abrirModal = (estado) => {
    setEstadoSelecionado(estado);
    setShowModal(true);
  };

  const fecharModal = () => {
    setEstadoSelecionado(null);
    setShowModal(false);
  };

  const estadoLojas = estados.find((item) => item.estado === estadoSelecionado);

  const abrirMapa = (link, endereco) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`geo:0,0?q=${encodeURIComponent(endereco)}`, "_blank");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <section
      className="flex flex-col bg-bg-azul text-bg-creme relative border-y-4 border-[#EFBF04]"
      id="encontrar"
    >
      <div className="w-full flex flex-col gap-16 justify-start items-center px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-28 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-2xl sm:text-3xl md:text-2xl font-descricao text-left md:text-center">
            A linha Inspiratto está disponível nas principais redes da Paraíba e
            do Rio Grande do Norte.
          </p>
          <p className="text-2xl sm:text-3xl md:text-2xl font-descricao text-left md:text-center">
            Encontre o freezer exclusivo no setor de resfriados dos
            supermercados parceiros.
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row gap-4 md:gap-8 md:justify-left justify-center items-start md:items-center max-w-4xl">
          <button
            onClick={() => abrirModal("Paraíba")}
            className="flex w-full cursor-pointer border justify-center border-amber-400 bg-[#ffffff] text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#ffd391] hover:text-bg-azul"
          >
            Paraíba
          </button>
          <button
            onClick={() => abrirModal("Rio Grande do Norte")}
            className="flex w-full cursor-pointer border justify-center border-amber-400 bg-[#ffffff] text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#ffd391] hover:text-bg-azul"
          >
            Rio Grande do Norte
          </button>
        </div>
      </div>

      {showModal && estadoLojas && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={fecharModal}
        >
          <div
            className="bg-bg-creme text-bg-azul rounded-xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fecharModal}
              className="absolute top-4 cursor-pointer right-8 text-2xl font-bold hover:text-red-600"
              aria-label="Fechar modal"
            >
              X
            </button>

            <h3 className="text-3xl font-bold mb-6 text-left">
              Lojas {estadoLojas.textEstado}
            </h3>

            <table className="w-full text-left border border-bg-creme sm:text-base">
              <thead className="bg-bg-azul border text-bg-creme">
                <tr>
                  <th className="p-2 border">Cidade</th>
                  <th className="p-2 border">Loja</th>
                  <th className="p-2 border">Bairro</th>
                  <th className="p-2 border">Mapa</th>
                </tr>
              </thead>
              <tbody>
                {estadoLojas.lojas.map((loja, index) => (
                  <tr
                    key={index}
                    className="border-t bg-white border-bg-azul/10"
                  >
                    <td className="p-2 border">{loja.cidade}</td>
                    <td className="p-2 border">{loja.loja}</td>

                    <td className="p-2 border">{loja.bairro}</td>
                    <td className="p-2 border text-center">
                      <button
                        onClick={() =>
                          abrirMapa(
                            loja.link,
                            `${loja.endereco}, ${loja.numero} - ${loja.bairro}, ${loja.cidade}`
                          )
                        }
                        className="px-3 py-1 text-left cursor-pointer text-bg-azul rounded hover:bg-amber-500 transition-colors"
                      >
                        Ver mapa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
