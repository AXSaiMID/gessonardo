import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gessonardo.com.br"),
  title: {
    default: "Gesso Nardo — Gesso, Forro, Sanca e Drywall em Maringá",
    template: "%s · Gesso Nardo",
  },
  description:
    "Especializados em gesso liso, forro, sanca, drywall, divisórias, molduras e decorações em geral. Qualidade e rapidez em Maringá e região. Parte do Grupo Nardo.",
  openGraph: {
    title: "Gesso Nardo — Acabamentos em gesso de alto padrão em Maringá",
    description:
      "Gesso liso, forro drywall, sancas, nichos, paredes e tetos rebaixados. Orçamento gratuito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-ink text-ivory font-sans antialiased">
        <Preloader />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
