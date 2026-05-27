import { cn } from "@/lib/utils";

interface GaugeProps {
  label: string;
  value: number;
  unit?: string;
  max?: number;
  icon?: React.ReactNode;
  colorClass?: string;
}

export function Gauge({
  label,
  value,
  unit = "%",
  max = 100,
  icon,
  colorClass = "from-emerald-400 to-emerald-600",
}: GaugeProps) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium text-gray-700">
          {icon}
          {label}
        </span>
        <span className="font-bold text-emerald-700">
          {value}
          {unit}
        </span>
      </div>
      <div className="gauge-track">
        <div
          className={cn("gauge-fill bg-gradient-to-r", colorClass)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
