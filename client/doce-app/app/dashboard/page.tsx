import DoceHeader from "@/components/DoceHeader";
import React from 'react';
import {Mesa} from "@/types/dashboard";

const mesasData: Mesa[] = [
  { id: 1, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 2, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 3, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 4, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 5, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 6, status: 'livre', pessoas: 4, horario: '19:22h' },
  { id: 7, status: 'livre', pessoas: 4, horario: '19:22h' },
];

export default function GestaoMesas() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 font-sans">
      {/* Filtros no estilo dos botões da Do'cê */}
      <div className="flex gap-3 mb-8">
        <button className="px-6 py-2 bg-white text-black rounded-lg font-bold text-sm uppercase transition-all hover:bg-gray-200">
          Todas
        </button>
        <button className="px-6 py-2 bg-[#1a1a1a] border border-green-900/50 text-green-500 rounded-lg font-bold text-sm uppercase transition-all hover:bg-green-900/20">
          Livre
        </button>
        <button className="px-6 py-2 bg-[#1a1a1a] border border-red-900/50 text-red-500 rounded-lg font-bold text-sm uppercase transition-all hover:bg-red-900/20">
          Ocupada
        </button>
      </div>

      {/* Grid de Mesas */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mesasData.map((mesa) => (
          <div
            key={mesa.id}
            className={`relative overflow-hidden rounded-xl border-2 transition-all cursor-pointer hover:scale-105 ${
              mesa.status === 'ocupada' 
                ? 'bg-[#1a1a1a] border-red-600/50' 
                : 'bg-[#1a1a1a] border-[#333]'
            }`}
          >
            {/* Header da Mesa (Número) */}
            <div className={`py-2 text-center font-black text-lg ${
              mesa.status === 'ocupada' ? 'bg-red-600/20 text-red-500' : 'bg-[#222] text-[#f1a128]'
            }`}>
              {mesa.id}
            </div>

            {/* Conteúdo do Card */}
            <div className="p-4 flex flex-col items-center gap-2">
              {mesa.status === 'ocupada' ? (
                <>
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest">Consumidor</span>
                  <span className="text-white font-bold">{mesa.consumidor}</span>
                  <span className="text-[#f1a128] font-black text-lg mt-1">
                    R$ {mesa.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </>
              ) : (
                <div className="py-4 opacity-30">
                  <span className="text-gray-500 text-xs uppercase font-bold">Mesa Livre</span>
                </div>
              )}

              {/* Footer do Card (Info extra) */}
              <div className="w-full mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-1">
                 
                  <span className="text-[10px]">{mesa.pessoas}</span>
                </div>
                <div className="flex items-center gap-1">
                
                  <span className="text-[10px]">{mesa.horario}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}