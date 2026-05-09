"use client";
import CardapioEditor from "@/components/admin/CardapioEditor";
import MapaMesas from "@/components/admin/MapaMesas";
import OrganogramaManager from "@/components/admin/OrganogramaManager";
import SidebarAdmin from "@/components/admin/SidebarAdmin";
import { useState } from "react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<"cardapio" | "equipe" | "mesas">(
    "cardapio",
  );

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <SidebarAdmin activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8">
        {activeTab === "cardapio" && <CardapioEditor />}
        {activeTab === "equipe" && <OrganogramaManager />}
        {activeTab === "mesas" && <MapaMesas />}
      </main>
    </div>
  );
}
