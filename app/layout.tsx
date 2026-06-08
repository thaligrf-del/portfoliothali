import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thalita Goncalves | Portfolio",
  description:
    "Portfolio profissional de Thalita Goncalves, Analista de Experiencia, Conteudo e Estrategia.",
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
