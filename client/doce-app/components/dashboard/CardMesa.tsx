import { Mesa } from '@/types/dashboard';

interface CardMesaProps {
  mesa: Mesa;
}

export default function CardMesa({ mesa }: CardMesaProps) {
  return (
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

      <div className="w-full mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-gray-500">
        <div className="flex items-center gap-1">
          <span className="text-[10px]">{mesa.pessoas}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px]">{mesa.horario}</span>
        </div>
      </div>
    </div>
  );
}