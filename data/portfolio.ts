export const supportCards = [
  "+10 anos de experiencia",
  "Diversas areas: Produto, Credito, Cobranca, Atendimento e E-commerce",
  "Foco continuo: Pessoas, dados e tecnologia a servico do melhor resultado",
];

export const valueList = [
  "Conteudo e Estrategia",
  "UX Writing e Content Design",
  "Pesquisa e Testes",
  "IA Generativa e Automacao",
  "Foco em impacto",
];

export const skills = [
  "UX Writing",
  "Content Design",
  "Pesquisa",
  "Teste A/B",
  "IA Generativa",
  "Prompt Engineering",
  "n8n",
  "Codex",
  "ChatGPT",
  "Copilot",
  "Figma",
  "Miro",
  "Analise de Dados",
  "Comunicacao",
  "Storytelling",
  "Pensamento Estrategico",
  "Colaboracao",
];

type PortfolioCase = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  result: string;
  challenge: string;
  path: string;
  detailResult: string;
  extras?: string;
  showChatCta?: boolean;
};

export const cases: PortfolioCase[] = [
  {
    number: "01",
    slug: "case-emprestimo-pessoal",
    title: "+5% na Producao de Emprestimo Pessoal",
    subtitle: "Mais clareza para o cliente, mais valor para o negocio.",
    summary:
      "Pesquisa quantitativa, UX Writing e testes A/B para melhorar a compreensao da jornada de credito.",
    result: "R$ 2,5 milhoes impactados",
    challenge:
      "Compreender se clientes saiam da jornada de Emprestimo Pessoal por nao entenderem o valor a pagar.",
    path:
      "Pesquisa quantitativa com clientes sobre a literal Total a Pagar, testes A/B na plataforma IU Experimenta com literais levantadas com clientes e time de Produto.",
    detailResult:
      "Aumento de quase 1% na conversao em 3 semanas de teste. Aumento de quase 5% na producao de Emprestimo Pessoal, refletindo em aproximadamente R$ 2,5 milhoes no mesmo periodo.",
    extras:
      "Artigo Quem tem medo do Total a Pagar? no Itau Design Team Medium. Apresentacao do case para times de Recuperacao PF e Credito PJ.",
  },
  {
    number: "02",
    slug: "case-ia-design",
    title: "IA para Evidenciar Impacto de Design",
    subtitle: "Dados que conectam Design, Conteudo, Tecnologia e Produto.",
    summary:
      "Uso de IA, Copilot e Figma Make para consolidar entregas, pesquisas e interacoes entre equipes.",
    result: "3 jornadas mapeadas e 70 interacoes analisadas",
    challenge:
      "Expor a contribuicao do time de Design durante as releases em ABL CIV.",
    path:
      "Uso de IA para reunir interacoes entre os times de Design, Conteudo, Tecnologia e Produto. Estruturacao com Copilot e Figma Make para gerar um dashboard com fluxos entregues, pesquisas realizadas e media de trocas entre equipes.",
    detailResult:
      "Entrega de aproximadamente 3 jornadas completas com envolvimento da triade Produto, Conteudo e Pesquisa, resultando em cerca de 70 interacoes em media durante a segunda release de 2026.",
  },
  {
    number: "03",
    slug: "case-thali-ia",
    title: "thali.IA",
    subtitle: "Uma agente para falar sobre mim.",
    summary:
      "Agente digital criada com n8n e OpenAI para apresentar minha trajetoria profissional e habilidades.",
    result: "Evolucao pratica em automacao e IA generativa",
    challenge:
      "Criar uma agente digital para apresentar minha trajetoria profissional de forma simples, objetiva e interativa.",
    path:
      "Uso do n8n para estruturar o fluxo da agente, com prompts concisos para promover linguagem simples e uma experiencia facil para quem acessa o portfolio.",
    detailResult:
      "Aprendizado e amadurecimento pratico nas ferramentas Codex, n8n e ChatGPT.",
    showChatCta: true,
  },
];

export const timeline = [
  {
    period: "2024 - Atual",
    role: "Designer de Conteudo | Itau Unibanco",
    description:
      "Atuacao em produtos de credito no aplicativo Itau, conduzindo iniciativas de Content Design, UX Writing, pesquisa, testes A/B e evolucao de jornadas digitais orientadas por dados.",
    competencies: ["Content Design", "UX Writing", "Pesquisa", "Testes A/B", "Credito", "IA"],
  },
  {
    period: "2021 - 2023",
    role: "UX Writer | Casas Bahia Pay e Bradesco",
    description:
      "Construcao e evolucao de experiencias digitais para produtos financeiros, atuando em parceria com Produto, Design e Tecnologia.",
    competencies: ["UX Writing", "Conteudo", "Jornada do Usuario", "Produto"],
  },
  {
    period: "2012 - 2019",
    role: "Analista de Atendimento e Redes Sociais",
    description:
      "Atuacao em conteudo digital, experiencia do cliente, atendimento e operacoes de e-commerce.",
    competencies: ["Atendimento", "Redes Sociais", "Conteudo", "E-commerce"],
  },
];

export const tools = [
  { name: "Miro", src: "/images/tools/miro.png" },
  { name: "Figma", src: "/images/tools/figma.png" },
  { name: "Copilot", src: "/images/tools/copilot.png" },
  { name: "Excel", src: "/images/tools/excel.png" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.png" },
  { name: "Codex", src: "/images/tools/codex.png" },
  { name: "n8n", src: "/images/tools/n8n.png" },
];
