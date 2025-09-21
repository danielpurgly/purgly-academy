// Dados do curso
const courseData = {
  title: "Módulo 1: Desvendando a Inteligência Artificial",
  description: "Uma jornada divertida para entender o que é IA, como ela funciona e como podemos usá-la no dia a dia.",
  trail: [
    {
      id: 1,
      title: "O que é essa tal de IA?",
      phase: "Fase 1",
      description: "Descubra os conceitos básicos da Inteligência Artificial e seus diferentes tipos",
      xp: 100,
      icon: "🤖",
      content: [
        {
          type: "text",
          content: "A **Inteligência Artificial (IA)** é como dar superpoderes para os computadores! Imagine que você está ensinando um computador a pensar e tomar decisões como um ser humano."
        },
        {
          type: "text",
          content: "Existem diferentes tipos de IA, cada um com suas próprias características especiais:"
        },
        {
          type: "list",
          items: [
            "**Sistemas Baseados em Regras**: Como um livro de receitas que o computador segue à risca",
            "**Aprendizado de Máquina**: O computador aprende sozinho observando exemplos",
            "**Aprendizado Profundo**: Usa redes neurais artificiais inspiradas no cérebro humano",
            "**IA Generativa**: Cria coisas novas como textos, imagens e músicas",
            "**Agentes de IA**: Sistemas que agem de forma autônoma para atingir objetivos"
          ]
        },
        {
          type: "text",
          content: "A IA está em todo lugar: no seu celular, nos jogos, nas redes sociais e até nos carros! É uma tecnologia fascinante que está mudando o mundo."
        }
      ]
    },
    {
      id: 2,
      title: "Superpoderes da IA no dia a dia",
      phase: "Fase 2",
      description: "Explore as incríveis aplicações da IA que você já usa sem perceber",
      xp: 150,
      icon: "⚡",
      content: [
        {
          type: "text",
          content: "Você sabia que já usa IA todos os dias? Vamos descobrir os **superpoderes** da IA que estão ao nosso redor!"
        },
        {
          type: "text",
          content: "**No seu celular:**"
        },
        {
          type: "list",
          items: [
            "Assistentes virtuais (Siri, Google Assistant)",
            "Reconhecimento facial para desbloquear",
            "Corretor automático quando você digita",
            "Tradução instantânea de idiomas"
          ]
        },
        {
          type: "text",
          content: "**Na internet:**"
        },
        {
          type: "list",
          items: [
            "Recomendações do YouTube e Netflix",
            "Feed personalizado das redes sociais",
            "Filtros de spam no email",
            "Busca inteligente no Google"
          ]
        },
        {
          type: "text",
          content: "**No mundo real:**"
        },
        {
          type: "list",
          items: [
            "Carros autônomos e sistemas de navegação",
            "Diagnósticos médicos mais precisos",
            "Previsão do tempo",
            "Sistemas de segurança inteligentes"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Conhecendo as Ferramentas de IA",
      phase: "Fase 3",
      description: "Descubra as principais categorias de ferramentas de IA disponíveis hoje",
      xp: 150,
      icon: "🛠️",
      content: [
        {
          type: "text",
          content: "Hoje em dia, existem muitas **ferramentas de IA** que qualquer pessoa pode usar. Vamos conhecer as principais categorias:"
        },
        {
          type: "text",
          content: "**🤖 Assistentes de Texto:**"
        },
        {
          type: "list",
          items: [
            "ChatGPT, Claude, Gemini - para conversas e textos",
            "Grammarly - para correção de textos",
            "Notion AI - para organização e produtividade"
          ]
        },
        {
          type: "text",
          content: "**🎨 Geradores de Imagem:**"
        },
        {
          type: "list",
          items: [
            "DALL-E, Midjourney - para criar imagens únicas",
            "Canva AI - para design gráfico",
            "Remove.bg - para remover fundos"
          ]
        },
        {
          type: "text",
          content: "**🎵 Ferramentas de Áudio:**"
        },
        {
          type: "list",
          items: [
            "ElevenLabs - para síntese de voz",
            "Otter.ai - para transcrição de áudio",
            "AIVA - para composição musical"
          ]
        },
        {
          type: "text",
          content: "**💻 Assistentes de Código:**"
        },
        {
          type: "list",
          items: [
            "GitHub Copilot - para programação",
            "Replit AI - para desenvolvimento web",
            "CodeT5 - para explicação de código"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "A Arte de Conversar com a IA",
      phase: "Fase 4",
      description: "Aprenda a criar prompts eficazes e se comunicar melhor com a IA",
      xp: 200,
      icon: "💬",
      content: [
        {
          type: "text",
          content: "Conversar com IA é uma **arte**! Quanto melhor você se comunicar, melhores serão os resultados. Isso se chama **Engenharia de Prompt**."
        },
        {
          type: "text",
          content: "**🎯 Seja Específico:**"
        },
        {
          type: "list",
          items: [
            "❌ Ruim: 'Escreva sobre animais'",
            "✅ Bom: 'Escreva um texto de 200 palavras sobre como os golfinhos se comunicam, para crianças de 8 anos'"
          ]
        },
        {
          type: "text",
          content: "**📝 Dê Contexto:**"
        },
        {
          type: "list",
          items: [
            "Explique quem você é",
            "Diga qual é seu objetivo",
            "Mencione o público-alvo",
            "Defina o tom desejado"
          ]
        },
        {
          type: "text",
          content: "**💡 Use Exemplos:**"
        },
        {
          type: "list",
          items: [
            "Mostre o formato que você quer",
            "Dê exemplos do estilo desejado",
            "Inclua referências quando necessário"
          ]
        },
        {
          type: "text",
          content: "**🔄 Itere e Melhore:**"
        },
        {
          type: "list",
          items: [
            "Teste diferentes abordagens",
            "Refine baseado nos resultados",
            "Peça para a IA explicar seu raciocínio",
            "Use feedback para melhorar"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Usando a IA para o Bem",
      phase: "Fase 5",
      description: "Entenda a importância da ética, privacidade e uso responsável da IA",
      xp: 200,
      icon: "🌟",
      content: [
        {
          type: "text",
          content: "Com grandes poderes vêm grandes responsabilidades! Vamos aprender como usar a IA de forma **ética e responsável**."
        },
        {
          type: "text",
          content: "**🔒 Privacidade e Segurança:**"
        },
        {
          type: "list",
          items: [
            "Nunca compartilhe informações pessoais sensíveis",
            "Cuidado com dados de outras pessoas",
            "Leia os termos de uso das ferramentas",
            "Use ferramentas confiáveis e seguras"
          ]
        },
        {
          type: "text",
          content: "**✅ Verificação de Informações:**"
        },
        {
          type: "list",
          items: [
            "A IA pode cometer erros ou 'alucinar'",
            "Sempre verifique fatos importantes",
            "Consulte múltiplas fontes",
            "Use seu senso crítico"
          ]
        },
        {
          type: "text",
          content: "**🎨 Direitos Autorais e Criatividade:**"
        },
        {
          type: "list",
          items: [
            "Respeite direitos autorais existentes",
            "Dê crédito quando necessário",
            "Use a IA como ferramenta, não substituto",
            "Mantenha sua criatividade e originalidade"
          ]
        },
        {
          type: "text",
          content: "**🤝 Impacto Social:**"
        },
        {
          type: "list",
          items: [
            "Considere o impacto de suas criações",
            "Evite gerar conteúdo prejudicial",
            "Promova diversidade e inclusão",
            "Use a IA para resolver problemas reais"
          ]
        },
        {
          type: "text",
          content: "Lembre-se: a IA é uma ferramenta poderosa que deve ser usada para **melhorar o mundo** e **ajudar as pessoas**!"
        }
      ]
    }
  ]
};

// Dados dos quizzes
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
          question: "Qual tipo de IA aprende sozinha observando exemplos?",
          options: [
            "Sistemas baseados em regras",
            "Aprendizado de Máquina",
            "IA Generativa",
            "Agentes de IA"
          ],
          answer: "Aprendizado de Máquina",
          explanation: "O Aprendizado de Máquina permite que os computadores aprendam e melhorem automaticamente através da experiência, sem serem explicitamente programados."
        },
        {
          question: "O que faz a IA Generativa?",
          options: [
            "Segue regras pré-definidas",
            "Apenas analisa dados",
            "Cria conteúdo novo como textos e imagens",
            "Controla robôs"
          ],
          answer: "Cria conteúdo novo como textos e imagens",
          explanation: "A IA Generativa é capaz de criar conteúdo original como textos, imagens, música e código, baseando-se nos padrões aprendidos durante o treinamento."
        }
      ]
    },
    {
      trailId: 2,
      questions: [
        {
          question: "Qual dessas NÃO é uma aplicação comum de IA no celular?",
          options: [
            "Assistente virtual",
            "Reconhecimento facial",
            "Bateria infinita",
            "Corretor automático"
          ],
          answer: "Bateria infinita",
          explanation: "Bateria infinita não é uma aplicação de IA. As outras opções são exemplos reais de IA em smartphones."
        },
        {
          question: "Como a IA personaliza seu feed nas redes sociais?",
          options: [
            "Mostra posts aleatórios",
            "Analisa seu comportamento e preferências",
            "Segue uma ordem cronológica",
            "Mostra apenas posts de amigos"
          ],
          answer: "Analisa seu comportamento e preferências",
          explanation: "A IA analisa suas interações, curtidas, tempo gasto em posts e outros comportamentos para personalizar seu feed com conteúdo relevante."
        }
      ]
    },
    {
      trailId: 3,
      questions: [
        {
          question: "Qual ferramenta é melhor para criar imagens com IA?",
          options: [
            "ChatGPT",
            "DALL-E",
            "Grammarly",
            "Otter.ai"
          ],
          answer: "DALL-E",
          explanation: "DALL-E é uma ferramenta especializada em gerar imagens a partir de descrições textuais, sendo ideal para criação visual com IA."
        },
        {
          question: "Para que serve o GitHub Copilot?",
          options: [
            "Criar músicas",
            "Assistir programação de código",
            "Editar fotos",
            "Transcrever áudio"
          ],
          answer: "Assistir programação de código",
          explanation: "GitHub Copilot é um assistente de IA que ajuda programadores sugerindo código, completando funções e explicando conceitos de programação."
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
          explanation: "Prompts eficazes são específicos, fornecem contexto claro, definem o objetivo e incluem detalhes relevantes para obter melhores resultados."
        },
        {
          question: "Por que é importante iterar e melhorar prompts?",
          options: [
            "Para gastar mais tempo",
            "Para obter resultados cada vez melhores",
            "Porque é obrigatório",
            "Para confundir a IA"
          ],
          answer: "Para obter resultados cada vez melhores",
          explanation: "Iterar permite refinar a comunicação com a IA, testando diferentes abordagens e melhorando gradualmente a qualidade dos resultados."
        }
      ]
    },
    {
      trailId: 5,
      questions: [
        {
          question: "Por que devemos verificar informações geradas por IA?",
          options: [
            "Porque a IA é sempre errada",
            "Porque a IA pode cometer erros ou 'alucinar'",
            "Porque é mais divertido",
            "Porque é uma regra"
          ],
          answer: "Porque a IA pode cometer erros ou 'alucinar'",
          explanation: "IAs podem gerar informações incorretas ou inventar fatos (alucinação). É importante sempre verificar informações importantes com fontes confiáveis."
        },
        {
          question: "Qual é uma boa prática ao usar IA para criação?",
          options: [
            "Copiar tudo sem dar crédito",
            "Usar a IA como ferramenta, mantendo sua criatividade",
            "Nunca verificar os resultados",
            "Compartilhar informações pessoais"
          ],
          answer: "Usar a IA como ferramenta, mantendo sua criatividade",
          explanation: "A IA deve ser uma ferramenta que potencializa nossa criatividade, não um substituto. É importante manter nossa originalidade e senso crítico."
        }
      ]
    }
  ]
};

// Dados do glossário
const glossaryData = {
  terms: [
    {
      term: "Inteligência Artificial (IA)",
      definition: "É a capacidade de um sistema de computador de imitar funções da inteligência humana, como aprender, raciocinar e resolver problemas."
    },
    {
      term: "Aprendizado de Máquina (Machine Learning)",
      definition: "Um ramo da IA onde os computadores aprendem a partir de dados, sem serem explicitamente programados. Eles identificam padrões e tomam decisões."
    },
    {
      term: "Aprendizado Profundo (Deep Learning)",
      definition: "Uma subárea do Aprendizado de Máquina que usa redes neurais com muitas camadas (profundas) para analisar dados complexos, como imagens e sons."
    },
    {
      term: "IA Generativa",
      definition: "Um tipo de IA que pode criar conteúdo novo e original, como textos, imagens, músicas e códigos, a partir do que aprendeu."
    },
    {
      term: "Prompt",
      definition: "A instrução, comando ou pergunta que você dá a uma IA para que ela execute uma tarefa ou gere uma resposta."
    },
    {
      term: "Engenharia de Prompt",
      definition: "A arte e a ciência de criar prompts eficazes para obter os melhores resultados possíveis de uma IA generativa."
    },
    {
      term: "Redes Neurais Artificiais",
      definition: "Um modelo computacional inspirado na estrutura e funcionamento do cérebro humano, usado principalmente em Aprendizado Profundo."
    },
    {
      term: "Sistemas Baseados em Regras",
      definition: "A forma mais simples de IA, onde o sistema toma decisões com base em um conjunto de regras 'se-então' criadas por humanos."
    },
    {
      term: "Agentes de IA",
      definition: "Sistemas que percebem seu ambiente e tomam ações para atingir objetivos específicos. Pense em um personagem de jogo que decide o que fazer sozinho."
    },
    {
      term: "Ética em IA",
      definition: "O estudo e a prática de usar a Inteligência Artificial de forma justa, segura e responsável, considerando seu impacto na sociedade."
    }
  ]
};

// Dados dos templates de prompt
const promptsData = {
  categories: [
    {
      id: "creative",
      name: "Criativo",
      description: "Templates para criação de conteúdo criativo",
      icon: "🎨"
    },
    {
      id: "educational",
      name: "Educacional", 
      description: "Templates para aprendizado e ensino",
      icon: "🎓"
    },
    {
      id: "professional",
      name: "Profissional",
      description: "Templates para uso no trabalho",
      icon: "💼"
    },
    {
      id: "analysis",
      name: "Análise",
      description: "Templates para análise e pesquisa",
      icon: "📊"
    }
  ],
  templates: [
    {
      id: 1,
      category: "creative",
      title: "Criador de Histórias",
      description: "Crie histórias envolventes com personagens únicos",
      template: "Aja como um escritor criativo e crie uma história de [GÊNERO] sobre [TEMA PRINCIPAL]. A história deve ter:\n\n- Personagem principal: [DESCRIÇÃO DO PERSONAGEM]\n- Cenário: [LOCAL E ÉPOCA]\n- Conflito: [PROBLEMA A SER RESOLVIDO]\n- Tom: [TOM DA HISTÓRIA]\n\nA história deve ter entre 300-500 palavras e ser adequada para [FAIXA ETÁRIA].",
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
      template: "Aja como um professor especialista em [ÁREA DO CONHECIMENTO] e explique o conceito de [CONCEITO] para [PÚBLICO-ALVO].\n\nUse:\n- Linguagem simples e clara\n- Analogias do dia a dia\n- Exemplos práticos\n- Evite jargões técnicos\n\nEstruture a explicação em:\n1. O que é (definição simples)\n2. Como funciona (analogia)\n3. Exemplo prático\n4. Por que é importante",
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
      template: "Redija um e-mail profissional com as seguintes características:\n\n**Destinatário:** [DESTINATÁRIO]\n**Assunto:** [ASSUNTO]\n**Objetivo:** [OBJETIVO DO E-MAIL]\n**Tom:** [TOM]\n\n**Contexto adicional:** [INFORMAÇÕES RELEVANTES]\n\nO e-mail deve ser:\n- Claro e objetivo\n- Respeitoso e profissional\n- Com call-to-action específico\n- Adequado ao contexto brasileiro",
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
      template: "Faça uma análise detalhada de prós e contras sobre [DECISÃO/SITUAÇÃO].\n\n**Contexto:** [CONTEXTO DA DECISÃO]\n**Critérios importantes:** [FATORES A CONSIDERAR]\n\nEstruture a análise em:\n\n## Prós (Vantagens)\n[Liste e explique as vantagens]\n\n## Contras (Desvantagens)\n[Liste e explique as desvantagens]\n\n## Fatores de Risco\n[Identifique possíveis riscos]\n\n## Recomendação\n[Dê uma recomendação baseada na análise]",
      variables: [
        { name: "DECISÃO/SITUAÇÃO", placeholder: "mudar de emprego, comprar um carro..." },
        { name: "CONTEXTO DA DECISÃO", placeholder: "situação atual, motivações..." },
        { name: "FATORES A CONSIDERAR", placeholder: "custo, tempo, impacto..." }
      ]
    },
    {
      id: 5,
      category: "creative",
      title: "Gerador de Ideias",
      description: "Gere ideias criativas para projetos",
      template: "Aja como um consultor criativo e gere 10 ideias inovadoras para [TIPO DE PROJETO] relacionado a [TEMA/ÁREA].\n\n**Público-alvo:** [DESCRIÇÃO DO PÚBLICO]\n**Orçamento:** [ORÇAMENTO]\n**Prazo:** [TEMPO DISPONÍVEL]\n**Recursos disponíveis:** [RECURSOS]\n\nPara cada ideia, forneça:\n- Nome/título\n- Descrição breve (2-3 linhas)\n- Nível de dificuldade (1-5)\n- Recursos necessários\n- Impacto esperado",
      variables: [
        { name: "TIPO DE PROJETO", placeholder: "campanha, evento, produto..." },
        { name: "TEMA/ÁREA", placeholder: "sustentabilidade, tecnologia, educação..." },
        { name: "DESCRIÇÃO DO PÚBLICO", placeholder: "jovens, profissionais, famílias..." },
        { name: "ORÇAMENTO", placeholder: "baixo, médio, alto..." },
        { name: "TEMPO DISPONÍVEL", placeholder: "1 semana, 1 mês, 3 meses..." },
        { name: "RECURSOS", placeholder: "equipe, ferramentas, materiais..." }
      ]
    },
    {
      id: 6,
      category: "educational",
      title: "Criador de Quiz",
      description: "Crie quizzes educativos interativos",
      template: "Crie um quiz educativo sobre [TÓPICO] para [NÍVEL DE CONHECIMENTO].\n\n**Número de questões:** [QUANTIDADE]\n**Tipo de questões:** [TIPO DE QUESTÕES]\n**Foco:** [ASPECTOS ESPECÍFICOS]\n\nPara cada questão, forneça:\n1. Pergunta clara e objetiva\n2. 4 alternativas (para múltipla escolha)\n3. Resposta correta\n4. Explicação da resposta\n5. Nível de dificuldade\n\nTorne as questões envolventes e educativas!",
      variables: [
        { name: "TÓPICO", placeholder: "história do Brasil, matemática básica..." },
        { name: "NÍVEL DE CONHECIMENTO", placeholder: "iniciante, intermediário, avançado..." },
        { name: "QUANTIDADE", placeholder: "5, 10, 15..." },
        { name: "TIPO DE QUESTÕES", placeholder: "múltipla escolha, verdadeiro ou falso, mista..." },
        { name: "ASPECTOS ESPECÍFICOS", placeholder: "conceitos básicos, aplicações práticas..." }
      ]
    }
  ]
};

// Dados dos badges
const badgeData = {
  'first-trail': {
    name: 'Primeiro Passo',
    description: 'Completou sua primeira fase',
    icon: '🎯'
  },
  'trail-master': {
    name: 'Mestre da Trilha',
    description: 'Completou todas as fases do módulo',
    icon: '🏆'
  },
  'xp-collector': {
    name: 'Colecionador de XP',
    description: 'Acumulou 500+ pontos de experiência',
    icon: '⭐'
  }
};
