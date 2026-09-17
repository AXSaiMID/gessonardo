"use client";

import { COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-coal">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10 pb-16">
          <div>
            <span className="font-display text-2xl font-semibold text-ivory">
              Gesso<span className="italic text-gold-2">Nardo</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {COMPANY.tagline}. {COMPANY.address} — {COMPANY.zip}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["#empresa", "Empresa"],
              ["#servicos", "Serviços"],
              ["#obras", "Obras"],
              ["#grupo", "Grupo Nardo"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                data-hover
                className="link-line eyebrow text-ivory/70 hover:text-gold-2"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <a
              href={COMPANY.instagram.url}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="link-line eyebrow text-gold-2"
            >
              Instagram — {COMPANY.instagram.handle}
            </a>
            <a
              href={COMPANY.maps}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="link-line eyebrow text-ivory/70"
            >
              Como chegar
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
          <span className="text-xs text-muted">
            © {new Date().getFullYear()} Gesso Nardo · Grupo Nardo. Todos os
            direitos reservados.
          </span>
          <span className="eyebrow text-muted">Maringá — Paraná</span>
        </div>
      </div>

      {/* Wordmark gigante */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[clamp(4rem,14vw,15rem)] font-black leading-[0.8] tracking-tight text-stroke-ivory opacity-40"
      >
        GESSO NARDO
      </div>
    </footer>
  );
}
