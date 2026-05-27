import { useState } from "react";
import { CheckCircle2, Gift, MapPin, Sprout, Wallet } from "lucide-react";
import { FARMS, SECTION_SUBTITLES } from "@/data/mockData";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CROP_EMOJI: Record<string, string> = {
  nonsan: "🍓",
  gongju: "🌰",
  asan: "🥬",
  buyeo: "🍅",
};

export function FarmsSection() {
  const { appliedFarmIds, applyFarm } = useApp();
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [lastApplied, setLastApplied] = useState<string | null>(null);

  const handleApply = (farmId: string) => {
    applyFarm(farmId);
    setLastApplied(farmId);
    setApplyModalOpen(true);
  };

  return (
    <section className="py-10">
      <SectionHeading
        id="farms"
        title="신청 가능한 곳"
        subtitle={SECTION_SUBTITLES.farms}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {FARMS.map((farm) => {
          const isApplied = appliedFarmIds.has(farm.id);
          return (
            <Card
              key={farm.id}
              className={cn(
                "transition-shadow hover:shadow-lg",
                isApplied && "ring-2 ring-emerald-400"
              )}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <span className="text-4xl">{CROP_EMOJI[farm.id]}</span>
                    <div>
                      <CardTitle>{farm.name}</CardTitle>
                      <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {farm.region}
                      </p>
                    </div>
                  </div>
                  {isApplied ? (
                    <Badge variant="success" className="shrink-0">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      신청 완료
                    </Badge>
                  ) : (
                    <Badge
                      variant={farm.status === "closing" ? "warning" : "default"}
                    >
                      {farm.statusLabel}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Sprout className="h-4 w-4 text-emerald-600" />
                  <span className="font-semibold text-gray-700">대표 작물:</span>
                  <span>{farm.crop}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">체험 내용: </span>
                  {farm.experience}
                </p>
                <div className="flex items-start gap-2 rounded-2xl bg-amber-50 p-3 text-sm">
                  <Gift className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <div>
                    <span className="font-semibold text-amber-900">제공 혜택: </span>
                    <span className="text-amber-800">{farm.benefits}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Wallet className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">예상 체험료</span>
                    <span className="text-lg font-bold text-emerald-700">
                      {farm.price.toLocaleString()}원
                    </span>
                  </div>
                  <Button
                    size="lg"
                    variant={isApplied ? "secondary" : "default"}
                    disabled={isApplied}
                    onClick={() => handleApply(farm.id)}
                  >
                    {isApplied ? "신청 완료" : "신청하기"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={applyModalOpen} onClose={() => setApplyModalOpen(false)}>
        <div className="space-y-4 pt-2 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">신청이 완료되었습니다!</h3>
          <p className="text-gray-600">
            이제 내 작물의 상태를 웹사이트에서 확인할 수 있습니다.
          </p>
          {lastApplied && (
            <p className="text-sm font-medium text-emerald-700">
              {FARMS.find((f) => f.id === lastApplied)?.name}
            </p>
          )}
          <Button className="w-full" size="lg" onClick={() => setApplyModalOpen(false)}>
            확인
          </Button>
        </div>
      </Dialog>
    </section>
  );
}
