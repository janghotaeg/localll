export function QrPlaceholder({ seed }: { seed: string }) {
  const cells = Array.from({ length: 64 }, (_, i) => {
    const hash = (seed.charCodeAt(i % seed.length) + i * 7) % 3;
    return hash !== 0;
  });

  return (
    <div
      className="grid h-20 w-20 shrink-0 grid-cols-8 gap-0.5 rounded-xl border-2 border-gray-200 bg-white p-1.5"
      aria-hidden
    >
      {cells.map((filled, i) => (
        <div
          key={i}
          className={filled ? "bg-gray-900" : "bg-white"}
        />
      ))}
    </div>
  );
}
