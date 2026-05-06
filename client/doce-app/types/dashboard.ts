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

export interface Mesa {
  id: number;
  status: 'livre' | 'ocupada';
  valor?: number;
  consumidor?: string;
  pessoas?: number;
  horario?: string;
}