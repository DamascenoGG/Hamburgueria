"use client";

import { useState } from "react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Adicionar lógica de autenticação aqui
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      {/* Efeito de fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1a128] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1a128] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Card principal */}
      <div className="relative w-full max-w-md">
        <div className="bg-[#1a1a1a] border border-[#332a1a] rounded-2xl p-8 shadow-2xl backdrop-blur">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f1a128] to-[#d4860f] rounded-xl mb-4 shadow-lg">
              <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Acesso</h1>
            <p className="text-[#f1a128]/80 text-sm">
              Faça login para continuar
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#f1a128] mb-2"
              >
                Email ou Usuário
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-[#242424] border border-[#332a1a] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#f1a128]/60 focus:ring-2 focus:ring-[#f1a128]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Senha Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#f1a128] mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[#242424] border border-[#332a1a] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#f1a128]/60 focus:ring-2 focus:ring-[#f1a128]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Esqueci a senha */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-[#f1a128]/80 hover:text-[#f1a128] transition-colors"
              >
                Esqueci a senha?
              </a>
            </div>

            {/* Botão Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-6 bg-gradient-to-r from-[#f1a128] to-[#d4860f] hover:from-[#f5b649] hover:to-[#e8a737] disabled:from-[#332a1a] disabled:to-[#2a2218] text-[#121212] font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#f1a128]/20 disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#121212]/30 border-t-[#121212] rounded-full animate-spin"></span>
                  Entrando...
                </>
              ) : (
                <>
                  <span>Entrar</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          {/* Footer info */}
          <p className="text-center text-[#666] text-xs mt-5">
            Sistema restrito para{" "}
            <span className="text-[#f1a128] font-medium">colaboradores</span>
          </p>
        </div>

        {/* Detalhe decorativo inferior */}
        <div className="mt-6 text-center">
          <p className="text-[#888] text-xs">🍔 Hamburgueria Premium</p>
        </div>
      </div>
    </div>
  );
}
