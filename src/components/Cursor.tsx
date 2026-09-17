"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("has-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const x = { dx: innerWidth / 2, dy: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2 };

    const move = (e: MouseEvent) => {
      x.dx = e.clientX;
      x.dy = e.clientY;
    };

    const loop = () => {
      x.rx += (x.dx - x.rx) * 0.14;
      x.ry += (x.dy - x.ry) * 0.14;
      gsap.set(dot, { x: x.dx, y: x.dy });
      gsap.set(ring, { x: x.rx, y: x.ry });
    };
    gsap.ticker.add(loop);

    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        "a, button, [data-hover]"
      );
      gsap.to(ring, {
        scale: t ? 2.4 : 1,
        borderColor: t ? "rgba(230,193,90,0.9)" : "rgba(230,193,90,0.45)",
        duration: 0.35,
      });
      gsap.to(dot, { scale: t ? 0.4 : 1, duration: 0.35 });
    };

    const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    const onEnter = () => gsap.to([dot, ring], { opacity: 1, duration: 0.3 });

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      gsap.ticker.remove(loop);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[96] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-gold-2"
        style={{ opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[95] -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border"
        style={{ opacity: 0, borderColor: "rgba(230,193,90,0.45)" }}
      />
    </>
  );
}
