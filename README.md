# IA Academy - Curso Gamificado de Inteligência Artificial

Uma aplicação web completa, responsiva e acessível para um curso introdutório de IA, gamificado e divertido, voltado para crianças e adultos.

## 🎯 Visão Geral

A IA Academy é uma plataforma educacional interativa que ensina conceitos fundamentais de Inteligência Artificial através de uma experiência gamificada. O curso está estruturado em 5 fases que cobrem desde conceitos básicos até uso ético da IA.

## ✨ Funcionalidades Principais

### 🏠 **Página Inicial**
- Onboarding personalizado com formulário de nome
- Interface acolhedora com design moderno
- Estatísticas do curso e recursos disponíveis

### 🗺️ **Trilha de Aprendizado (5 Fases)**
1. **O que é essa tal de IA?** - Conceitos básicos e tipos de IA
2. **Superpoderes da IA no dia a dia** - Aplicações práticas
3. **Conhecendo as Ferramentas de IA** - Categorias de ferramentas
4. **A Arte de Conversar com a IA** - Engenharia de prompt
5. **Usando a IA para o Bem** - Ética e responsabilidade

### 🏆 **Sistema de Gamificação**
- **Pontos de XP**: Ganhe experiência completando fases
- **Sistema de Badges**: 
  - 🎯 Primeiro Passo (primeira fase)
  - 🏆 Mestre da Trilha (todas as fases)
  - ⭐ Colecionador de XP (500+ pontos)
- **Progresso Visual**: Barras de progresso e percentuais

### 📝 **Quiz Interativo**
- Quizzes personalizados para cada fase
- Feedback imediato com explicações detalhadas
- Sistema de pontuação e resultados

### 🧪 **Laboratório de Prompts**
- **6 Templates Categorizados**:
  - 🎨 Criativo (histórias, ideias)
  - 🎓 Educacional (explicações, quizzes)
  - 💼 Profissional (e-mails, documentos)
  - 📊 Análise (prós/contras, pesquisa)
- **Editor Interativo**: Variáveis personalizáveis
- **Geração Dinâmica**: Prompts prontos para usar

### 📚 **Glossário Inteligente**
- 10+ termos essenciais de IA com definições claras
- Sistema de busca em tempo real
- Filtros por letra inicial
- Interface limpa e organizada

### 👤 **Painel do Aluno**
- Dashboard personalizado com estatísticas
- Visualização de badges conquistados
- Progresso detalhado do curso
- Exportação de certificado (Guia Express de IA)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com CSS Grid e Flexbox
- **JavaScript (Vanilla)**: Lógica da aplicação e interatividade
- **PWA**: Configuração para Progressive Web App
- **LocalStorage**: Persistência de dados do usuário

## 🎨 Design e UX

### **Características Visuais**
- Design moderno com gradientes e sombras
- Paleta de cores acessível e profissional
- Tipografia clara (Inter font)
- Ícones emoji para facilitar compreensão
- Animações suaves e micro-interações

### **Responsividade**
- Mobile-first design
- Breakpoints para tablet e desktop
- Menu mobile colapsável
- Layout adaptativo para todos os dispositivos

### **Acessibilidade (WCAG AA)**
- Skip links para navegação por teclado
- ARIA labels e roles apropriados
- Contraste adequado de cores
- Suporte a leitores de tela
- Navegação por teclado completa

## 🚀 Como Executar

### **Método 1: Servidor HTTP Simples**
```bash
# Navegue até o diretório
cd ia-academy-web

# Inicie um servidor HTTP (Python)
python3 -m http.server 8080

# Ou usando Node.js
npx http-server -p 8080

# Acesse no navegador
http://localhost:8080
```

### **Método 2: Servidor Web**
- Faça upload dos arquivos para qualquer servidor web
- Acesse através do domínio configurado

## 📁 Estrutura de Arquivos

```
ia-academy-web/
├── index.html          # Página principal
├── styles.css          # Estilos principais
├── quiz-styles.css     # Estilos específicos do quiz
├── app.js             # Lógica da aplicação
├── data.js            # Dados do curso (JSON)
├── manifest.json      # Configuração PWA
└── README.md          # Documentação
```

## 💾 Dados e Persistência

### **LocalStorage**
- Progresso do usuário
- Fases completadas
- Pontos XP acumulados
- Badges conquistados
- Configurações (tema, nome)

### **Estrutura de Dados**
```javascript
{
  name: "Nome do usuário",
  xp: 100,
  badges: ["first-trail", "xp-collector"],
  completedTrails: [1, 2, 3],
  currentTrail: 4,
  darkMode: false
}
```

## 🎮 Mecânicas de Gamificação

### **Sistema de XP**
- Fase 1: 100 XP
- Fase 2: 150 XP  
- Fase 3: 150 XP
- Fase 4: 200 XP
- Fase 5: 200 XP
- **Total**: 800 XP

### **Badges e Conquistas**
- **Primeiro Passo**: Complete a primeira fase
- **Mestre da Trilha**: Complete todas as 5 fases
- **Colecionador de XP**: Acumule 500+ pontos

## 📱 PWA (Progressive Web App)

### **Recursos PWA**
- Manifest.json configurado
- Ícones para instalação
- Tema personalizado
- Modo standalone
- Otimizado para mobile

### **Instalação**
1. Acesse a aplicação no navegador mobile
2. Toque em "Adicionar à tela inicial"
3. Use como app nativo

## 🌙 Tema Escuro

- Toggle automático entre claro/escuro
- Preferência salva no LocalStorage
- Cores otimizadas para ambos os temas
- Transições suaves entre temas

## 🔧 Personalização

### **Modificar Conteúdo**
- Edite `data.js` para alterar:
  - Conteúdo das fases
  - Perguntas do quiz
  - Templates de prompt
  - Termos do glossário

### **Alterar Estilos**
- `styles.css`: Estilos principais
- `quiz-styles.css`: Estilos específicos
- Variáveis CSS para fácil customização

### **Adicionar Funcionalidades**
- `app.js`: Lógica principal
- Estrutura modular para expansões
- Event listeners organizados

## 🎯 Objetivos Educacionais

### **Módulo 1: Introdução à IA**
- Compreender o que é IA e suas categorias
- Identificar aplicações práticas no cotidiano
- Conhecer ferramentas disponíveis no mercado
- Aprender técnicas de prompt engineering
- Desenvolver consciência ética sobre IA

### **Competências Desenvolvidas**
- Pensamento crítico sobre tecnologia
- Habilidades de comunicação com IA
- Consciência ética e responsável
- Conhecimento prático de ferramentas

## 🔒 Privacidade e Segurança

- **Dados Locais**: Tudo armazenado no navegador
- **Sem Coleta**: Nenhum dado enviado para servidores
- **Offline**: Funciona completamente offline
- **Seguro**: Sem dependências externas maliciosas

## 🌟 Diferenciais

### **Educacional**
- Linguagem adaptada para todas as idades
- Exemplos práticos e analogias
- Progressão gradual de dificuldade
- Feedback construtivo e positivo

### **Técnico**
- 100% vanilla JavaScript (sem frameworks)
- Totalmente responsivo
- Acessibilidade completa
- Performance otimizada

### **Gamificação**
- Sistema de recompensas motivador
- Progresso visual claro
- Conquistas significativas
- Experiência envolvente

## 📈 Métricas de Sucesso

- **Engajamento**: Tempo gasto na plataforma
- **Conclusão**: Taxa de finalização das fases
- **Retenção**: Retorno dos usuários
- **Satisfação**: Feedback qualitativo

## 🔄 Futuras Melhorias

### **Conteúdo**
- Módulo 2: IA Avançada
- Mais templates de prompt
- Vídeos explicativos
- Exercícios práticos

### **Funcionalidades**
- Sistema de conquistas expandido
- Compartilhamento social
- Modo colaborativo
- Analytics de aprendizado

### **Técnicas**
- Service Worker para cache
- Notificações push
- Sincronização offline
- API de compartilhamento

## 📞 Suporte

Para dúvidas, sugestões ou problemas:
- Abra uma issue no repositório
- Entre em contato através do formulário
- Consulte a documentação técnica

---

**IA Academy** - Transformando o aprendizado de IA em uma jornada divertida e acessível para todos! 🚀🤖
