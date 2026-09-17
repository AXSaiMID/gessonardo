# Gesso Nardo — Site Institucional

Site cinematográfico (dark + dourado) para a **Gesso Nardo**, empresa de acabamentos
em gesso de Maringá/PR, parte do **Grupo Nardo**.

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS 4**
- **GSAP** + **ScrollTrigger** para animações (preloader, parallax, reveals, stacked cards)
- **Lenis** para scroll suave cinematográfico
- Fontes auto-hospedadas via **@fontsource** (Fraunces + Inter) — sem dependência de CDN

## Destaques da experiência

- Preloader com contador e reveal da marca
- Cursor personalizado (dot + anel dourado que reage a hover)
- Scroll suave com Lenis sincronizado ao ScrollTrigger
- Tipografia editorial gigante com line-mask reveal
- Cards de serviços **empilhados com `position: sticky`** e scale ao rolar
- Parallax em seções de imagem (ofício + Maringá)
- Marquee de especialidades, grain de filme e vinheta para clima de cinema
- Barra de progresso dourada, menu mobile, CTAs de WhatsApp e orçamento

## Conteúdo real integrado

Textos, serviços, telefones, e-mail, endereço, horários e empresas do grupo foram
coletados dos sites oficiais `gessonardo.com.br` e `gruponardo.com.br`, do Google
Maps e do Instagram `@gruponardomaringa`.

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
# ou
npm run build && npm run start   # produção
```

## Estrutura

- `src/app` — layout e página
- `src/components` — Preloader, Cursor, SmoothScroll (Lenis), Header, Hero, Marquee,
  Manifesto, Services (stacked cards), Craft, Works, Group, Contact, Footer
- `src/lib/data.ts` — todo o conteúdo da empresa centralizado
- `public/img` — imagens cinematográficas do site
