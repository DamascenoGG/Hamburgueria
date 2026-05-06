export type AdminTab = "cardapio" | "equipe" | "mesas";

export interface MenuItem {
  id: AdminTab;
  label: string;
  icon: string;
}

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  ingredientes: string[];
  fotoUrl?: string;
}

export interface SidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
}

export interface Funcionario {
  id: number;
  nome: string;
  cargo: "admin" | "comum";
  login: string;
  senha: string;
}
