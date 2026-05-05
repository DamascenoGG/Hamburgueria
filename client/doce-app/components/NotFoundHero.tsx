export function NotFoundHero() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Animação 404 */}
      <div className="relative mb-8">
        <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f1a128] to-[#d4860f]">
          404
        </div>
        <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-[#f1a128] to-[#d4860f] -z-10"></div>
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
        Página Não Encontrada
      </h1>

      {/* Descrição */}
      <p className="text-[#888] text-lg md:text-xl text-center max-w-md mb-8">
        Desculpa! A página que você está procurando não existe ou foi movida.
      </p>

      {/* Ícone decorativo */}
      <div className="text-6xl mb-8 animate-bounce">🍔</div>
    </div>
  );
}
