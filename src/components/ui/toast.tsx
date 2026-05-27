import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

export function Toast({ message, open, onClose }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3",
        "rounded-2xl border border-emerald-200 bg-white px-5 py-4 shadow-xl"
      )}
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
      <p className="text-sm font-medium text-gray-800">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 rounded-full p-1 hover:bg-gray-100"
        aria-label="닫기"
      >
        <X className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  );
}
