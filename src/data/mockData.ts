import type {
  Coupon,
  CropStatus,
  Farm,
  RegionCourse,
  ServiceFlowStep,
  TourismSpot,
  VoteOption,
} from "@/types";

export const BRAND = {
  name: "팜로컬",
  tagline: "스마트팜 체험하고, 지역까지 즐기는 주말 로컬 플랫폼",
} as const;

export const SECTION_SUBTITLES = {
  home: "스마트팜 체험이 지역 여행으로 이어집니다.",
  status: "내 작물의 상태를 실시간으로 확인하세요.",
  farms: "원하는 지역의 스마트팜을 선택하고 체험을 신청하세요.",
  map: "농장 위치와 주변 관광 코스를 한눈에 확인하세요.",
  tourism: "체험 후 지역 혜택까지 받아보세요.",
  coupons: "받은 쿠폰으로 지역 축제, 카페, 관광지를 즐겨보세요.",
} as const;

export const SERVICE_FLOW: ServiceFlowStep[] = [
  {
    step: 1,
    title: "지역 스마트팜 선택",
    description: "충남 지역 스마트 농장을 골라보세요",
    icon: "map-pin",
  },
  {
    step: 2,
    title: "로컬 농산물 재배 체험 신청",
    description: "원하는 작물 체험을 신청하세요",
    icon: "sprout",
  },
  {
    step: 3,
    title: "웹사이트에서 작물 상태 확인",
    description: "온습도·성장 단계를 실시간 모니터링",
    icon: "monitor",
  },
  {
    step: 4,
    title: "직접 방문해 수확·체험",
    description: "농장 방문 후 수확 체험을 즐기세요",
    icon: "hand-heart",
  },
  {
    step: 5,
    title: "지역 쿠폰 받고 관광·소비",
    description: "축제·카페·관광 할인권으로 지역 소비",
    icon: "ticket",
  },
];

export const VOTE_OPTIONS: VoteOption[] = [
  { id: "yes", label: "해보고 싶다", emoji: "👍" },
  { id: "friends", label: "친구랑 가보고 싶다", emoji: "👫" },
  { id: "family", label: "가족이랑 가보고 싶다", emoji: "👨‍👩‍👧" },
  { id: "no", label: "별로다", emoji: "🤔" },
];

export const CURRENT_CROP: CropStatus = {
  crop: "논산 딸기",
  farmName: "논산 스마트 딸기팜",
  region: "충남 논산",
  growthStage: "개화 후 열매 성장 단계",
  temperature: 23.5,
  humidity: 61,
  soilMoisture: 48,
  harvestDate: "2026년 6월 15일",
  nextVisit: "이번 주 토요일",
  cameraTitle: "논산 딸기 스마트팜 실시간 화면",
};

export const FARMS: Farm[] = [
  {
    id: "nonsan",
    region: "충남 논산",
    name: "논산 스마트 딸기팜",
    crop: "딸기",
    experience:
      "딸기 생육 관찰, 수확 체험, 스마트팜 온습도 관리 체험",
    benefits: "논산 딸기축제 할인권, 논산 지역화폐 3,000원",
    status: "available",
    statusLabel: "신청 가능",
    price: 15000,
    mapX: 62,
    mapY: 38,
    nearbyInfo: "논산 딸기축제, 지역 카페, 로컬푸드 매장",
  },
  {
    id: "gongju",
    region: "충남 공주",
    name: "공주 알밤 스마트팜",
    crop: "밤",
    experience: "밤 재배 체험, 알밤 가공 체험, 지역 관광 연계",
    benefits: "알밤 가공 체험권, 공주 관광지 할인권",
    status: "available",
    statusLabel: "신청 가능",
    price: 12000,
    mapX: 28,
    mapY: 52,
    nearbyInfo: "알밤 가공 체험, 공주 관광지, 지역 음식점",
  },
  {
    id: "asan",
    region: "충남 아산",
    name: "아산 로컬 채소팜",
    crop: "상추, 쪽파, 로컬 채소",
    experience: "채소 재배, 수확 체험, 외암민속마을 연계 관광",
    benefits: "외암민속마을 할인권, 지역 카페 쿠폰",
    status: "available",
    statusLabel: "신청 가능",
    price: 10000,
    mapX: 48,
    mapY: 22,
    nearbyInfo: "외암민속마을, 지역 카페, 로컬푸드 직매장",
  },
  {
    id: "buyeo",
    region: "충남 부여",
    name: "부여 토마토 스마트팜",
    crop: "토마토",
    experience: "토마토 생육 확인, 수확 체험, 로컬푸드 구매 연계",
    benefits: "로컬푸드 구매권, 부여 관광지 할인권",
    status: "closing",
    statusLabel: "마감 임박",
    price: 13000,
    mapX: 35,
    mapY: 68,
    nearbyInfo: "로컬푸드 직매장, 부여 관광지, 지역 음식점",
  },
];

export const REGION_COURSES: RegionCourse[] = [
  {
    region: "논산",
    steps: [
      "논산 스마트 딸기팜",
      "논산 딸기축제",
      "지역 카페",
      "로컬푸드 매장",
    ],
  },
  {
    region: "아산",
    steps: [
      "아산 로컬 채소팜",
      "외암민속마을",
      "지역 카페",
      "로컬푸드 직매장",
    ],
  },
  {
    region: "공주",
    steps: [
      "공주 알밤 스마트팜",
      "알밤 가공 체험",
      "공주 관광지",
      "지역 음식점",
    ],
  },
  {
    region: "부여",
    steps: [
      "부여 토마토 스마트팜",
      "로컬푸드 직매장",
      "부여 관광지",
      "지역 음식점",
    ],
  },
];

export const TOURISM_SPOTS: TourismSpot[] = [
  {
    id: "nonsan-festival",
    region: "논산",
    name: "논산 딸기축제",
    description: "논산 딸기 체험 후 방문하기 좋은 지역 대표 축제",
    benefit: "입장/체험 할인권",
    linkedFarm: "논산 스마트 딸기팜",
    couponId: "coupon-nonsan-festival",
  },
  {
    id: "oeam",
    region: "아산",
    name: "외암민속마을",
    description: "아산 로컬 채소팜 체험 후 방문 가능한 전통마을 관광지",
    benefit: "관람 할인권",
    linkedFarm: "아산 로컬 채소팜",
    couponId: "coupon-oeam",
  },
  {
    id: "gongju-chestnut",
    region: "공주",
    name: "공주 알밤 가공 체험",
    description: "공주 밤 체험 후 즐길 수 있는 지역 가공 체험 프로그램",
    benefit: "체험권 할인",
    linkedFarm: "공주 알밤 스마트팜",
    couponId: "coupon-gongju-chestnut",
  },
  {
    id: "buyeo-localfood",
    region: "부여",
    name: "부여 로컬푸드 직매장",
    description: "부여 토마토 체험 후 지역 농산물을 구매할 수 있는 로컬푸드 매장",
    benefit: "로컬푸드 구매권",
    linkedFarm: "부여 토마토 스마트팜",
    couponId: "coupon-buyeo-localfood",
  },
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    id: "coupon-nonsan-festival",
    name: "논산 딸기축제 할인권",
    region: "충남 논산",
    linkedFarm: "논산 스마트 딸기팜",
    expiry: "2026.12.31",
    initial: true,
  },
  {
    id: "coupon-nonsan-money",
    name: "논산 지역화폐 3,000원",
    region: "충남 논산",
    linkedFarm: "논산 스마트 딸기팜",
    expiry: "2026.08.31",
    initial: true,
  },
  {
    id: "coupon-oeam",
    name: "외암민속마을 관람 할인권",
    region: "충남 아산",
    linkedFarm: "아산 로컬 채소팜",
    expiry: "2026.10.31",
    initial: true,
  },
  {
    id: "coupon-asan-cafe",
    name: "아산 지역 카페 10% 할인권",
    region: "충남 아산",
    linkedFarm: "아산 로컬 채소팜",
    expiry: "2026.09.30",
    initial: true,
  },
  {
    id: "coupon-gongju-chestnut",
    name: "공주 알밤 가공 체험권",
    region: "충남 공주",
    linkedFarm: "공주 알밤 스마트팜",
    expiry: "2026.11.30",
    initial: true,
  },
  {
    id: "coupon-buyeo-localfood",
    name: "부여 로컬푸드 구매권",
    region: "충남 부여",
    linkedFarm: "부여 토마토 스마트팜",
    expiry: "2026.12.15",
    initial: true,
  },
];

export const NAV_ITEMS = [
  { id: "status", label: "현재 상태 확인" },
  { id: "farms", label: "신청 가능한 곳" },
  { id: "map", label: "지도 보기" },
  { id: "tourism", label: "지역 관광/축제" },
  { id: "coupons", label: "내 쿠폰함" },
] as const;
