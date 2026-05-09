import "@/app/globals.css";
import DoceHeader from "@/components/DoceHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Page",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <DoceHeader />
      {children}
    </main>
  );
}
