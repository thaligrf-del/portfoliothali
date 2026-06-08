import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thalita Gonçalves | Portfólio",
  description:
    "Portfólio profissional de Thalita Gonçalves, Analista de Experiência, Conteúdo e Estratégia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
