import { useState } from "react";
import { Heart } from "lucide-react";
import { VOTE_OPTIONS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function VoteBanner() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 shadow-lg sm:p-8">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-200/40 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" />
      <div className="relative">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-white">
            공모전 투표
          </span>
          <Heart className="h-5 w-5 fill-red-400 text-red-400" />
        </div>
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
          여러분이라면 이런 체험 해보고 싶나요?
        </h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          스마트팜에서 내가 고른 농산물을 키우고, 직접 수확하고, 지역 축제·카페
          할인권까지 받는다면?
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {VOTE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelected(opt.id)}
              className={cn(
                "rounded-2xl border-2 p-4 text-center transition-all",
                selected === opt.id
                  ? "border-emerald-500 bg-emerald-50 shadow-md scale-[1.02]"
                  : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50"
              )}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <p className="mt-2 text-xs font-semibold text-gray-800 sm:text-sm">
                {opt.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
