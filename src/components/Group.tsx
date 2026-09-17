"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GROUP, COMPANY } from "@/lib/data";
import { asset } from "@/lib/base";

gsap.registerPlugin(ScrollTrigger);

export default function Group() {
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".group-card", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".group-grid", start: "top 85%" },
      });
      gsap.fromTo(
        imgRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".maringa-band",
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
    <section id="grupo" ref={rootRef} className="relative">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-gold-2">05 — Grupo Nardo</span>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] text-ivory">
              Uma família,
              <br />
              cinco <em className="gold-gradient-text">ofícios</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A Gesso Nardo faz parte de um grupo que cuida da sua casa de
            ponta a ponta — do gesso ao granito, do clima aos planejados.
          </p>
        </div>

        <div className="group-grid grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {GROUP.map((g, i) => (
            <div
              key={g.name}
              className={`group-card group relative p-8 transition-colors duration-500 md:p-10 ${
                i === 0
                  ? "bg-card"
                  : "bg-ink hover:bg-card"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-semibold text-stroke-gold">
                  0{i + 1}
                </span>
                <span className="eyebrow text-muted">{g.tag}</span>
              </div>
              <h3
                className={`mt-10 font-display text-3xl font-semibold ${
                  i === 0 ? "gold-gradient-text" : "text-ivory"
                }`}
              >
                {g.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {g.desc}
              </p>
              {i === 0 && (
                <span className="mt-6 inline-block border border-gold/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gold-2">
                  Você está aqui
                </span>
              )}
            </div>
          ))}

          {/* Card de contato do grupo */}
          <a
            href={`https://wa.me/${COMPANY.groupPhone.wa}`}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group-card group flex flex-col justify-between bg-gold p-8 text-ink transition-colors duration-500 hover:bg-gold-2 md:p-10"
          >
            <span className="eyebrow">Fale com o grupo</span>
            <div>
              <p className="font-display text-3xl font-semibold leading-tight">
                Um número, todas as soluções.
              </p>
              <p className="mt-4 font-display text-2xl font-semibold">
                {COMPANY.groupPhone.label}
              </p>
            </div>
            <span className="mt-8 block h-px w-12 bg-ink transition-all duration-500 group-hover:w-24" />
          </a>
        </div>
      </div>

      {/* Faixa Maringá */}
      <div className="maringa-band relative h-[64vh] min-h-[420px] overflow-hidden">
        <div ref={imgRef} className="absolute inset-[-12%] will-change-transform">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${asset("/img/maringa.jpg")}?v=2)` }}
          />
        </div>
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <p className="text-center font-display text-[clamp(1.6rem,4vw,3.4rem)] font-light leading-tight text-ivory">
            Feito em <em className="gold-gradient-text">Maringá</em>,<br />
            para Maringá e região.
          </p>
        </div>
      </div>
    </section>
  );
}
