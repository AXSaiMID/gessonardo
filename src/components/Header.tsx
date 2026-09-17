"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#obras", label: "Obras" },
  { href: "#grupo", label: "Grupo Nardo" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 0.3,
        },
      });
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* gold scroll progress */}
      <div
        ref={barRef}
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gold"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#topo" className="group flex items-baseline gap-2" data-hover>
          <span className="font-display text-2xl font-semibold text-ivory">
            Gesso<span className="italic text-gold-2">Nardo</span>
          </span>
          <span className="hidden eyebrow text-muted sm:inline">
            · Maringá
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-hover
              className="link-line eyebrow text-ivory/80 transition-colors hover:text-gold-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${COMPANY.phones[0].wa}`}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group relative overflow-hidden border border-gold/60 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-gold-2 transition-colors duration-300 hover:text-ink"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-gold transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10">Orçamento</span>
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label="Menu"
          data-hover
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-gold transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden ${open ? "max-h-[420px]" : "max-h-0"} overflow-hidden border-b border-line bg-ink/95 backdrop-blur-md transition-all duration-500`}
      >
        <nav className="flex flex-col gap-5 px-6 py-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ivory hover:italic hover:text-gold-2"
            >
              <span className="mr-3 text-sm text-gold">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${COMPANY.phones[0].wa}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 border border-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold-2"
          >
            Pedir orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
