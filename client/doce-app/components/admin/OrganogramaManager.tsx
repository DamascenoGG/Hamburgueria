import { Funcionario } from "@/types/admin";
import { useState } from "react";

export default function OrganogramaManager() {
  // Tipando o estado como um array de Funcionarios
  const [equipe, setEquipe] = useState<Funcionario[]>([
    {
      id: 1,
      nome: "Davi Iacovelli",
      cargo: "admin",
      login: "davi.admin",
      senha: "senha123",
    },
  ]);

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newFuncionario, setNewFuncionario] = useState<Omit<Funcionario, "id">>(
    {
      nome: "",
      cargo: "comum",
      login: "",
      senha: "",
    },
  );

  const removerFuncionario = (id: number): void => {
    setEquipe((prev) => prev.filter((f) => f.id !== id));
  };

  const handleNewFuncionarioChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setNewFuncionario({
      ...newFuncionario,
      [name]: value,
    });
  };

  const handleAddFuncionario = (): void => {
    if (
      !newFuncionario.nome ||
      !newFuncionario.login ||
      !newFuncionario.senha
    ) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    const funcionarioComId = {
      ...newFuncionario,
      id: Date.now(),
    };

    setEquipe((prev) => [...prev, funcionarioComId]);
    setNewFuncionario({
      nome: "",
      cargo: "comum",
      login: "",
      senha: "",
    });
    setIsAddingNew(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Gestão de Equipe</h1>
        {!isAddingNew && (
          <button
            onClick={() => setIsAddingNew(true)}
            className="bg-[#f1a128] text-black px-6 py-2.5 rounded-xl font-medium hover:bg-[#e89d1f] transition-colors"
          >
            + Novo Funcionário
          </button>
        )}
      </div>

      {isAddingNew ? (
        /* MODAL PARA ADICIONAR NOVO FUNCIONÁRIO */
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#332a1a] shadow-lg max-w-2xl w-full animate-in zoom-in-95 duration-300">
            <h2 className="text-xl font-bold mb-6 text-white">
              Novo Funcionário
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#aaa]">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={newFuncionario.nome}
                    onChange={handleNewFuncionarioChange}
                    className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                    placeholder="Ex: João Silva"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#aaa]">Cargo</label>
                  <select
                    name="cargo"
                    value={newFuncionario.cargo}
                    onChange={handleNewFuncionarioChange}
                    className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                  >
                    <option value="comum">Comum</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">Login</label>
                <input
                  type="text"
                  name="login"
                  value={newFuncionario.login}
                  onChange={handleNewFuncionarioChange}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                  placeholder="Ex: joao.silva"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#aaa]">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={newFuncionario.senha}
                  onChange={handleNewFuncionarioChange}
                  className="bg-[#0f0f0f] border border-[#332a1a] text-white p-3 rounded-xl focus:ring-2 focus:ring-[#f1a128] outline-none"
                  placeholder="Crie uma senha segura"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={handleAddFuncionario}
                  className="flex-1 bg-[#f1a128] text-black py-3 rounded-xl font-bold hover:bg-[#e89d1f] transition-colors"
                >
                  Adicionar Funcionário
                </button>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setNewFuncionario({
                      nome: "",
                      cargo: "comum",
                      login: "",
                      senha: "",
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
      ) : (
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#332a1a] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#0f0f0f] border-b border-[#332a1a]">
              <tr>
                <th className="p-4 font-semibold text-[#888]">Nome</th>
                <th className="p-4 font-semibold text-[#888]">Cargo</th>
                <th className="p-4 font-semibold text-[#888]">Login</th>
                <th className="p-4 font-semibold text-[#888]">Senha</th>
                <th className="p-4 font-semibold text-[#888] text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#332a1a]">
              {equipe.map((func) => (
                <tr
                  key={func.id}
                  className="hover:bg-[#0f0f0f]/50 transition-colors"
                >
                  <td className="p-4 font-medium text-white">{func.nome}</td>
                  <td className="p-4 text-[#888] capitalize">{func.cargo}</td>
                  <td className="p-4 text-[#888] font-mono text-sm">
                    {func.login}
                  </td>
                  <td className="p-4 text-[#888] font-mono text-sm">
                    <span className="bg-[#0f0f0f] px-2 py-1 rounded text-xs">
                      ••••••••
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-3">
                    <button className="text-[#666] hover:text-[#f1a128] transition-colors">
                      Editar
                    </button>
                    <button
                      onClick={() => removerFuncionario(func.id)}
                      className="text-[#666] hover:text-red-500 transition-colors"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
