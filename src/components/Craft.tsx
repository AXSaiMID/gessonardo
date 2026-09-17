"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Craft() {
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -14 },
        {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[92vh] min-h-[560px] overflow-hidden"
    >
      <div ref={imgRef} className="absolute inset-[-14%] will-change-transform">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/img/maos.jpg)" }}
        />
      </div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow text-gold-2">03 — Ofício</span>
        <p className="mt-8 max-w-4xl font-display text-[clamp(1.9rem,4.6vw,4.2rem)] font-light leading-tight text-ivory">
          “Amor e dedicação ao que fazemos.
          <em className="gold-gradient-text"> O acabamento é a nossa assinatura.</em>”
        </p>
        <span className="mt-10 h-px w-24 bg-gold" />
        <span className="mt-6 eyebrow text-muted">
          Gesso Nardo · Maringá & região
        </span>
      </div>
    </section>
  );
}
