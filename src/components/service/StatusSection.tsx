import { useState } from "react";
import {
  Calendar,
  Camera,
  Droplets,
  MapPin,
  Sprout,
  Thermometer,
  TreePine,
  Wifi,
} from "lucide-react";
import { CURRENT_CROP, SECTION_SUBTITLES } from "@/data/mockData";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge } from "@/components/ui/progress";
import { Dialog } from "@/components/ui/dialog";

export function StatusSection() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const crop = CURRENT_CROP;

  return (
    <section className="py-10">
      <SectionHeading
        id="status"
        title="현재 상태 확인"
        subtitle={SECTION_SUBTITLES.status}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden border-emerald-200">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white pb-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Badge className="mb-2 bg-white/20 text-white">재배 중</Badge>
                <CardTitle className="text-2xl text-white">{crop.crop}</CardTitle>
                <p className="mt-1 flex items-center gap-1 text-sm text-emerald-100">
                  <MapPin className="h-4 w-4" />
                  {crop.region} · {crop.farmName}
                </p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl">
                🍓
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
              <Sprout className="h-8 w-8 text-emerald-600" />
              <div>
                <p className="text-xs font-medium text-gray-500">성장 단계</p>
                <p className="font-bold text-gray-900">{crop.growthStage}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Gauge
                label="온도"
                value={crop.temperature}
                unit="℃"
                max={40}
                icon={<Thermometer className="h-4 w-4 text-orange-500" />}
                colorClass="from-orange-300 to-orange-500"
              />
              <Gauge
                label="습도"
                value={crop.humidity}
                icon={<Droplets className="h-4 w-4 text-blue-500" />}
                colorClass="from-blue-300 to-blue-500"
              />
              <Gauge
                label="토양 수분"
                value={crop.soilMoisture}
                icon={<TreePine className="h-4 w-4 text-amber-700" />}
                colorClass="from-amber-400 to-amber-600"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-farm-cream p-4">
                <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Calendar className="h-4 w-4" />
                  다음 방문 추천일
                </p>
                <p className="mt-1 text-lg font-bold text-emerald-800">
                  {crop.nextVisit}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-farm-cream p-4">
                <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Calendar className="h-4 w-4" />
                  수확 예상일
                </p>
                <p className="mt-1 text-lg font-bold text-emerald-800">
                  {crop.harvestDate}
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full text-base shadow-xl shadow-emerald-600/30"
              onClick={() => setCameraOpen(true)}
            >
              <Camera className="h-5 w-5" />
              실시간 카메라 보기
            </Button>
          </CardContent>
        </Card>

        <Card className="border-dashed border-2 border-emerald-200 bg-gradient-to-b from-white to-emerald-50/50">
          <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
              📡
            </div>
            <p className="font-bold text-gray-900">스마트팜 모니터링</p>
            <p className="mt-2 text-sm text-gray-500">
              온습도·토양 데이터가 실시간으로 업데이트됩니다
            </p>
            <div className="mt-6 w-full space-y-2 text-left text-sm">
              <div className="flex justify-between rounded-xl bg-white px-4 py-2">
                <span className="text-gray-500">연결 상태</span>
                <span className="font-semibold text-emerald-600">정상</span>
              </div>
              <div className="flex justify-between rounded-xl bg-white px-4 py-2">
                <span className="text-gray-500">센서</span>
                <span className="font-semibold">4/4 작동</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={cameraOpen} onClose={() => setCameraOpen(false)} className="max-w-2xl">
        <div className="space-y-4">
          <p className="text-center text-lg font-bold text-gray-900">
            {crop.cameraTitle}
          </p>
          <div className="relative overflow-hidden rounded-2xl border-4 border-gray-800 bg-gray-900 aspect-video">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(22,163,74,0.3), rgba(0,0,0,0.5)), url("data:image/svg+xml,${encodeURIComponent(`
                  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
                    <defs>
                      <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
                        <stop offset='0%' style='stop-color:%23166534'/>
                        <stop offset='100%' style='stop-color:%2314532d'/>
                      </linearGradient>
                    </defs>
                    <rect fill='url(%23g)' width='800' height='450'/>
                    <ellipse cx='400' cy='280' rx='280' ry='80' fill='%2322c55e' opacity='0.6'/>
                    <circle cx='200' cy='180' r='25' fill='%23ef4444' opacity='0.9'/>
                    <circle cx='280' cy='200' r='22' fill='%23ef4444' opacity='0.85'/>
                    <circle cx='360' cy='170' r='24' fill='%23ef4444'/>
                    <circle cx='440' cy='190' r='23' fill='%23ef4444' opacity='0.9'/>
                    <circle cx='520' cy='175' r='26' fill='%23ef4444'/>
                    <circle cx='600' cy='195' r='21' fill='%23ef4444' opacity='0.8'/>
                    <text x='400' y='380' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'>SMART FARM LIVE</text>
                  </svg>
                `)}")`,
              }}
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              LIVE
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="font-mono text-xs text-gray-300">
                CAM-01 · 1920×1080 · {new Date().toLocaleTimeString("ko-KR")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 py-3 text-sm font-semibold text-emerald-800">
            <Wifi className="h-4 w-4" />
            현재 카메라 연결 상태: 정상
          </div>
          <Button className="w-full" onClick={() => setCameraOpen(false)}>
            닫기
          </Button>
        </div>
      </Dialog>
    </section>
  );
}
