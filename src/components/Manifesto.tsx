"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRINCIPLES, STATS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function SplitWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (w) =>
          `<span class="inline-block overflow-hidden align-top"><span class="inline-block will-change-transform translate-y-[110%]">${w}&nbsp;</span></span>`
      )
      .join("");

    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll("span > span"), {
        yPercent: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: { trigger: el, start: "top 82%" },
      });
    });
    return () => ctx.revert();
  }, [text]);

  return <p ref={ref} className={className} />;
}

export default function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="empresa" ref={rootRef} className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <span className="eyebrow text-gold-2">01 — A empresa</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
              Ética, agilidade e <em className="text-gold-2">obsessão</em> pelo
              acabamento.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {PRINCIPLES.map((p) => (
                <span
                  key={p}
                  className="border border-gold/40 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-2"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <SplitWords
            className="font-display text-[clamp(1.6rem,3.4vw,3rem)] font-light leading-snug text-ivory/90"
            text="Somos especializados em gesso liso, forro, sanca, drywall, divisórias, molduras e decorações em geral. Atendemos com respeito, qualidade e honestidade — e nos destacamos pela rapidez de cada entrega em Maringá e região."
          />
          <SplitWords
            className="mt-10 text-lg leading-relaxed text-muted"
            text="Confie seu projeto a quem entende de acabamento: experiência e competência para fazer o que há de melhor em gesso, com um visual moderno que valoriza ainda mais o seu ambiente."
          />

          <div className="stats-grid mt-20 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="stat-item group bg-ink p-7 transition-colors duration-500 hover:bg-card"
              >
                <span className="font-display text-4xl font-semibold text-gold-2 transition-colors group-hover:text-gold-3 md:text-5xl">
                  {s.value}
                </span>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
