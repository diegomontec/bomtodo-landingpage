"use client";

import { useState } from "react";
import Button from "@/app/components/button/Button";

const estados = [
  {
    estado: "Rio Grande do Norte",
    lojas: [
      {
        cidade: "Natal",
        loja: "NORDESTÃO LAGOA NOVA (LOJA 03)",
        cnpj: "08030363000939",
        endereco: "AV. SENADOR SALGADO FILHO",
        numero: "1656",
        bairro: "LAGOA NOVA",
      },
      {
        cidade: "Natal",
        loja: "NORDESTÃO CAPIM MACIO (LOJA 04)",
        cnpj: "08030363001234",
        endereco: "RUA LEONCIO ETEOVINO MEDEIROS",
        numero: "SN",
        bairro: "CAPIM MACIO",
      },
      {
        cidade: "Natal",
        loja: "NORDESTÃO TIROL (LOJA 07)",
        cnpj: "08030363003105",
        endereco: "AV. PRUDENTE DE MORAIS",
        numero: "1140",
        bairro: "TIROL",
      },
      {
        cidade: "Natal",
        loja: "NORDESTÃO (LOJA 11)",
        cnpj: "0803036300",
        endereco: "AV. ENGENHEIRO ROBERTO FREIRE",
        numero: "844",
        bairro: "CAPIM MACIO",
      },
      {
        cidade: "Parnamirim",
        loja: "NORDESTÃO MARIA LACERDA (LOJA 22)",
        cnpj: "0803036300",
        endereco: "AV. MARIA LACERDA MONTENEGRO",
        numero: "1400",
        bairro: "NOVA PARNAMIRIM",
      },
      {
        cidade: "Natal",
        loja: "REDE MAIS (CIDADE DA ESPERANÇA)",
        cnpj: "40791980000102",
        endereco: "RUA DA CONCEIÇÃO",
        numero: "SN",
        bairro: "CIDADE DA ESPERANÇA",
      },
      {
        cidade: "Natal",
        loja: "FAVORITO (AYRTON SENNA)",
        cnpj: "05599479000000",
        endereco: "AV. AYRTON SENNA",
        numero: "3215",
        bairro: "NEOPOLIS",
      },
      {
        cidade: "Natal",
        loja: "FAVORITO (PONTA NEGRA)",
        cnpj: "05599479000101",
        endereco: "AV. ENGENHEIRO ROBERTO FREIRE",
        numero: "1460",
        bairro: "CAMPIM MACIO",
      },
    ],
  },
  {
    estado: "Paraíba",
    lojas: [
      {
        cidade: "JOÃO PESSOA",
        loja: "MIX MATEUS (ALTIPLANO)",
        cnpj: "03995515027448",
        endereco: "R JOÃO VIRGÍNIO ACIOLI",
        numero: "707",
        bairro: "ALTIPLANO",
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

  return (
    <section className="flex flex-col bg-bg-azul text-bg-creme relative border-y-4 border-[#EFBF04]">
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

        <div className="flex w-full flex-col md:flex-row gap-4 md:gap-8 md:justify-left justify-center items-start md:items-center">
          <button
            onClick={() => abrirModal("Paraíba")}
            className="flex cursor-pointer border border-amber-400 bg-[#ffffff] text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#d3d3d3] hover:text-bg-azul"
          >
            Paraíba
          </button>
          <button
            onClick={() => abrirModal("Rio Grande do Norte")}
            className="flex cursor-pointer border border-amber-400 bg-[#ffffff] text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#d3d3d3] hover:text-bg-azul"
          >
            Rio Grande do Norte
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && estadoLojas && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={fecharModal} // fechar ao clicar no backdrop
        >
          <div
            className="bg-bg-creme text-bg-azul rounded-xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // impedir fechamento ao clicar no conteúdo
          >
            <button
              onClick={fecharModal}
              className="absolute top-4 right-8 text-2xl font-bold hover:text-red-600"
              aria-label="Fechar modal"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold mb-6 text-left">
              Lojas em {estadoLojas.estado}
            </h3>

            <table className="w-full text-left border border-bg-creme sm:text-base">
              <thead className="bg-bg-azul border text-bg-creme">
                <tr>
                  <th className="p-2 border">Cidade</th>
                  <th className="p-2 border">Loja</th>
                  <th className="p-2 border">CNPJ</th>
                  <th className="p-2 border">Endereço</th>
                  <th className="p-2 border">Número</th>
                  <th className="p-2 border">Bairro</th>
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
                    <td className="p-2 border">{loja.cnpj}</td>
                    <td className="p-2 border">{loja.endereco}</td>
                    <td className="p-2 border">{loja.numero}</td>
                    <td className="p-2 border">{loja.bairro}</td>
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
