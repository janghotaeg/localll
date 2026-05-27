import { useState } from "react";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { FARMS, REGION_COURSES, SECTION_SUBTITLES } from "@/data/mockData";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Farm } from "@/types";
import { cn } from "@/lib/utils";

export function MapSection() {
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(FARMS[0]);

  return (
    <section className="py-10">
      <SectionHeading
        id="map"
        title="지도 보기"
        subtitle={SECTION_SUBTITLES.map}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3 overflow-hidden">
          <CardHeader className="border-b border-emerald-100 bg-emerald-50/50 pb-4">
            <CardTitle className="flex items-center gap-2 text-base">
              <Navigation className="h-5 w-5 text-emerald-600" />
              충청남도 스마트팜 지도
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-[4/3] min-h-[320px] bg-gradient-to-br from-emerald-100 via-sky-50 to-amber-50 sm:min-h-[400px]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full p-4"
                aria-label="충남 지역 더미 지도"
              >
                <path
                  d="M15 25 L45 15 L75 20 L88 45 L82 75 L55 88 L25 82 L12 55 Z"
                  fill="#bbf7d0"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                <path
                  d="M20 30 L42 22 L68 28 L78 48 L72 68 L48 78 L28 72 L18 50 Z"
                  fill="#dcfce7"
                  stroke="#22c55e"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />
                <text x="50" y="8" textAnchor="middle" className="fill-emerald-800 text-[4px] font-bold">
                  충청남도
                </text>
                {[
                  { x: 62, y: 38, label: "논산" },
                  { x: 28, y: 52, label: "공주" },
                  { x: 48, y: 22, label: "아산" },
                  { x: 35, y: 68, label: "부여" },
                ].map((city) => (
                  <text
                    key={city.label}
                    x={city.x}
                    y={city.y - 6}
                    textAnchor="middle"
                    className="fill-gray-600 text-[3px] font-medium"
                  >
                    {city.label}
                  </text>
                ))}
              </svg>

              {FARMS.map((farm) => {
                const isSelected = selectedFarm?.id === farm.id;
                return (
                  <button
                    key={farm.id}
                    type="button"
                    onClick={() => setSelectedFarm(farm)}
                    className="absolute -translate-x-1/2 -translate-y-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full"
                    style={{ left: `${farm.mapX}%`, top: `${farm.mapY}%` }}
                    aria-label={`${farm.name} 위치`}
                  >
                    <span
                      className={cn(
                        "flex flex-col items-center",
                        isSelected && "scale-110"
                      )}
                    >
                      <MapPin
                        className={cn(
                          "h-10 w-10 drop-shadow-lg",
                          isSelected
                            ? "fill-emerald-600 text-emerald-700"
                            : "fill-emerald-500 text-emerald-600"
                        )}
                      />
                      {isSelected && (
                        <span className="mt-0.5 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-emerald-800 shadow-md sm:text-xs">
                          {farm.region.split(" ")[1]}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedFarm && (
              <div className="border-t border-emerald-100 bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-gray-900">{selectedFarm.name}</h4>
                    <p className="text-sm text-gray-500">
                      대표 작물: {selectedFarm.crop}
                    </p>
                  </div>
                  <Badge
                    variant={
                      selectedFarm.status === "closing" ? "warning" : "default"
                    }
                  >
                    {selectedFarm.statusLabel}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-emerald-700">
                    주변 관광/축제:{" "}
                  </span>
                  {selectedFarm.nearbyInfo}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-gray-900">지역별 추천 코스</h3>
          {REGION_COURSES.map((course) => (
            <Card key={course.region} className="border-emerald-100">
              <CardContent className="p-4">
                <p className="mb-3 font-bold text-emerald-800">{course.region} 코스</p>
                <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm">
                  {course.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-1">
                      <span className="rounded-xl bg-emerald-50 px-2.5 py-1.5 font-medium text-gray-700">
                        {step}
                      </span>
                      {i < course.steps.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      )}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
