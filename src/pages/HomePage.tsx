import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { BRAND, SECTION_SUBTITLES } from "@/data/mockData";
import { Header } from "@/components/layout/Header";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ServiceFlowCards } from "@/components/home/ServiceFlowCards";
import { VoteBanner } from "@/components/shared/VoteBanner";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="min-h-screen bg-farm-beige">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-farm-beige to-amber-50" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  <Leaf className="h-4 w-4" />
                  {BRAND.tagline}
                </div>
                <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  스마트팜 체험하러 가고,
                  <br />
                  <span className="text-emerald-600">지역 혜택</span>까지 받아보세요
                </h1>
                <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                  내가 고른 지역 농산물을 직접 키우고, 수확하고, 체험 후 지역
                  축제·카페·관광 할인권까지 받을 수 있는 로컬 체험 플랫폼
                </p>
                <p className="mt-3 text-sm font-medium text-emerald-700">
                  {SECTION_SUBTITLES.home}
                </p>
                <Link to="/service" className="mt-8 inline-block">
                  <Button size="xl" className="group w-full sm:w-auto min-w-[240px]">
                    작물 재배하러 가기
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="lg:mt-0">
                <HeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Vote */}
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <VoteBanner />
        </section>

        {/* Service flow */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
              서비스 이용 흐름
            </h2>
            <p className="mt-2 text-center text-gray-600">
              스마트팜 체험부터 지역 관광·소비까지 한 번에
            </p>
            <div className="mt-10">
              <ServiceFlowCards />
            </div>
            <div className="mt-10 text-center">
              <Link to="/service">
                <Button size="lg">
                  지금 시작하기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Flow banner */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-10 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="text-lg font-bold sm:text-xl">
              스마트팜 체험 → 지역 관광 → 지역 소비
            </p>
            <p className="mt-2 text-sm opacity-90">
              팜로컬과 함께 주말 로컬 여행을 떠나보세요
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white py-6 text-center text-sm text-gray-500">
        © 2026 팜로컬 · 공모전 시제품 프로토타입
      </footer>
    </div>
  );
}
