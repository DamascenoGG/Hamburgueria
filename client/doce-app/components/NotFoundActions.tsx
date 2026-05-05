"use client";

import Link from "next/link";

export function NotFoundActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
      {/* Botão Voltar */}
      <button
        onClick={() => window.history.back()}
        className="px-8 py-3 bg-[#242424] border border-[#332a1a] text-white rounded-lg font-semibold hover:border-[#f1a128]/60 hover:text-[#f1a128] transition-all duration-200"
      >
        ← Voltar
      </button>

      {/* Botão Home */}
      <Link
        href="/"
        className="px-8 py-3 bg-gradient-to-r from-[#f1a128] to-[#d4860f] text-[#121212] rounded-lg font-semibold hover:from-[#f5b649] hover:to-[#e8a737] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#f1a128]/20"
      >
        Ir para Home 🏠
      </Link>
    </div>
  );
}
