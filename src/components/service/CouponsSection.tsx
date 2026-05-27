import { useState } from "react";
import { Calendar, MapPin, QrCode, Store } from "lucide-react";
import { SECTION_SUBTITLES } from "@/data/mockData";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { QrPlaceholder } from "@/components/shared/QrPlaceholder";

export function CouponsSection() {
  const { coupons } = useApp();
  const [useModalOpen, setUseModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);

  const handleUse = (couponName: string) => {
    setSelectedCoupon(couponName);
    setUseModalOpen(true);
  };

  return (
    <section className="py-10 pb-20">
      <SectionHeading
        id="coupons"
        title="내 쿠폰함"
        subtitle={SECTION_SUBTITLES.coupons}
      />

      <div className="mb-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm border border-emerald-100">
        <span className="text-sm text-gray-600">보유 쿠폰</span>
        <span className="text-2xl font-extrabold text-emerald-700">
          {coupons.length}장
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {coupons.map((coupon) => (
          <Card
            key={coupon.id}
            className="overflow-hidden border-l-4 border-l-emerald-500"
          >
            <CardContent className="flex gap-4 p-5">
              <QrPlaceholder seed={coupon.id} />
              <div className="min-w-0 flex-1 space-y-2">
                <h4 className="font-bold text-gray-900 leading-tight">
                  {coupon.name}
                </h4>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {coupon.region}
                </p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <Store className="h-3 w-3 shrink-0" />
                  {coupon.linkedFarm}
                </p>
                <p className="flex items-center gap-1 text-xs text-amber-700 font-medium">
                  <Calendar className="h-3 w-3 shrink-0" />
                  사용 기한: {coupon.expiry}
                </p>
                <Button
                  size="sm"
                  className="mt-2 w-full sm:w-auto"
                  onClick={() => handleUse(coupon.name)}
                >
                  <QrCode className="h-4 w-4" />
                  사용하기
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={useModalOpen} onClose={() => setUseModalOpen(false)}>
        <div className="space-y-5 pt-2 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-dashed border-gray-300 bg-gray-50">
            <QrCode className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-lg font-bold text-gray-900">
            쿠폰 사용 화면입니다. 현장에서 QR을 제시해주세요.
          </p>
          {selectedCoupon && (
            <p className="text-sm text-emerald-700 font-semibold">{selectedCoupon}</p>
          )}
          <Button className="w-full" size="lg" onClick={() => setUseModalOpen(false)}>
            확인
          </Button>
        </div>
      </Dialog>
    </section>
  );
}
