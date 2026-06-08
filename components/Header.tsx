"use client";

import { useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Impacto", href: "#impacto" },
  { label: "Evolução", href: "#evolucao" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#inicio" aria-label="Thalita Gonçalves">
          TG<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={isOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="header-button" href="#contato" onClick={() => setIsOpen(false)}>
            Vamos conversar
          </a>
        </nav>
      </div>
    </header>
  );
}
