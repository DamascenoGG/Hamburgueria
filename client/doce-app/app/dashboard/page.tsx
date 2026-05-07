"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mesa } from "@/types/dashboard";

const mesasData: Mesa[] = [
  { id: 1, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 2, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 3, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 4, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 5, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 6, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 7, status: 'ocupada', pessoas: 2, horario: '20:10h', consumidor: 'Rafael', valor: 45.90 },
];

export default function GestaoMesas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. Criamos o estado do filtro (padrão: 'todas')
  const [filtro, setFiltro] = useState<'todas' | 'livre' | 'ocupada'>('todas');

  // 2. Filtramos os dados baseados no estado
  const mesasFiltradas = mesasData.filter(mesa => {
    if (filtro === 'todas') return true;
    return mesa.status === filtro;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 font-sans">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex gap-3">
          {/* Botão Todas */}
          <button 
            onClick={() => setFiltro('todas')}
            className={`px-6 py-2 rounded-lg font-bold text-sm uppercase transition-all ${
              filtro === 'todas' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-gray-500 hover:bg-[#222]'
            }`}
          >
            Todas
          </button>

          {/* Botão Livres */}
          <button 
            onClick={() => setFiltro('livre')}
            className={`px-6 py-2 border rounded-lg font-bold text-sm uppercase transition-all ${
              filtro === 'livre' 
                ? 'bg-green-500 text-black border-green-500' 
                : 'bg-[#1a1a1a] border-green-900/50 text-green-500 hover:bg-green-900/20'
            }`}
          >
            Livre
          </button>

          {/* Botão Ocupadas */}
          <button 
            onClick={() => setFiltro('ocupada')}
            className={`px-6 py-2 border rounded-lg font-bold text-sm uppercase transition-all ${
              filtro === 'ocupada' 
                ? 'bg-red-500 text-white border-red-500' 
                : 'bg-[#1a1a1a] border-red-900/50 text-red-500 hover:bg-red-900/20'
            }`}
          >
            Ocupada
          </button>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-[#f1a128] text-black rounded-lg font-black text-sm uppercase shadow-[0_0_15px_rgba(241,161,40,0.3)] hover:scale-105 transition-all"
        >
          + Nova Mesa
        </button>
      </div>

      {/* 3. Renderizamos as mesas filtradas em vez do array original */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mesasFiltradas.map((mesa) => (
          <Link href={`/mesa/${mesa.id}`} key={mesa.id} className="group">
            <div
              className={`h-full relative overflow-hidden rounded-xl border-2 transition-all cursor-pointer group-hover:scale-105 ${
                mesa.status === 'ocupada' 
                  ? 'bg-[#1a1a1a] border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.1)]' 
                  : 'bg-[#1a1a1a] border-[#333] group-hover:border-[#f1a128]/50'
              }`}
            >
              <div className={`py-2 text-center font-black text-lg transition-colors ${
                mesa.status === 'ocupada' 
                  ? 'bg-red-600/20 text-red-500' 
                  : 'bg-[#222] text-[#f1a128] group-hover:bg-[#f1a128] group-hover:text-black'
              }`}>
                {mesa.id}
              </div>

              <div className="p-4 flex flex-col items-center gap-2">
                {mesa.status === 'ocupada' ? (
                  <>
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest">Consumidor</span>
                    <span className="text-white font-bold">{mesa.consumidor || "Cliente"}</span>
                    <span className="text-[#f1a128] font-black text-lg mt-1">
                      R$ {mesa.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}
                    </span>
                  </>
                ) : (
                  <div className="py-4 opacity-30 group-hover:opacity-100 transition-opacity text-center">
                    <span className="text-gray-500 text-xs uppercase font-bold group-hover:text-[#f1a128]">Mesa Livre</span>
                  </div>
                )}

                <div className="w-full mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-gray-500 text-[10px]">
                  <div className="flex items-center gap-1">
                    <span>👥 {mesa.pessoas}p</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🕒 {mesa.horario}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}