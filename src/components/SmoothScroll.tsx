"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // lerp = interpolação contínua: fluido e responsivo (sem sensação de atraso)
      lerp: 0.14,
      // wheelMultiplier > 1 deixa a rolagem mais rápida/leve
      wheelMultiplier: 1.25,
      touchMultiplier: 1.4,
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Anchor navigation via Lenis
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.1 });
    };
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
