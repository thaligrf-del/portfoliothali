export const supportCards = [
  "+10 anos de experiência",
  "Diversas áreas: Produto, Crédito, Cobrança, Atendimento e E-commerce",
  "Foco contínuo: Pessoas, dados e tecnologia a serviço do melhor resultado",
];

export const valueList = [
  "Conteúdo e Estratégia",
  "UX Writing e Content Design",
  "Pesquisa e Testes",
  "IA Generativa e Automação",
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
  "Análise de Dados",
  "Comunicação",
  "Storytelling",
  "Pensamento Estratégico",
  "Colaboração",
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
  externalUrl?: string;
  showChatCta?: boolean;
};

export const cases: PortfolioCase[] = [
  {
    number: "01",
    slug: "case-emprestimo-pessoal",
    title: "+5% na Produção de Empréstimo Pessoal",
    subtitle: "Mais clareza para o cliente, mais valor para o negócio.",
    summary:
      "Pesquisa quantitativa, UX Writing e testes A/B para melhorar a compreensão da jornada de crédito.",
    result: "R$ 2,5 milhões impactados",
    challenge:
      "Compreender se clientes saíam da jornada de Empréstimo Pessoal por não entenderem o valor a pagar.",
    path:
      "Pesquisa quantitativa com clientes sobre a literal Total a Pagar, testes A/B na plataforma IU Experimenta com literais levantadas com clientes e time de Produto.",
    detailResult:
      "Aumento de quase 1% na conversão em 3 semanas de teste. Aumento de quase 5% na produção de Empréstimo Pessoal, refletindo em aproximadamente R$ 2,5 milhões no mesmo período.",
    extras:
      "Artigo Quem tem medo do Total a Pagar? no Itaú Design Team Medium. Apresentação do case para times de Recuperação PF e Crédito PJ.",
    externalUrl:
      "https://medium.com/itaudesign/quem-tem-medo-do-total-a-pagar-796fa585859b",
  },
  {
    number: "02",
    slug: "case-ia-design",
    title: "IA para Evidenciar Impacto de Design",
    subtitle: "Dados que conectam Design, Conteúdo, Tecnologia e Produto.",
    summary:
      "Uso de IA, Copilot e Figma Make para consolidar entregas, pesquisas e interações entre equipes.",
    result: "3 jornadas mapeadas e 70 interações analisadas",
    challenge:
      "Expor a contribuição do time de Design durante as releases em ABL CIV.",
    path:
      "Uso de IA para reunir interações entre os times de Design, Conteúdo, Tecnologia e Produto. Estruturação com Copilot e Figma Make para gerar um dashboard com fluxos entregues, pesquisas realizadas e média de trocas entre equipes.",
    detailResult:
      "Entrega de aproximadamente 3 jornadas completas com envolvimento da tríade Produto, Conteúdo e Pesquisa, resultando em cerca de 70 interações em média durante a segunda release de 2026.",
  },
  {
    number: "03",
    slug: "case-thali-ia",
    title: "thali.IA",
    subtitle: "Uma agente para falar sobre mim.",
    summary:
      "Agente digital criada com n8n e OpenAI para apresentar minha trajetória profissional e habilidades.",
    result: "Evolução prática em automação e IA generativa",
    challenge:
      "Criar uma agente digital para apresentar minha trajetória profissional de forma simples, objetiva e interativa.",
    path:
      "Uso do n8n para estruturar o fluxo da agente, com prompts concisos para promover linguagem simples e uma experiência fácil para quem acessa o portfólio.",
    detailResult:
      "Aprendizado e amadurecimento prático nas ferramentas Codex, n8n e ChatGPT.",
    showChatCta: true,
  },
];

export const timeline = [
  {
    period: "2024 - Atual",
    role: "Designer de Conteúdo | Itaú Unibanco",
    description:
      "Atuação em produtos de crédito no aplicativo Itaú, conduzindo iniciativas de Content Design, UX Writing, pesquisa, testes A/B e evolução de jornadas digitais orientadas por dados.",
    competencies: ["Content Design", "UX Writing", "Pesquisa", "Testes A/B", "Crédito", "IA"],
  },
  {
    period: "2021 - 2023",
    role: "UX Writer | Casas Bahia Pay e Bradesco",
    description:
      "Construção e evolução de experiências digitais para produtos financeiros, atuando em parceria com Produto, Design e Tecnologia.",
    competencies: ["UX Writing", "Conteúdo", "Jornada do Usuário", "Produto"],
  },
  {
    period: "2012 - 2019",
    role: "Analista de Atendimento e Redes Sociais",
    description:
      "Atuação em conteúdo digital, experiência do cliente, atendimento e operações de e-commerce.",
    competencies: ["Atendimento", "Redes Sociais", "Conteúdo", "E-commerce"],
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
