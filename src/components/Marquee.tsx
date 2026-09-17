"use client";

import { SPECIALTIES } from "@/lib/data";

export default function Marquee() {
  const items = [...SPECIALTIES, ...SPECIALTIES];
  return (
    <div className="relative overflow-hidden border-y border-line bg-coal py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={`font-display text-2xl md:text-3xl ${
                i % 2 === 0
                  ? "italic text-gold-2"
                  : "text-stroke-ivory font-semibold"
              }`}
            >
              {s}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
