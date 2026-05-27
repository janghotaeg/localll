import { MapPin, PartyPopper, Ticket } from "lucide-react";
import { INITIAL_COUPONS, SECTION_SUBTITLES, TOURISM_SPOTS } from "@/data/mockData";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const REGION_EMOJI: Record<string, string> = {
  논산: "🍓",
  아산: "🏘️",
  공주: "🌰",
  부여: "🍅",
};

export function TourismSection() {
  const { collectedCouponIds, collectCoupon, showToast } = useApp();

  const handleCollect = (couponId: string, name: string) => {
    const already = collectedCouponIds.has(couponId);
    collectCoupon(couponId);
    showToast(
      already
        ? `${name}은(는) 이미 쿠폰함에 있습니다.`
        : "쿠폰이 내 쿠폰함에 저장되었습니다."
    );
  };

  return (
    <section className="py-10">
      <SectionHeading
        id="tourism"
        title="지역 관광/축제"
        subtitle={SECTION_SUBTITLES.tourism}
      />

      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-center text-white shadow-lg sm:p-6">
        <p className="text-sm font-medium opacity-90">체험 후 연계 혜택</p>
        <p className="mt-1 text-lg font-bold sm:text-xl">
          스마트팜 체험 → 지역 축제 · 관광 · 로컬 소비
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {TOURISM_SPOTS.map((spot) => {
          const hasCoupon = collectedCouponIds.has(spot.couponId);
          const couponMeta = INITIAL_COUPONS.find((c) => c.id === spot.couponId);
          return (
            <Card
              key={spot.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400" />
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-3">
                    <span className="text-3xl">{REGION_EMOJI[spot.region]}</span>
                    <div>
                      <Badge className="mb-2">{spot.region}</Badge>
                      <CardTitle className="text-lg">{spot.name}</CardTitle>
                    </div>
                  </div>
                  <PartyPopper className="h-8 w-8 text-amber-500 opacity-80" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {spot.description}
                </p>
                <div className="rounded-2xl bg-emerald-50 p-3 text-sm">
                  <span className="font-semibold text-emerald-800">제공 혜택: </span>
                  <span className="text-emerald-700">{spot.benefit}</span>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  연결 농장: {spot.linkedFarm}
                </p>
                <Button
                  className={cn("w-full", hasCoupon && "opacity-90")}
                  variant={hasCoupon ? "secondary" : "default"}
                  size="lg"
                  onClick={() =>
                    handleCollect(spot.couponId, couponMeta?.name ?? spot.name)
                  }
                >
                  <Ticket className="h-4 w-4" />
                  {hasCoupon ? "쿠폰 보유 중" : "쿠폰 받기"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
