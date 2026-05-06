import { useState } from "react";

export default function MapaMesas() {
  const [mesas, setMesas] = useState<number[]>([1, 2, 3, 4]);

  const adicionarMesa = (): void => {
    const novoNumero = mesas.length > 0 ? Math.max(...mesas) + 1 : 1;
    setMesas([...mesas, novoNumero]);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-white mb-8">Mapa de Mesas</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {mesas.map((num) => (
          <div
            key={num}
            className="group relative bg-[#1a1a1a] border-2 border-[#332a1a] h-32 rounded-3xl flex items-center justify-center shadow-sm hover:border-[#f1a128] transition-all duration-300"
          >
            <span className="text-2xl font-black text-[#666] group-hover:text-[#f1a128] transition-colors">
              {num < 10 ? `0${num}` : num}
            </span>

            <button
              onClick={() => setMesas(mesas.filter((m) => m !== num))}
              className="absolute -top-2 -right-2 bg-[#1a1a1a] text-red-500 w-8 h-8 rounded-full shadow-md border border-[#332a1a] flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          onClick={adicionarMesa}
          className="h-32 border-2 border-dashed border-[#332a1a] rounded-3xl flex flex-col items-center justify-center gap-2 text-[#666] hover:border-[#f1a128] hover:text-[#f1a128] hover:bg-[#f1a128]/10 transition-all group"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">
            +
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">
            Nova Mesa
          </span>
        </button>
      </div>
    </div>
  );
}
