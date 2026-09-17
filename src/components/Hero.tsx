"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: image scales/scrolls slower, content fades up
      gsap.to(imgRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(contentRef.current, {
        yPercent: -18,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="topo"
      ref={rootRef}
      className="relative flex h-svh min-h-[640px] flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/img/hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Meta topo */}
      <div className="absolute left-0 right-0 top-24 z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <span className="mask-line eyebrow text-gold-2">
          <span style={{ transitionDelay: "0.1s" }}>{COMPANY.tagline}</span>
        </span>
        <span className="mask-line eyebrow hidden text-ivory/70 md:block">
          <span style={{ transitionDelay: "0.2s" }}>{COMPANY.city}</span>
        </span>
      </div>

      {/* Conteúdo principal */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 md:px-10 md:pb-28"
      >
        <p className="mask-line mb-6 eyebrow text-gold-2">
          <span style={{ transitionDelay: "0.15s" }}>
            Estúdio de acabamentos em gesso — desde o projeto até a luz
          </span>
        </p>

        <h1 className="font-display font-semibold leading-[0.92] tracking-tight text-ivory">
          <span className="mask-line text-[clamp(3.4rem,11vw,10.5rem)]">
            <span style={{ transitionDelay: "0.25s" }}>A forma</span>
          </span>
          <span className="mask-line text-[clamp(3.4rem,11vw,10.5rem)]">
            <span style={{ transitionDelay: "0.38s" }}>
              da <em className="gold-gradient-text">luz</em>
            </span>
          </span>
          <span className="mask-line text-[clamp(3.4rem,11vw,10.5rem)]">
            <span style={{ transitionDelay: "0.5s" }}>
              é feita de <span className="text-stroke-gold">gesso</span>.
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <p className="mask-line max-w-md text-sm leading-relaxed text-ivory/70 md:text-base">
            <span style={{ transitionDelay: "0.65s" }}>
              Forros, sancas, nichos e drywall executados com precisão de
              ateliê em Maringá e região. Parte do Grupo Nardo.
            </span>
          </p>

          <div className="mask-line" >
            <span
              style={{ transitionDelay: "0.75s" }}
              className="flex items-center gap-4"
            >
              <a
                href="#servicos"
                data-hover
                className="group relative overflow-hidden border border-gold bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-ink"
              >
                <span className="absolute inset-0 translate-y-full bg-ivory transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative">Ver serviços</span>
              </a>
              <a
                href="#obras"
                data-hover
                className="link-line eyebrow text-ivory/80"
              >
                Obras ↓
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="mask-line">
          <span
            style={{ transitionDelay: "0.9s" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="eyebrow text-muted">role</span>
            <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
          </span>
        </div>
      </div>
    </section>
  );
}
