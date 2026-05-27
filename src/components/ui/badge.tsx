import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "muted";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-emerald-100 text-emerald-800",
        variant === "success" && "bg-green-600 text-white",
        variant === "warning" && "bg-amber-100 text-amber-800",
        variant === "muted" && "bg-gray-100 text-gray-600",
        className
      )}
      {...props}
    />
  );
}
