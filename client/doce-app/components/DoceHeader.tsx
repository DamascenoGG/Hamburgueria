import Image from "next/image";
export default function DoceHeader() {
  return (
    <header className="w-full bg-[#121212] border-b border-[#332a1a] px-4 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        {/* Container da Logo - Referenciando logodoce.png na pasta public */}
        <div className="relative w-14 h-14">
          <Image
            src="/logodoce.svg"
            alt="Do'cê Hamburgueria"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[#f1a128] font-bold text-xl tracking-wider leading-none font-sans">
            DO'CE <span className="text-white">HAMBURGUERIA</span>
          </h1>
          <p className="text-[#666] text-[10px] uppercase tracking-[0.2em] mt-1">
            Ilicínea - MG
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-[#888] text-[10px] font-medium uppercase tracking-tighter">
          Sistema de Pedidos
        </span>
      </div>
    </header>
  );
}
