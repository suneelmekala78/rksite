"use client";

const items = [
  "Fasttracks Car Care",
  "Jubilee Hills",
  "Est. 2002",
  "PPF · Recliners · Audio",
  "Always bringing the fight",
  "Hyderabad",
];

export function MarqueeBand() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-accent py-4 text-black">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-3xl tracking-[0.08em] md:text-4xl">{item}</span>
            <span className="text-sm opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
