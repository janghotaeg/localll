import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/mockData";

interface ServiceNavProps {
  activeId?: string;
}

export function ServiceNav({ activeId }: ServiceNavProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-[57px] z-30 border-b border-emerald-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
        <ul className="flex gap-1 py-2 min-w-max">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "whitespace-nowrap rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors",
                  activeId === item.id
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
