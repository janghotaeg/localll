import {
  HandHeart,
  MapPin,
  Monitor,
  Sprout,
  Ticket,
} from "lucide-react";
import { SERVICE_FLOW } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  "map-pin": MapPin,
  sprout: Sprout,
  monitor: Monitor,
  "hand-heart": HandHeart,
  ticket: Ticket,
} as const;

export function ServiceFlowCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {SERVICE_FLOW.map((step) => {
        const Icon = iconMap[step.icon as keyof typeof iconMap] ?? Sprout;
        return (
          <Card
            key={step.step}
            className="relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
              {step.step}
            </div>
            <CardContent className="pt-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                <Icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{step.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
