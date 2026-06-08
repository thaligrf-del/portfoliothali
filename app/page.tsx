import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  cases,
  skills,
  supportCards,
  timeline,
  tools,
  valueList,
} from "@/data/portfolio";
import { AssetImage } from "@/components/AssetImage";
import { ThaliAIChat } from "@/components/ThaliAIChat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section" id="sobre">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Sobre</p>
              <h2>Sobre mim</h2>
              <p className="section-lead">
                Sou analista de experiencia com foco em conteudo, pesquisa e
                estrategia. Atuo na criacao de solucoes que unem dados,
                linguagem e design para gerar impacto real na vida das pessoas
                e nos resultados do negocio.
              </p>
              <div className="support-grid">
                {supportCards.map((card) => (
                  <article className="small-card" key={card}>
                    <span>{card}</span>
                  </article>
                ))}
              </div>
            </div>
            <aside className="about-list" aria-label="Areas de atuacao">
              {valueList.map((item) => (
                <div className="check-item" key={item}>
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section soft-section" id="habilidades">
          <div className="container">
            <p className="eyebrow">Competencias</p>
            <h2>Habilidades</h2>
            <div className="pill-grid" aria-label="Lista de habilidades">
              {skills.map((skill) => (
                <span className="pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="impacto">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Cases</p>
                <h2>Impacto em Negocios</h2>
              </div>
              <p>Cases que geraram valor real para pessoas e para o negocio.</p>
            </div>
            <div className="case-grid">
              {cases.map((item) => (
                <article className="case-card" key={item.slug}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <div className="case-result">
                    <span>Resultado</span>
                    <strong>{item.result}</strong>
                  </div>
                  <a className="text-link" href={`#${item.slug}`}>
                    Exibir case
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section case-details" aria-label="Detalhamento dos cases">
          <div className="container detail-stack">
            {cases.map((item) => (
              <article className="detail-card" id={item.slug} key={item.slug}>
                <div className="detail-intro">
                  <p className="eyebrow">Case {item.number}</p>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
                <div className="detail-content">
                  <div>
                    <h3>Desafio</h3>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <h3>Caminho</h3>
                    <p>{item.path}</p>
                  </div>
                  <div>
                    <h3>Resultado</h3>
                    <p>{item.detailResult}</p>
                  </div>
                  {item.extras ? (
                    <div>
                      <h3>Extras</h3>
                      <p>{item.extras}</p>
                    </div>
                  ) : null}
                  {item.showChatCta ? (
                    <a className="button button-secondary" href="#thali-ia">
                      Conversar no mini chat
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="thali-ia">
          <div className="container ai-card">
            <div className="ai-intro">
              <div className="robot-icon" aria-hidden="true">
                <span>IA</span>
              </div>
              <div>
                <p className="eyebrow">Agente digital</p>
                <h2>Conheca a thali.IA</h2>
                <p>
                  Uma agente digital criada no n8n para apresentar minha
                  trajetoria profissional, experiencias, habilidades, formacao e
                  projetos com inteligencia artificial.
                </p>
              </div>
            </div>
            <ThaliAIChat />
          </div>
        </section>

        <section className="section soft-section" id="evolucao">
          <div className="container">
            <p className="eyebrow">Carreira</p>
            <h2>Evolucao Profissional</h2>
            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.period}>
                  <time>{item.period}</time>
                  <div className="timeline-card">
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                    <div className="mini-pills">
                      {item.competencies.map((competency) => (
                        <span key={competency}>{competency}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="ferramentas">
          <div className="container">
            <p className="eyebrow">Stack</p>
            <h2>Ferramentas</h2>
            <div className="tools-grid">
              {tools.map((tool) => (
                <article className="tool-card" key={tool.name}>
                  <AssetImage
                    src={tool.src}
                    alt={`Logo ${tool.name}`}
                    className="tool-logo"
                    fallback={<span>{tool.name.charAt(0)}</span>}
                  />
                  <p>{tool.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-card">
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar?</h2>
            <p>Estou aberta a novos desafios e oportunidades.</p>
            <div className="contact-links">
              <a href="mailto:vamo@thaligoncalves.com.br">
                E-mail: vamo@thaligoncalves.com.br
              </a>
              <a
                href="https://linkedin.com/in/thaligoncalves"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: linkedin.com/in/thaligoncalves
              </a>
            </div>
            <a className="button" href="mailto:vamo@thaligoncalves.com.br">
              Vamos conversar
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
