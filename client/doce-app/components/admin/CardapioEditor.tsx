"use client";
import { Produto } from "@/types/admin"; // Certifique-se de ter criado esse arquivo como sugerido antes
import { useState } from "react";

export default function CardapioEditor() {
  // Estado para a lista de produtos (simulando o que virá do banco futuramente)
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: "1",
      nome: "Doce Burger Supremo",
      preco: 38.9,
      descricao:
        "Pão brioche, blend 180g, queijo cheddar e bacon caramelizado.",
      ingredientes: ["Carne 180g", "Cheddar", "Bacon"],
      fotoUrl: "",
    },
  ]);

  // Estado para controlar qual produto está sendo editado (null = nenhum)
  const [editingProduct, setEditingProduct] = useState<Produto | null>(null);
  // Estado para controlar se o modal de novo produto está aberto
  const [isAddingNew, setIsAddingNew] = useState(false);
  // Estado para o novo produto
  const [newProduct, setNewProduct] = useState<Produto>({
    id: "",
    nome: "",
    preco: 0,
    descricao: "",
    ingredientes: [],
    fotoUrl: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!editingProduct) return;
    const { name, value } = e.target;

    setEditingProduct({
      ...editingProduct,
      [name]: name === "preco" ? parseFloat(value) || 0 : value,
    });
  };

  const handleNewProductChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "preco" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSave = (): void => {
    if (!editingProduct) return;
    setProdutos((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p)),
    );
    setEditingProduct(null);
    // Aqui no futuro você faria o fetch para o NestJS
  };

  const handleAddProduct = (): void => {
    if (!newProduct.nome || !newProduct.preco) {
      alert("Preencha o nome e o preço do produto");
      return;
    }
    const produtoComId = {
      ...newProduct,
      id: Date.now().toString(),
    };
    setProdutos((prev) => [...prev, produtoComId]);
    setNewProduct({
      id: "",
      nome: "",
      preco: 0,
      descricao: "",
      ingredientes: [],
      fotoUrl: "",
    });
    setIsAddingNew(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Cardápio</h1>
          <p className="text-[#888]">
            Gerencie os itens oferecidos na sua hamburgueria.
          </p>
        </div>
        {!editingProduct && !isAddingNew && (
          <button
            onClick={() => setIsAddingNew(true)}
            className="bg-[#f1a128] hover:bg-[#e89d1f] text-black px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-[#f1a128]/20"
          >
            + Adicionar Produto
          </button>
        )}
      </div>

      {isAddingNew ? (
        /* MODAL PARA ADICIONAR NOVO PRODUTO */
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#332a1a] shadow-lg max-w-2xl w-full animate-in zoom-in-95 duration-300">
            <h2 className="text-xl font-bold mb-6 text-white">Novo Produto</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#aaa]">
                    Nome do Produto
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={newProduct.nome}
                    onChange={handleNewProductChange}
                    className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                    placeholder="Ex: Doce Burger Premium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#aaa]">
                    Preço (R$)
                  </label>
                  <input
                    type="number"
                    name="preco"
                    value={newProduct.preco}
                    onChange={handleNewProductChange}
                    className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                    placeholder="38.90"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">
                  Descrição
                </label>
                <textarea
                  name="descricao"
                  value={newProduct.descricao}
                  onChange={handleNewProductChange}
                  rows={3}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none resize-none"
                  placeholder="Descreva o produto..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">
                  URL da Foto
                </label>
                <input
                  type="text"
                  name="fotoUrl"
                  value={newProduct.fotoUrl}
                  onChange={handleNewProductChange}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={handleAddProduct}
                  className="flex-1 bg-[#f1a128] text-black py-3 rounded-xl font-bold hover:bg-[#e89d1f] transition-colors"
                >
                  Adicionar Produto
                </button>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setNewProduct({
                      id: "",
                      nome: "",
                      preco: 0,
                      descricao: "",
                      ingredientes: [],
                      fotoUrl: "",
                    });
                  }}
                  className="flex-1 bg-[#2a2a2a] text-[#888] py-3 rounded-xl font-bold hover:bg-[#333] transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : editingProduct ? (
        /* FORMULÁRIO DE EDIÇÃO */
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#332a1a] shadow-sm max-w-2xl animate-in zoom-in-95 duration-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <button
              onClick={() => setEditingProduct(null)}
              className="text-[#666] hover:text-white"
            >
              ←
            </button>
            Editando: {editingProduct.nome}
          </h2>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">
                  Nome do Produto
                </label>
                <input
                  type="text"
                  name="nome"
                  value={editingProduct.nome}
                  onChange={handleInputChange}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">
                  Preço (R$)
                </label>
                <input
                  type="number"
                  name="preco"
                  value={editingProduct.preco}
                  onChange={handleInputChange}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#aaa]">Descrição</label>
              <textarea
                name="descricao"
                value={editingProduct.descricao}
                onChange={handleInputChange}
                rows={3}
                className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#aaa]">
                URL da Foto
              </label>
              <input
                type="text"
                name="fotoUrl"
                value={editingProduct.fotoUrl}
                onChange={handleInputChange}
                className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                placeholder="https://..."
              />
            </div>

            <div className="pt-4 flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 bg-[#f1a128] text-black py-3 rounded-xl font-bold hover:bg-[#e89d1f] transition-colors"
              >
                Salvar Alterações
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                className="flex-1 bg-[#2a2a2a] text-[#888] py-3 rounded-xl font-bold hover:bg-[#333] transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* GRID DE PRODUTOS */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-[#1a1a1a] group rounded-3xl border border-[#332a1a] overflow-hidden hover:shadow-xl hover:shadow-[#f1a128]/20 transition-all duration-300"
            >
              <div className="h-48 bg-zinc-100 relative overflow-hidden">
                {produto.fotoUrl ? (
                  <img
                    src={produto.fotoUrl}
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-300 text-4xl">
                    🍔
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-black text-orange-600 shadow-sm">
                  R$ {produto.preco.toFixed(2)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-zinc-800 mb-2">
                  {produto.nome}
                </h3>
                <p className="text-zinc-500 text-sm line-clamp-2 mb-4">
                  {produto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {produto.ingredientes.map((ing, idx) => (
                    <span
                      key={idx}
                      className="bg-zinc-100 text-zinc-600 text-[10px] uppercase font-bold px-2 py-1 rounded-md"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setEditingProduct(produto)}
                  className="w-full py-3 bg-zinc-50 text-zinc-900 font-bold rounded-xl border border-zinc-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300"
                >
                  Editar Produto
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
