"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES, COMPANY } from "@/lib/data";
import { asset } from "@/lib/base";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.93,
          yPercent: -4,
          filter: "brightness(0.45)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top 14%",
            scrub: true,
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" ref={rootRef} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <div>
            <span className="eyebrow text-gold-2">02 — Serviços</span>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] text-ivory">
              O que sai das
              <br />
              nossas <em className="gold-gradient-text">mãos</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Do forro ao nicho, cada serviço é executado com limpeza, prazo e
            acabamento de alto padrão.{" "}
            <a
              href={`https://wa.me/${COMPANY.phones[0].wa}`}
              target="_blank"
              rel="noreferrer"
              className="link-line text-gold-2"
              data-hover
            >
              Orçamento gratuito
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="stack-card sticky top-[10vh] grid min-h-[76vh] overflow-hidden border border-line bg-card will-change-transform md:grid-cols-2"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative min-h-[300px] overflow-hidden md:min-h-full">
                <Image
                  src={asset(s.img)}
                  alt={s.title}
                  fill
                  priority={i < 2}
                  className="object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute left-6 top-6 font-display text-6xl font-semibold text-stroke-gold">
                  {s.id}
                </span>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <span className="eyebrow text-gold-2">{s.subtitle}</span>
                  <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-6 max-w-md leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted">
                    Gesso Nardo
                  </span>
                  <a
                    href={`https://wa.me/${COMPANY.phones[0].wa}?text=${encodeURIComponent(
                      `Olá! Tenho interesse em ${s.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-2"
                  >
                    Solicitar
                    <span className="block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
