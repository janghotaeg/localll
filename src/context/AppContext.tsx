import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { INITIAL_COUPONS } from "@/data/mockData";
import type { Coupon } from "@/types";

interface AppContextValue {
  appliedFarmIds: Set<string>;
  collectedCouponIds: Set<string>;
  applyFarm: (farmId: string) => void;
  collectCoupon: (couponId: string) => void;
  coupons: Coupon[];
  toast: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [appliedFarmIds, setAppliedFarmIds] = useState<Set<string>>(
    () => new Set(["nonsan"])
  );
  const [collectedCouponIds, setCollectedCouponIds] = useState<Set<string>>(
    () => new Set(INITIAL_COUPONS.map((c) => c.id))
  );
  const [toast, setToast] = useState<string | null>(null);

  const applyFarm = useCallback((farmId: string) => {
    setAppliedFarmIds((prev) => new Set(prev).add(farmId));
  }, []);

  const collectCoupon = useCallback((couponId: string) => {
    setCollectedCouponIds((prev) => new Set(prev).add(couponId));
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
  }, []);

  const hideToast = useCallback(() => setToast(null), []);

  const coupons = useMemo(
    () => INITIAL_COUPONS.filter((c) => collectedCouponIds.has(c.id)),
    [collectedCouponIds]
  );

  const value = useMemo(
    () => ({
      appliedFarmIds,
      collectedCouponIds,
      applyFarm,
      collectCoupon,
      coupons,
      toast,
      showToast,
      hideToast,
    }),
    [
      appliedFarmIds,
      collectedCouponIds,
      applyFarm,
      collectCoupon,
      coupons,
      toast,
      showToast,
      hideToast,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
