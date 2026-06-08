import { AssetImage } from "@/components/AssetImage";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="intro">Ola, eu sou</p>
          <h1>Thalita Goncalves</h1>
          <p className="hero-role">Analista de Experiencia | Conteudo e Estrategia</p>
          <p className="hero-text">
            Transformo dados, conteudo e inteligencia artificial em experiencias
            digitais mais simples, acessiveis e eficientes.
          </p>
          <div className="badge-row" aria-label="Destaques">
            <span>Programa PRAD</span>
            <span>Foco em impacto</span>
          </div>
          <a className="button" href="#contato">
            Vamos conversar
          </a>
        </div>
        <div className="hero-visual" aria-label="Imagem de Thalita Goncalves">
          <div className="dot-pattern dot-pattern-one" aria-hidden="true" />
          <div className="dot-pattern dot-pattern-two" aria-hidden="true" />
          <div className="hero-shape" />
          <AssetImage
            src="/images/thalita-hero.png"
            alt="Retrato ilustrado de Thalita Goncalves"
            className="hero-image"
            fallback={<span>TG</span>}
          />
        </div>
      </div>
    </section>
  );
}
