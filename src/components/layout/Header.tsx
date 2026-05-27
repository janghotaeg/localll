import { Leaf, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/data/mockData";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-600/30">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-emerald-800">
              {BRAND.name}
            </p>
            <p className="hidden text-xs text-gray-500 sm:block">{BRAND.tagline}</p>
          </div>
        </Link>
        <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700 md:flex">
          <Sprout className="h-4 w-4" />
          스마트팜 → 지역 관광 → 지역 소비
        </div>
      </div>
    </header>
  );
}
