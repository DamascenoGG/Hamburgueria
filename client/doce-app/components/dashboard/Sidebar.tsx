"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { 
      name: 'Mapa de Mesas', 
      href: '/dashboard',
      // Ícone de Grid/Dashboard em SVG
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      name: 'Cardápio', 
      href: '/cardapio',
      // Ícone de Livro/Menu em SVG
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
  ];

  return (
    <aside className="w-64 bg-[#121212] border-r border-[#332a1a] flex flex-col h-full">
      <nav className="flex-1 px-4 py-8 space-y-3">
        <p className="text-[#555] text-[10px] uppercase tracking-[0.3em] mb-6 px-4 font-black">
          Menu Principal
        </p>
        
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-[#f1a128]/10 text-[#f1a128] border border-[#f1a128]/30' 
                  : 'text-gray-500 hover:bg-[#1a1a1a] hover:text-gray-300'
              }`}
            >
              <div className={isActive ? 'text-[#f1a128]' : 'text-gray-600 group-hover:text-gray-400'}>
                {item.icon}
              </div>
              <span className="font-bold text-sm tracking-tight">{item.name}</span>
              
              {isActive && (
                <div className="ml-auto w-1 h-4 rounded-full bg-[#f1a128] shadow-[0_0_10px_#f1a128]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Botão de Sair com ícone manual */}
      <div className="p-6 border-t border-[#332a1a]">
        <button className="flex items-center gap-3 text-red-900/60 hover:text-red-500 transition-colors w-full px-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="text-xs font-black uppercase tracking-widest">Sair</span>
        </button>
      </div>
    </aside>
  );
}