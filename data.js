// ==============================
// Metadados do Curso (Módulo 1)
// ==============================
const courseMeta = {
  moduleId: "ia-academy-mod1",
  title: "Módulo 1: Desvendando a Inteligência Artificial",
  subtitle: "Uma jornada divertida para entender o que é IA, como funciona e como usar no dia a dia.",
  audience: "Crianças, adolescentes e adultos iniciantes",
  version: "1.1.0",
  locale: "pt-BR",
  // usado no painel / progresso
  xpTable: { 1: 100, 2: 150, 3: 150, 4: 200, 5: 200 },
};

// ===================================
// Config de Certificado (gerar PDF)
// ===================================
const certificateConfig = {
  enabled: true,
  title: "Certificado de Conclusão",
  courseName: "IA Academy — Módulo 1",
  issuer: "IA Academy",
  issuerSubtitle: "Programa Introdutório de Inteligência Artificial",
  signatureLabel: "Coordenação Pedagógica",
  // se usar imagem de fundo, coloque o caminho relativo aqui (ex.: "./assets/cert-bg.png")
  backgroundImage: null,
  // formatação: usa [NAME] e [DATE]
  fileNameTemplate: "certificado-[NAME].pdf",
  dateFormatOptions: { day: "2-digit", month: "2-digit", year: "numeric" }
};

// ===================================
// Dados do Curso (conteúdos)
// ===================================
const courseData = {
  title: courseMeta.title,
  description: "Uma jornada divertida para entender o que é IA, como ela funciona e como podemos usá-la no dia a dia.",
  trail: [
    {
      id: 1,
      title: "O que é essa tal de IA?",
      phase: "Fase 1",
      description: "Conceitos básicos da Inteligência Artificial e seus principais tipos.",
      xp: courseMeta.xpTable[1],
      icon: "🤖",
      content: [
        { type: "text", content: "A Inteligência Artificial (IA) é a capacidade de sistemas computacionais imitarem funções da inteligência humana, como aprender, raciocinar e resolver problemas." },
        { type: "text", content: "Principais tipos de IA:" },
        {
          type: "list",
          items: [
            "Sistemas baseados em regras: o computador segue regras pré-definidas.",
            "Aprendizado de Máquina (Machine Learning): aprende com exemplos e dados.",
            "Aprendizado Profundo (Deep Learning): usa redes neurais artificiais com muitas camadas.",
            "IA Generativa: cria conteúdos novos, como textos, imagens, músicas e código.",
            "Agentes de IA: sistemas que percebem o ambiente e agem para atingir objetivos."
          ]
        },
        { type: "text", content: "A IA já está presente no celular, nos jogos, nas redes sociais e até em carros. É uma tecnologia que vem transformando o mundo." }
      ]
    },
    {
      id: 2,
      title: "Superpoderes da IA no dia a dia",
      phase: "Fase 2",
      description: "Aplicações práticas que você provavelmente já utiliza.",
      xp: courseMeta.xpTable[2],
      icon: "⚡",
      content: [
        { type: "text", content: "Exemplos de IA no cotidiano:" },
        { type: "text", content: "No celular:" },
        {
          type: "list",
          items: [
            "Assistentes virtuais (Siri, Google Assistant).",
            "Reconhecimento facial para desbloqueio.",
            "Correção automática ao digitar.",
            "Tradução instantânea."
          ]
        },
        { type: "text", content: "Na internet:" },
        {
          type: "list",
          items: [
            "Recomendações (YouTube, Netflix).",
            "Feed personalizado em redes sociais.",
            "Filtros de spam no e-mail.",
            "Busca inteligente."
          ]
        },
        { type: "text", content: "No mundo físico:" },
        {
          type: "list",
          items: [
            "Sistemas de navegação e carros autônomos.",
            "Apoio a diagnósticos médicos.",
            "Previsão do tempo.",
            "Soluções de segurança inteligentes."
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Conhecendo as Ferramentas de IA",
      phase: "Fase 3",
      description: "Panorama das principais categorias de ferramentas disponíveis.",
      xp: courseMeta.xpTable[3],
      icon: "🛠️",
      content: [
        { type: "text", content: "Categorias e exemplos de ferramentas de IA:" },
        { type: "text", content: "Assistentes de texto:" },
        {
          type: "list",
          items: [
            "ChatGPT, Claude, Gemini — conversa e geração de textos.",
            "Grammarly — revisão e correção de textos.",
            "Notion AI — produtividade e organização."
          ]
        },
        { type: "text", content: "Geradores de imagem:" },
        {
          type: "list",
          items: [
            "DALL·E, Midjourney — criação de imagens.",
            "Canva (recursos com IA) — design gráfico.",
            "Remove.bg — remoção de fundo."
          ]
        },
        { type: "text", content: "Áudio e fala:" },
        {
          type: "list",
          items: [
            "ElevenLabs — síntese de voz.",
            "Otter.ai — transcrição automática.",
            "AIVA — composição musical com IA."
          ]
        },
        { type: "text", content: "Assistentes de programação:" },
        {
          type: "list",
          items: [
            "GitHub Copilot — sugestões de código.",
            "Replit AI — suporte a desenvolvimento web.",
            "Ferramentas de explicação de código (ex.: CodeT5)."
          ]
        }
      ]
    },
    {
      id: 4,
      title: "A Arte de Conversar com a IA",
      phase: "Fase 4",
      description: "Criação de prompts eficazes e comunicação clara com IA.",
      xp: courseMeta.xpTable[4],
      icon: "💬",
      content: [
        { type: "text", content: "Engenharia de Prompt é a prática de formular instruções claras para obter melhores resultados." },
        { type: "text", content: "Seja específico:" },
        {
          type: "list",
          items: [
            "Ruim: “Escreva sobre animais”.",
            "Bom: “Escreva um texto de 200 palavras sobre como os golfinhos se comunicam, para crianças de 8 anos”."
          ]
        },
        { type: "text", content: "Dê contexto:" },
        {
          type: "list",
          items: [
            "Explique quem você é e seu objetivo.",
            "Defina público-alvo e tom.",
            "Mostre o formato desejado e referências."
          ]
        },
        { type: "text", content: "Itere e melhore:" },
        {
          type: "list",
          items: [
            "Teste abordagens diferentes.",
            "Refine com base no retorno.",
            "Peça explicações e justifique melhorias."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Usando a IA para o Bem",
      phase: "Fase 5",
      description: "Ética, privacidade e responsabilidade no uso da IA.",
      xp: courseMeta.xpTable[5],
      icon: "🌟",
      content: [
        { type: "text", content: "Com grandes poderes vêm grandes responsabilidades: boas práticas no uso da IA." },
        { type: "text", content: "Privacidade e segurança:" },
        {
          type: "list",
          items: [
            "Evite compartilhar dados pessoais sensíveis.",
            "Cuidado com informações de terceiros.",
            "Leia termos de uso e prefira ferramentas confiáveis."
          ]
        },
        { type: "text", content: "Verificação de informações:" },
        {
          type: "list",
          items: [
            "IAs podem errar ou ‘alucinar’.",
            "Cheque fatos relevantes em múltiplas fontes."
          ]
        },
        { type: "text", content: "Direitos autorais e criatividade:" },
        {
          type: "list",
          items: [
            "Respeite direitos autorais.",
            "Use IA como ferramenta de apoio, mantendo sua originalidade."
          ]
        },
        { type: "text", content: "Impacto social:" },
        {
          type: "list",
          items: [
            "Evite conteúdo prejudicial.",
            "Promova diversidade e inclusão.",
            "Busque resolver problemas reais."
          ]
        }
      ]
    }
  ]
};

// ==========================
// Quizzes
// ==========================
const quizData = {
  quizzes: [
    {
      trailId: 1,
      questions: [
        {
          question: "O que é Inteligência Artificial?",
          options: [
            "Um robô que fala",
            "A capacidade de um sistema imitar funções da inteligência humana",
            "Um programa de computador qualquer",
            "Uma tecnologia do futuro"
          ],
          answer: "A capacidade de um sistema imitar funções da inteligência humana",
          explanation: "IA é a capacidade de sistemas computacionais imitarem funções cognitivas humanas como aprender, raciocinar e resolver problemas."
        },
        {
          question: "Qual tipo de IA aprende observando exemplos?",
          options: [
            "Sistemas baseados em regras",
            "Aprendizado de Máquina",
            "IA Generativa",
            "Agentes de IA"
          ],
          answer: "Aprendizado de Máquina",
          explanation: "O Aprendizado de Máquina permite aprender e melhorar por experiência, sem programação explícita para cada caso."
        },
        {
          question: "O que faz a IA Generativa?",
          options: [
            "Segue regras fixas",
            "Apenas analisa dados",
            "Cria conteúdos novos (textos, imagens etc.)",
            "Controla robôs"
          ],
          answer: "Cria conteúdos novos (textos, imagens etc.)",
          explanation: "IA Generativa produz conteúdo original a partir de padrões aprendidos."
        }
      ]
    },
    {
      trailId: 2,
      questions: [
        {
          question: "Qual destas NÃO é uma aplicação comum de IA no celular?",
          options: [
            "Assistente virtual",
            "Reconhecimento facial",
            "Bateria infinita",
            "Corretor automático"
          ],
          answer: "Bateria infinita",
          explanation: "Os demais são exemplos reais de IA em smartphones."
        },
        {
          question: "Como a IA personaliza seu feed nas redes sociais?",
          options: [
            "Mostra posts aleatórios",
            "Analisa comportamento e preferências",
            "Seguindo só ordem cronológica",
            "Mostrando apenas posts de amigos"
          ],
          answer: "Analisa comportamento e preferências",
          explanation: "Ela observa interações, curtidas e tempo de visualização para recomendar conteúdo."
        }
      ]
    },
    {
      trailId: 3,
      questions: [
        {
          question: "Qual ferramenta é indicada para criar imagens com IA?",
          options: ["ChatGPT", "DALL·E", "Grammarly", "Otter.ai"],
          answer: "DALL·E",
          explanation: "Ferramenta especializada em gerar imagens a partir de texto."
        },
        {
          question: "Para que serve o GitHub Copilot?",
          options: ["Criar músicas", "Assistente de programação", "Editar fotos", "Transcrever áudio"],
          answer: "Assistente de programação",
          explanation: "Sugere trechos de código e acelera o desenvolvimento."
        }
      ]
    },
    {
      trailId: 4,
      questions: [
        {
          question: "O que torna um prompt mais eficaz?",
          options: [
            "Ser o mais curto possível",
            "Usar palavras difíceis",
            "Ser específico e dar contexto",
            "Fazer muitas perguntas"
          ],
          answer: "Ser específico e dar contexto",
          explanation: "Clareza e contexto aumentam a qualidade das respostas."
        },
        {
          question: "Por que iterar e melhorar prompts?",
          options: [
            "Para gastar mais tempo",
            "Para obter resultados melhores",
            "Porque é obrigatório",
            "Para confundir a IA"
          ],
          answer: "Para obter resultados melhores",
          explanation: "Refinamentos sucessivos elevam a qualidade das saídas."
        }
      ]
    },
    {
      trailId: 5,
      questions: [
        {
          question: "Por que verificar informações geradas por IA?",
          options: [
            "Porque a IA é sempre errada",
            "Porque pode haver erros ou ‘alucinações’",
            "Porque é mais divertido",
            "Porque é uma regra"
          ],
          answer: "Porque pode haver erros ou ‘alucinações’",
          explanation: "IAs podem inventar fatos; confirme dados importantes."
        },
        {
          question: "Boa prática ao criar com IA:",
          options: [
            "Copiar tudo sem crédito",
            "Usar a IA como apoio, mantendo criatividade",
            "Nunca verificar resultados",
            "Compartilhar informações pessoais"
          ],
          answer: "Usar a IA como apoio, mantendo criatividade",
          explanation: "A ferramenta potencializa a criação; crítica e autoria seguem com você."
        }
      ]
    }
  ]
};

// ==========================
// Glossário
// ==========================
const glossaryData = {
  terms: [
    { term: "Inteligência Artificial (IA)", definition: "Capacidade de sistemas imitarem funções da inteligência humana, como aprender, raciocinar e resolver problemas." },
    { term: "Aprendizado de Máquina (ML)", definition: "Área da IA em que os computadores aprendem a partir de dados, identificando padrões para tomar decisões." },
    { term: "Aprendizado Profundo (Deep Learning)", definition: "Subárea do ML que usa redes neurais profundas para analisar dados complexos (imagens, áudio, texto)." },
    { term: "IA Generativa", definition: "IA que cria conteúdos novos (textos, imagens, músicas, código) a partir de padrões aprendidos." },
    { term: "Prompt", definition: "Instrução/comando que você fornece à IA para executar uma tarefa ou gerar uma resposta." },
    { term: "Engenharia de Prompt", definition: "Prática de desenhar prompts eficazes para obter melhores resultados de IAs generativas." },
    { term: "Redes Neurais Artificiais", definition: "Modelos inspirados no cérebro humano; base do Deep Learning." },
    { term: "Sistemas Baseados em Regras", definition: "Sistemas que tomam decisões com base em regras ‘se-então’ definidas por pessoas." },
    { term: "Agentes de IA", definition: "Sistemas autônomos que percebem o ambiente e agem para alcançar objetivos." },
    { term: "Ética em IA", definition: "Uso justo, seguro e responsável da IA, considerando impactos sociais." }
  ]
};

// ==========================
// Templates de Prompt
// ==========================
const promptsData = {
  categories: [
    { id: "creative", name: "Criativo", description: "Templates para criação de conteúdo criativo", icon: "🎨" },
    { id: "educational", name: "Educacional", description: "Templates para aprendizado e ensino", icon: "🎓" },
    { id: "professional", name: "Profissional", description: "Templates para uso no trabalho", icon: "💼" },
    { id: "analysis", name: "Análise", description: "Templates para análise e pesquisa", icon: "📊" }
  ],
  templates: [
    {
      id: 1,
      category: "creative",
      title: "Criador de Histórias",
      description: "Crie histórias envolventes com personagens únicos",
      template:
        "Aja como um escritor criativo e crie uma história de [GÊNERO] sobre [TEMA PRINCIPAL]. A história deve ter:\n\n- Personagem principal: [DESCRIÇÃO DO PERSONAGEM]\n- Cenário: [LOCAL E ÉPOCA]\n- Conflito: [PROBLEMA A SER RESOLVIDO]\n- Tom: [TOM DA HISTÓRIA]\n\nA história deve ter entre 300-500 palavras e ser adequada para [FAIXA ETÁRIA].",
      variables: [
        { name: "GÊNERO", placeholder: "aventura, ficção científica, fantasia..." },
        { name: "TEMA PRINCIPAL", placeholder: "amizade, coragem, descoberta..." },
        { name: "DESCRIÇÃO DO PERSONAGEM", placeholder: "uma jovem inventora curiosa..." },
        { name: "LOCAL E ÉPOCA", placeholder: "uma cidade futurista em 2050..." },
        { name: "PROBLEMA A SER RESOLVIDO", placeholder: "um mistério a ser desvendado..." },
        { name: "TOM DA HISTÓRIA", placeholder: "divertido, sério, misterioso..." },
        { name: "FAIXA ETÁRIA", placeholder: "crianças, adolescentes, adultos..." }
      ]
    },
    {
      id: 2,
      category: "educational",
      title: "Explicador Simples",
      description: "Explique conceitos complexos de forma simples",
      template:
        "Aja como um professor especialista em [ÁREA DO CONHECIMENTO] e explique o conceito de [CONCEITO] para [PÚBLICO-ALVO].\n\nUse:\n- Linguagem simples e clara\n- Analogias do dia a dia\n- Exemplos práticos\n- Evite jargões técnicos\n\nEstruture a explicação em:\n1. O que é\n2. Como funciona (analogia)\n3. Exemplo prático\n4. Por que é importante",
      variables: [
        { name: "ÁREA DO CONHECIMENTO", placeholder: "física, matemática, biologia..." },
        { name: "CONCEITO", placeholder: "fotossíntese, gravidade, algoritmos..." },
        { name: "PÚBLICO-ALVO", placeholder: "crianças de 10 anos, iniciantes..." }
      ]
    },
    {
      id: 3,
      category: "professional",
      title: "Gerador de E-mails",
      description: "Crie e-mails profissionais eficazes",
      template:
        "Redija um e-mail profissional com as seguintes características:\n\nDestinatário: [DESTINATÁRIO]\nAssunto: [ASSUNTO]\nObjetivo: [OBJETIVO DO E-MAIL]\nTom: [TOM]\n\nContexto adicional: [INFORMAÇÕES RELEVANTES]\n\nO e-mail deve ser claro, objetivo, respeitoso e conter um call-to-action específico.",
      variables: [
        { name: "DESTINATÁRIO", placeholder: "cliente, chefe, colega..." },
        { name: "ASSUNTO", placeholder: "reunião, proposta, feedback..." },
        { name: "OBJETIVO DO E-MAIL", placeholder: "agendar reunião, solicitar informações..." },
        { name: "TOM", placeholder: "formal, amigável, persuasivo..." },
        { name: "INFORMAÇÕES RELEVANTES", placeholder: "prazo, detalhes importantes..." }
      ]
    },
    {
      id: 4,
      category: "analysis",
      title: "Analisador de Prós e Contras",
      description: "Analise decisões de forma estruturada",
      template:
        "Faça uma análise de prós e contras sobre [DECISÃO/SITUAÇÃO].\n\nContexto: [CONTEXTO]\nCritérios: [FATORES]\n\n## Prós\n[Liste as vantagens]\n\n## Contras\n[Liste as desvantagens]\n\n## Riscos\n[Possíveis riscos]\n\n## Recomendação\n[Sua sugestão final]",
      variables: [
        { name: "DECISÃO/SITUAÇÃO", placeholder: "mudar de emprego, comprar um carro..." },
        { name: "CONTEXTO", placeholder: "situação atual, motivações..." },
        { name: "FATORES", placeholder: "custo, tempo, impacto..." }
      ]
    },
    {
      id: 5,
      category: "creative",
      title: "Gerador de Ideias",
      description: "Gere ideias criativas para projetos",
      template:
        "Gere 10 ideias para [TIPO DE PROJETO] em [TEMA/ÁREA]. Público: [PÚBLICO]. Orçamento: [ORÇAMENTO]. Prazo: [PRAZO]. Recursos: [RECURSOS].\nPara cada ideia: título, 2–3 linhas de descrição, dificuldade (1–5), recursos, impacto esperado.",
      variables: [
        { name: "TIPO DE PROJETO", placeholder: "campanha, evento, produto..." },
        { name: "TEMA/ÁREA", placeholder: "sustentabilidade, tecnologia, educação..." },
        { name: "PÚBLICO", placeholder: "jovens, profissionais, famílias..." },
        { name: "ORÇAMENTO", placeholder: "baixo, médio, alto..." },
        { name: "PRAZO", placeholder: "1 semana, 1 mês, 3 meses..." },
        { name: "RECURSOS", placeholder: "equipe, ferramentas, materiais..." }
      ]
    },
    {
      id: 6,
      category: "educational",
      title: "Criador de Quiz",
      description: "Crie quizzes educativos interativos",
      template:
        "Crie um quiz sobre [TÓPICO] para [NÍVEL]. Questões: [QUANTIDADE]. Tipo: [TIPO]. Foco: [ASPECTOS].\nCada questão deve ter: pergunta, 4 alternativas, resposta correta, explicação e nível de dificuldade.",
      variables: [
        { name: "TÓPICO", placeholder: "história do Brasil, matemática básica..." },
        { name: "NÍVEL", placeholder: "iniciante, intermediário, avançado..." },
        { name: "QUANTIDADE", placeholder: "5, 10, 15..." },
        { name: "TIPO", placeholder: "múltipla escolha, VF, mista..." },
        { name: "ASPECTOS", placeholder: "conceitos básicos, aplicações..." }
      ]
    }
  ]
};

// ==========================
// Badges
// ==========================
const badgeData = {
  "first-trail": { name: "Primeiro Passo", description: "Completou a primeira fase", icon: "🎯" },
  "trail-master": { name: "Mestre da Trilha", description: "Concluiu todas as fases do módulo", icon: "🏆" },
  "xp-collector": { name: "Colecionador de XP", description: "Acumulou 500+ pontos de experiência", icon: "⭐" }
};

// Utilitário opcional: total de XP do módulo
const totalXP = Object.values(courseMeta.xpTable).reduce((a, b) => a + b, 0); // 800
