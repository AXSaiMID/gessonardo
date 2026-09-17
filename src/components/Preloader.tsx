"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { n: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.add("is-loaded");
          window.dispatchEvent(new Event("loader:done"));
          setDone(true);
        },
      });

      tl.to(counter, {
        n: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current)
            countRef.current.textContent = String(
              Math.round(counter.n)
            ).padStart(3, "0");
        },
      })
        .fromTo(
          barRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.2, ease: "power2.inOut" },
          0
        )
        .to(".pre-item", {
          yPercent: -120,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.in",
        })
        .to(
          rootRef.current,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
          },
          "+=0.1"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 md:px-12 md:py-10"
      aria-hidden="true"
    >
      <div className="pre-item flex items-center justify-between">
        <span className="eyebrow text-gold">Grupo Nardo</span>
        <span className="eyebrow text-muted">Maringá — PR</span>
      </div>

      <div className="pre-item flex items-end justify-center overflow-hidden">
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-semibold leading-none tracking-tight text-ivory">
          Gesso <span className="italic gold-gradient-text">Nardo</span>
        </h1>
      </div>

      <div className="pre-item">
        <div className="mb-4 h-px w-full bg-line">
          <div
            ref={barRef}
            className="h-px w-full origin-left bg-gold"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <div className="flex items-end justify-between">
          <span className="eyebrow text-muted">acabamentos em gesso</span>
          <span
            ref={countRef}
            className="font-display text-4xl font-light text-gold tabular-nums"
          >
            000
          </span>
        </div>
      </div>
    </div>
  );
}
