import { NotFoundHero } from "@/components/NotFoundHero";
import { NotFoundActions } from "@/components/NotFoundActions";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4 py-12">
      {/* Efeito de fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1a128] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1a128] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Container */}
      <div className="relative w-full max-w-2xl">
        {/* Hero Section */}
        <div className="text-center">
          <NotFoundHero />
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <NotFoundActions />
        </div>
      </div>
    </div>
  );
}
