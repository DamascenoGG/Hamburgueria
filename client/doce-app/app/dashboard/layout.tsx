import "@/app/globals.css";
import Header from "@/components/DoceHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
