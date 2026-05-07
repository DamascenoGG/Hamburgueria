"use client";
export default function PaginaPedido({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-[calc(100vh-70px)] bg-[#0a0a0a] text-white">
      {/* Lado Esquerdo: Cardápio */}
      <div className="flex-1 p-6 overflow-y-auto border-r border-[#1a1a1a]">
        <div className="flex gap-2 mb-8">
           {/* Seus botões de categoria: Burgers Especiais, Bebidas... */}
           <button className="bg-[#f1a128]/10 border border-[#f1a128] text-[#f1a128] px-4 py-1 rounded-full text-xs">Burgers Especiais</button>
           <button className="bg-[#1a1a1a] text-gray-500 px-4 py-1 rounded-full text-xs">Bebidas</button>
        </div>

        <h2 className="text-[#f1a128] font-black text-2xl mb-6 uppercase italic">Burgers Especiais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Aqui você fará um map dos seus produtos do banco de dados */}
          <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#333] flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Salad Bacon</h3>
              <p className="text-gray-500 text-xs">Pão brioche, hambúrguer artesanal 160g...</p>
              <span className="text-[#f1a128] font-bold block mt-2">R$ 29,90</span>
            </div>
            <button className="bg-[#f1a128] p-2 rounded-lg text-black font-black">+</button>
          </div>
        </div>
      </div>

      {/* Lado Direito: Carrinho (Pedido) */}
      <div className="w-96 bg-[#121212] flex flex-col p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase tracking-tighter">Pedido</h2>
          <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">0</span>
        </div>

        {/* Estado Vazio do Carrinho */}
        <div className="flex-1 flex flex-col items-center justify-center opacity-20">
           <div className="text-6xl mb-4">🍔</div>
           <p className="text-sm font-medium">Nenhum item adicionado</p>
        </div>

        {/* Footer do Carrinho */}
        <div className="border-t border-[#333] pt-4">
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Subtotal</span>
            <span>R$ 0,00</span>
          </div>
          <div className="flex justify-between text-xl font-black mb-6">
            <span>TOTAL</span>
            <span className="text-[#f1a128]">R$ 0,00</span>
          </div>
          <button className="w-full bg-[#3d311a] text-[#f1a128]/50 py-4 rounded-xl font-black uppercase tracking-widest cursor-not-allowed">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}