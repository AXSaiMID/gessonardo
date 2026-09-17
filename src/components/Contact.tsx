"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-line > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        }
      );
      gsap.from(".contact-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 85%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contato" ref={rootRef} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <span className="eyebrow text-gold-2">06 — Contato</span>

        <h2 className="mt-8 font-display font-semibold leading-[0.95] text-ivory">
          <span className="contact-line block overflow-hidden text-[clamp(3rem,9.5vw,9rem)]">
            <span>Vamos dar forma</span>
          </span>
          <span className="contact-line block overflow-hidden text-[clamp(3rem,9.5vw,9rem)]">
            <span>
              à sua <em className="gold-gradient-text">próxima obra?</em>
            </span>
          </span>
        </h2>

        <div className="contact-grid mt-20 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          <a
            href={`https://wa.me/${COMPANY.phones[0].wa}`}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="contact-item group bg-ink p-8 transition-colors duration-500 hover:bg-card"
          >
            <span className="eyebrow text-muted">WhatsApp</span>
            <p className="mt-6 font-display text-2xl font-semibold text-gold-2 transition-colors group-hover:text-gold-3">
              {COMPANY.phones[0].label}
            </p>
            <p className="mt-2 text-sm text-muted">{COMPANY.phones[1].label}</p>
          </a>

          <a
            href={`mailto:${COMPANY.email}`}
            data-hover
            className="contact-item group bg-ink p-8 transition-colors duration-500 hover:bg-card"
          >
            <span className="eyebrow text-muted">E-mail</span>
            <p className="mt-6 break-all font-display text-2xl font-semibold text-ivory transition-colors group-hover:text-gold-2">
              {COMPANY.email}
            </p>
          </a>

          <a
            href={COMPANY.maps}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="contact-item group bg-ink p-8 transition-colors duration-500 hover:bg-card"
          >
            <span className="eyebrow text-muted">Endereço</span>
            <p className="mt-6 font-display text-xl font-semibold leading-snug text-ivory group-hover:text-gold-2">
              {COMPANY.address}
            </p>
            <p className="mt-2 text-sm text-muted">{COMPANY.zip}</p>
          </a>

          <div className="contact-item bg-ink p-8">
            <span className="eyebrow text-muted">Horário</span>
            <p className="mt-6 font-display text-xl font-semibold leading-snug text-ivory">
              {COMPANY.hours}
            </p>
            <a
              href={COMPANY.instagram.url}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="link-line mt-6 inline-block text-sm text-gold-2"
            >
              {COMPANY.instagram.handle}
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={`https://wa.me/${COMPANY.phones[0].wa}?text=${encodeURIComponent(
              "Olá! Quero um orçamento gratuito com a Gesso Nardo."
            )}`}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group relative overflow-hidden border border-gold bg-gold px-12 py-6 text-sm font-semibold uppercase tracking-[0.3em] text-ink"
          >
            <span className="absolute inset-0 translate-y-full bg-ivory transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative">Pedir orçamento gratuito</span>
          </a>
        </div>
      </div>
    </section>
  );
}
