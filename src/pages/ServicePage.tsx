import { Link } from "react-router-dom";
import { ArrowLeft, Sprout } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ServiceNav } from "@/components/layout/ServiceNav";
import { VoteBanner } from "@/components/shared/VoteBanner";
import { StatusSection } from "@/components/service/StatusSection";
import { FarmsSection } from "@/components/service/FarmsSection";
import { MapSection } from "@/components/service/MapSection";
import { TourismSection } from "@/components/service/TourismSection";
import { CouponsSection } from "@/components/service/CouponsSection";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/data/mockData";

export function ServicePage() {
  return (
    <div className="min-h-screen bg-farm-beige">
      <Header />
      <ServiceNav />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <Link
              to="/"
              className="mb-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              홈으로
            </Link>
            <h1 className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              <Sprout className="h-7 w-7 text-emerald-600" />
              {BRAND.name} 체험 서비스
            </h1>
            <p className="mt-1 text-sm text-gray-600">{BRAND.tagline}</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              document.getElementById("farms")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            농장 신청하기
          </Button>
        </div>

        <div className="mb-8">
          <VoteBanner />
        </div>

        <StatusSection />
        <FarmsSection />
        <MapSection />
        <TourismSection />
        <CouponsSection />
      </main>

      <footer className="mt-4 border-t border-emerald-100 bg-white py-6 text-center text-sm text-gray-500">
        © 2026 팜로컬 · 공모전 시제품 프로토타입
      </footer>
    </div>
  );
}
