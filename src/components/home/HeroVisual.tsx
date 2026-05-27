import {
  Camera,
  MapPin,
  Sprout,
  Ticket,
  Wifi,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto mt-10 max-w-lg">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-200/60 to-amber-100/60 blur-xl" />
      <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl backdrop-blur sm:gap-4 sm:p-5">
        <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <Sprout className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-emerald-100">스마트팜</p>
            <p className="font-bold">논산 딸기 재배 중</p>
          </div>
          <div className="ml-auto flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-green-300" />
            LIVE
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-3">
          <Camera className="mb-2 h-6 w-6 text-emerald-600" />
          <p className="text-xs font-semibold text-gray-800">실시간 모니터링</p>
          <div className="mt-2 h-14 rounded-xl bg-gradient-to-br from-green-800/80 to-emerald-600/60" />
        </div>

        <div className="rounded-2xl bg-amber-50 p-3">
          <MapPin className="mb-2 h-6 w-6 text-amber-600" />
          <p className="text-xs font-semibold text-gray-800">충남 지역 지도</p>
          <div className="mt-2 flex h-14 items-center justify-center rounded-xl bg-emerald-100/80">
            <div className="relative h-10 w-10">
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500" />
              <div className="absolute bottom-1 left-0 h-2 w-2 rounded-full bg-emerald-600" />
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-600" />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-500" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-stone-50 p-3">
          <Wifi className="mb-2 h-6 w-6 text-emerald-600" />
          <p className="text-xs text-gray-600">온도 23.5℃ · 습도 61%</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 p-3">
          <Ticket className="mb-2 h-6 w-6 text-amber-600" />
          <p className="text-xs font-semibold text-amber-900">지역 쿠폰 3장</p>
        </div>
      </div>

      <div className="absolute -left-4 top-1/4 animate-float rounded-2xl bg-white p-3 shadow-lg">
        <span className="text-2xl">🍓</span>
      </div>
      <div
        className="absolute -right-2 bottom-1/4 animate-float rounded-2xl bg-white p-3 shadow-lg"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-2xl">🌾</span>
      </div>
    </div>
  );
}
