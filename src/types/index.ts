export type FarmStatus = "available" | "closing";

export interface Farm {
  id: string;
  region: string;
  name: string;
  crop: string;
  experience: string;
  benefits: string;
  status: FarmStatus;
  statusLabel: string;
  price: number;
  mapX: number;
  mapY: number;
  nearbyInfo: string;
}

export interface CropStatus {
  crop: string;
  farmName: string;
  region: string;
  growthStage: string;
  temperature: number;
  humidity: number;
  soilMoisture: number;
  harvestDate: string;
  nextVisit: string;
  cameraTitle: string;
}

export interface TourismSpot {
  id: string;
  region: string;
  name: string;
  description: string;
  benefit: string;
  linkedFarm: string;
  couponId: string;
}

export interface Coupon {
  id: string;
  name: string;
  region: string;
  linkedFarm: string;
  expiry: string;
  initial?: boolean;
}

export interface RegionCourse {
  region: string;
  steps: string[];
}

export interface ServiceFlowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface VoteOption {
  id: string;
  label: string;
  emoji: string;
}
