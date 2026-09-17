"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/lib/base";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  { img: "/img/sanca.jpg?v=2", tag: "Sanca", title: "Sanca com luz indireta — living", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { img: "/img/nicho.jpg?v=2", tag: "Nichos", title: "Nichos iluminados — estar", span: "md:col-span-5", ratio: "aspect-[4/3]" },
  { img: "/img/teto.jpg?v=2", tag: "Teto rebaixado", title: "Rebaixo com spots — home theater", span: "md:col-span-5", ratio: "aspect-[4/3]" },
  { img: "/img/hero.jpg?v=2", tag: "Iluminação", title: "Forro com perfis de LED — living", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { img: "/img/parede.jpg?v=2", tag: "Drywall", title: "Divisória pronta para acabamento", span: "md:col-span-6", ratio: "aspect-[16/10]" },
  { img: "/img/gesso-liso.jpg?v=2", tag: "Gesso liso", title: "Superfície lisa sob luz rasante", span: "md:col-span-6", ratio: "aspect-[16/10]" },
];

export default function Works() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-item").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, clipPath: "inset(12% 0 12% 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0% 0)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="obras" ref={rootRef} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-gold-2">04 — Obras & ambientes</span>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] text-ivory">
              Ambientes que
              <br />
              <span className="text-stroke-ivory">brilham</span> no escuro
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Uma amostra do padrão Gesso Nardo: luz, sombra e superfícies
            impecáveis. Siga{" "}
            <a
              href="https://www.instagram.com/gruponardomaringa/"
              target="_blank"
              rel="noreferrer"
              data-hover
              className="link-line text-gold-2"
            >
              @gruponardomaringa
            </a>{" "}
            para ver os bastidores.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {WORKS.map((w) => (
            <figure
              key={w.title}
              className={`work-item group relative overflow-hidden border border-line ${w.span}`}
            >
              <div className={`relative w-full overflow-hidden ${w.ratio}`}>
                <Image
                  src={asset(w.img)}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-16">
                <div>
                  <span className="eyebrow text-gold-2">{w.tag}</span>
                  <p className="mt-1 font-display text-xl text-ivory">
                    {w.title}
                  </p>
                </div>
                <span className="mb-1 block h-px w-10 bg-gold/70 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
