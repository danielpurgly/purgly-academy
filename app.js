// Estado global da aplicação
let appState = {
  user: {
    name: '',
    xp: 0,
    badges: [],
    completedTrails: [],
    currentTrail: 1,
    darkMode: false
  },
  currentPage: 'home',
  currentQuiz: null,
  currentQuizQuestion: 0,
  quizScore: 0,
  selectedTemplate: null,
  templateVariables: {}
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  loadUserData();
  initializeNavigation();
  initializeTheme();
  initializeOnboarding();
  initializeLaboratory();
  initializeGlossary();
  updateUI();
  
  // Mostrar página inicial
  showPage('home');
});

// Gerenciamento de dados do usuário
function loadUserData() {
  const savedData = localStorage.getItem('ia-academy-progress');
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      appState.user = { ...appState.user, ...parsedData };
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  }
}

function saveUserData() {
  localStorage.setItem('ia-academy-progress', JSON.stringify(appState.user));
}

// Navegação
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      showPage(page);
      
      // Fechar menu mobile
      navMenu.classList.remove('active');
    });
  });
  
  // Menu mobile
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

function showPage(pageId) {
  // Esconder todas as páginas
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Mostrar página selecionada
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    appState.currentPage = pageId;
    
    // Atualizar navegação ativa
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    
    // Carregar conteúdo específico da página
    switch(pageId) {
      case 'trilha':
        loadTrailsPage();
        break;
      case 'quiz':
        loadQuizPage();
        break;
      case 'laboratorio':
        loadLaboratoryPage();
        break;
      case 'glossario':
        loadGlossaryPage();
        break;
      case 'painel':
        loadDashboardPage();
        break;
    }
  }
}

// Tema
function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Aplicar tema salvo
  if (appState.user.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }
  
  themeToggle.addEventListener('click', () => {
    appState.user.darkMode = !appState.user.darkMode;
    
    if (appState.user.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
    }
    
    saveUserData();
  });
}

// Onboarding
function initializeOnboarding() {
  const userNameInput = document.getElementById('userName');
  const startJourneyBtn = document.getElementById('startJourney');
  const onboardingForm = document.getElementById('onboardingForm');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const userNameDisplay = document.getElementById('userNameDisplay');
  
  // Se já tem nome, mostrar mensagem de boas-vindas
  if (appState.user.name) {
    onboardingForm.classList.add('hidden');
    welcomeMessage.classList.remove('hidden');
    userNameDisplay.textContent = appState.user.name;
  }
  
  startJourneyBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    if (name) {
      appState.user.name = name;
      saveUserData();
      
      onboardingForm.classList.add('hidden');
      welcomeMessage.classList.remove('hidden');
      userNameDisplay.textContent = name;
      
      showToast('Bem-vindo(a), ' + name + '! 🎉', 'success');
      updateUI();
    } else {
      showToast('Por favor, digite seu nome', 'error');
    }
  });
  
  userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      startJourneyBtn.click();
    }
  });
}

// Página da Trilha
function loadTrailsPage() {
  updateProgressDisplay();
  renderTrails();
}

function updateProgressDisplay() {
  const progressText = document.getElementById('progressText');
  const progressPercentage = document.getElementById('progressPercentage');
  const progressFill = document.getElementById('progressFill');
  
  const completed = appState.user.completedTrails.length;
  const total = courseData.trail.length;
  const percentage = Math.round((completed / total) * 100);
  
  progressText.textContent = `${completed} de ${total} fases`;
  progressPercentage.textContent = `${percentage}% concluído`;
  progressFill.style.width = `${percentage}%`;
}

function renderTrails() {
  const trailsGrid = document.getElementById('trailsGrid');
  trailsGrid.innerHTML = '';
  
  courseData.trail.forEach((trail, index) => {
    const isCompleted = appState.user.completedTrails.includes(trail.id);
    const isLocked = trail.id > 1 && !appState.user.completedTrails.includes(trail.id - 1);
    
    const trailCard = document.createElement('div');
    trailCard.className = `trail-card ${isLocked ? 'locked' : ''}`;
    
    trailCard.innerHTML = `
      <div class="trail-header">
        <div class="trail-icon">${trail.icon}</div>
        <div class="trail-content">
          <h3 class="trail-title">${trail.title}</h3>
          <p class="trail-phase">${trail.phase}</p>
          <p class="trail-description">${trail.description}</p>
          <div class="trail-xp">
            <span>⭐</span>
            <span>${trail.xp} XP</span>
          </div>
        </div>
      </div>
      <div class="trail-actions">
        ${isCompleted ? 
          '<button class="btn btn-secondary" disabled>✅ Concluída</button>' :
          isLocked ? 
            '<button class="btn btn-secondary" disabled>🔒 Complete a fase anterior para desbloquear</button>' :
            '<button class="btn btn-primary" onclick="openTrailModal(' + trail.id + ')">Começar</button>'
        }
      </div>
    `;
    
    trailsGrid.appendChild(trailCard);
  });
}

function openTrailModal(trailId) {
  const trail = courseData.trail.find(t => t.id === trailId);
  if (!trail) return;
  
  const modal = document.getElementById('trailModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const completeBtn = document.getElementById('completeTrailBtn');
  
  modalTitle.textContent = trail.title;
  
  // Renderizar conteúdo
  let contentHTML = '';
  trail.content.forEach(item => {
    switch(item.type) {
      case 'text':
        contentHTML += `<p class="mb-3">${item.content}</p>`;
        break;
      case 'list':
        contentHTML += '<ul class="mb-3">';
        item.items.forEach(listItem => {
          contentHTML += `<li>${listItem}</li>`;
        });
        contentHTML += '</ul>';
        break;
    }
  });
  
  modalBody.innerHTML = contentHTML;
  
  // Configurar botão de completar
  completeBtn.onclick = () => completeTrail(trailId);
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('trailModal').classList.remove('active');
}

function completeTrail(trailId) {
  const trail = courseData.trail.find(t => t.id === trailId);
  if (!trail || appState.user.completedTrails.includes(trailId)) return;
  
  // Adicionar à lista de concluídas
  appState.user.completedTrails.push(trailId);
  appState.user.xp += trail.xp;
  
  // Verificar badges
  checkAndAwardBadges();
  
  saveUserData();
  closeModal();
  
  // Mostrar celebração
  showToast(`🎉 Fase concluída! +${trail.xp} XP`, 'success');
  
  // Atualizar UI
  updateProgressDisplay();
  renderTrails();
  updateUI();
}

function checkAndAwardBadges() {
  const completedCount = appState.user.completedTrails.length;
  const totalXP = appState.user.xp;
  
  // Primeiro Passo
  if (completedCount >= 1 && !appState.user.badges.includes('first-trail')) {
    appState.user.badges.push('first-trail');
    showToast('🎯 Badge conquistado: Primeiro Passo!', 'success');
  }
  
  // Mestre da Trilha
  if (completedCount >= 5 && !appState.user.badges.includes('trail-master')) {
    appState.user.badges.push('trail-master');
    showToast('🏆 Badge conquistado: Mestre da Trilha!', 'success');
  }
  
  // Colecionador de XP
  if (totalXP >= 500 && !appState.user.badges.includes('xp-collector')) {
    appState.user.badges.push('xp-collector');
    showToast('⭐ Badge conquistado: Colecionador de XP!', 'success');
  }
}

// Quiz
function loadQuizPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const trailId = parseInt(urlParams.get('trail')) || 1;
  
  const quiz = quizData.quizzes.find(q => q.trailId === trailId);
  if (!quiz) {
    document.getElementById('quizContainer').innerHTML = `
      <div class="text-center">
        <h2>Quiz não encontrado</h2>
        <button class="btn btn-primary" onclick="showPage('trilha')">Voltar para Trilha</button>
      </div>
    `;
    return;
  }
  
  appState.currentQuiz = quiz;
  appState.currentQuizQuestion = 0;
  appState.quizScore = 0;
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quizContainer');
  const quiz = appState.currentQuiz;
  const questionIndex = appState.currentQuizQuestion;
  const question = quiz.questions[questionIndex];
  
  if (!question) {
    renderQuizResults();
    return;
  }
  
  const progress = Math.round(((questionIndex + 1) / quiz.questions.length) * 100);
  
  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress">
        <div class="progress-info">
          <span>Questão ${questionIndex + 1} de ${quiz.questions.length}</span>
          <span>Pontuação: ${appState.quizScore}/${quiz.questions.length}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    </div>
    
    <div class="quiz-question">
      <h2>${question.question}</h2>
      <div class="quiz-options" id="quizOptions">
        ${question.options.map((option, index) => `
          <button class="quiz-option" onclick="selectQuizAnswer('${option}', ${index})">
            ${option}
          </button>
        `).join('')}
      </div>
      <div class="quiz-actions">
        <button class="btn btn-primary" id="submitAnswer" onclick="submitQuizAnswer()" disabled>
          Confirmar Resposta
        </button>
      </div>
    </div>
    
    <div id="quizFeedback" class="quiz-feedback hidden"></div>
  `;
}

function selectQuizAnswer(answer, index) {
  // Remover seleção anterior
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Selecionar nova opção
  document.querySelectorAll('.quiz-option')[index].classList.add('selected');
  
  // Habilitar botão de submit
  document.getElementById('submitAnswer').disabled = false;
  
  // Salvar resposta selecionada
  appState.selectedAnswer = answer;
}

function submitQuizAnswer() {
  const question = appState.currentQuiz.questions[appState.currentQuizQuestion];
  const isCorrect = appState.selectedAnswer === question.answer;
  
  if (isCorrect) {
    appState.quizScore++;
  }
  
  // Mostrar feedback
  const feedbackDiv = document.getElementById('quizFeedback');
  feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackDiv.innerHTML = `
    <div class="feedback-header">
      <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
      <span class="feedback-title">${isCorrect ? 'Correto!' : 'Incorreto!'}</span>
    </div>
    <p class="feedback-explanation">${question.explanation}</p>
    <button class="btn btn-primary" onclick="nextQuizQuestion()">
      ${appState.currentQuizQuestion < appState.currentQuiz.questions.length - 1 ? 'Próxima Questão' : 'Ver Resultados'}
    </button>
  `;
  feedbackDiv.classList.remove('hidden');
  
  // Desabilitar opções
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim() === question.answer) {
      btn.classList.add('correct');
    } else if (btn.classList.contains('selected') && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  document.getElementById('submitAnswer').style.display = 'none';
}

function nextQuizQuestion() {
  appState.currentQuizQuestion++;
  appState.selectedAnswer = null;
  renderQuizQuestion();
}

function renderQuizResults() {
  const container = document.getElementById('quizContainer');
  const score = appState.quizScore;
  const total = appState.currentQuiz.questions.length;
  const percentage = Math.round((score / total) * 100);
  
  let resultMessage = '';
  let resultIcon = '';
  
  if (percentage >= 80) {
    resultMessage = 'Excelente!';
    resultIcon = '🏆';
  } else if (percentage >= 60) {
    resultMessage = 'Muito Bem!';
    resultIcon = '⭐';
  } else {
    resultMessage = 'Continue Tentando!';
    resultIcon = '🔄';
  }
  
  container.innerHTML = `
    <div class="quiz-results">
      <div class="result-icon">${resultIcon}</div>
      <h2 class="result-title">${resultMessage}</h2>
      <p class="result-score">Você acertou ${score} de ${total} questões (${percentage}%)</p>
      
      <div class="result-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
      </div>
      
      <div class="result-actions">
        <button class="btn btn-secondary" onclick="retryQuiz()">🔄 Tentar Novamente</button>
        <button class="btn btn-primary" onclick="showPage('trilha')">➡️ Continuar Trilha</button>
      </div>
    </div>
  `;
}

function retryQuiz() {
  appState.currentQuizQuestion = 0;
  appState.quizScore = 0;
  appState.selectedAnswer = null;
  renderQuizQuestion();
}

// Laboratório
function initializeLaboratory() {
  // Será inicializado quando a página for carregada
}

function loadLaboratoryPage() {
  renderTemplateCategories();
  renderTemplatesList('creative'); // Categoria padrão
}

function renderTemplateCategories() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover ativo de todos
      categoryBtns.forEach(b => b.classList.remove('active'));
      // Ativar clicado
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      renderTemplatesList(category);
    });
  });
}

function renderTemplatesList(categoryId) {
  const templatesList = document.getElementById('templatesList');
  const templates = promptsData.templates.filter(t => t.category === categoryId);
  
  templatesList.innerHTML = templates.map(template => `
    <div class="template-item" onclick="selectTemplate(${template.id})">
      <h4 class="template-title">${template.title}</h4>
      <p class="template-description">${template.description}</p>
    </div>
  `).join('');
}

function selectTemplate(templateId) {
  const template = promptsData.templates.find(t => t.id === templateId);
  if (!template) return;
  
  appState.selectedTemplate = template;
  appState.templateVariables = {};
  
  // Destacar template selecionado
  document.querySelectorAll('.template-item').forEach(item => {
    item.classList.remove('active');
  });
  event.target.closest('.template-item').classList.add('active');
  
  renderTemplateEditor();
}

function renderTemplateEditor() {
  const editorSection = document.getElementById('templateEditor');
  const template = appState.selectedTemplate;
  
  if (!template) return;
  
  editorSection.innerHTML = `
    <div class="template-editor">
      <div class="editor-header">
        <h3>${template.title}</h3>
        <button class="btn btn-secondary" onclick="clearTemplate()">🔄 Limpar</button>
      </div>
      
      <div class="variables-form">
        <h4>Personalize seu Prompt</h4>
        <p>Preencha as variáveis abaixo para gerar seu prompt personalizado</p>
        
        ${template.variables.map(variable => `
          <div class="form-group">
            <label for="var_${variable.name}">${variable.name.replace(/_/g, ' ')}</label>
            <input 
              type="text" 
              id="var_${variable.name}" 
              placeholder="${variable.placeholder}"
              onchange="updateVariable('${variable.name}', this.value)"
            >
          </div>
        `).join('')}
        
        <button class="btn btn-primary" onclick="generatePrompt()">✨ Gerar Prompt</button>
      </div>
      
      <div id="generatedPrompt" class="generated-prompt hidden">
        <div class="prompt-header">
          <h4>Prompt Gerado</h4>
          <button class="btn btn-secondary" onclick="copyPrompt()">📋 Copiar</button>
        </div>
        <textarea id="promptOutput" readonly></textarea>
      </div>
    </div>
  `;
}

function updateVariable(variableName, value) {
  appState.templateVariables[variableName] = value;
}

function generatePrompt() {
  const template = appState.selectedTemplate;
  if (!template) return;
  
  let prompt = template.template;
  
  // Substituir variáveis
  template.variables.forEach(variable => {
    const value = appState.templateVariables[variable.name] || `[${variable.name}]`;
    prompt = prompt.replaceAll(`[${variable.name}]`, value);
  });
  
  // Mostrar resultado
  const promptOutput = document.getElementById('promptOutput');
  const generatedPromptDiv = document.getElementById('generatedPrompt');
  
  promptOutput.value = prompt;
  generatedPromptDiv.classList.remove('hidden');
}

function copyPrompt() {
  const promptOutput = document.getElementById('promptOutput');
  promptOutput.select();
  document.execCommand('copy');
  
  showToast('Prompt copiado! 📋', 'success');
}

function clearTemplate() {
  appState.selectedTemplate = null;
  appState.templateVariables = {};
  
  document.getElementById('templateEditor').innerHTML = `
    <div class="editor-placeholder">
      <div class="placeholder-icon">💡</div>
      <h3>Selecione um Template</h3>
      <p>Escolha um template da lista ao lado para começar a criar seu prompt</p>
    </div>
  `;
  
  // Remover seleção
  document.querySelectorAll('.template-item').forEach(item => {
    item.classList.remove('active');
  });
}

// Glossário
function initializeGlossary() {
  // Será inicializado quando a página for carregada
}

function loadGlossaryPage() {
  renderLetterFilters();
  renderGlossaryTerms();
  initializeGlossarySearch();
}

function renderLetterFilters() {
  const lettersSet = new Set();
  glossaryData.terms.forEach(term => {
    lettersSet.add(term.term.charAt(0).toUpperCase());
  });
  
  const letters = Array.from(lettersSet).sort();
  const filtersContainer = document.getElementById('letterFilters');
  
  filtersContainer.innerHTML = letters.map(letter => `
    <button class="letter-btn" onclick="filterByLetter('${letter}')">${letter}</button>
  `).join('');
}

function renderGlossaryTerms(filteredTerms = null) {
  const terms = filteredTerms || glossaryData.terms;
  const termsContainer = document.getElementById('glossaryTerms');
  const resultsCount = document.getElementById('resultsCount');
  
  resultsCount.textContent = `${terms.length} termo${terms.length !== 1 ? 's' : ''} encontrado${terms.length !== 1 ? 's' : ''}`;
  
  if (terms.length === 0) {
    termsContainer.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">📚</div>
        <h3>Nenhum termo encontrado</h3>
        <p>Tente ajustar sua busca ou filtros</p>
        <button class="btn btn-primary" onclick="clearGlossaryFilters()">Limpar filtros</button>
      </div>
    `;
    return;
  }
  
  termsContainer.innerHTML = terms.map(term => `
    <div class="glossary-term">
      <h3 class="term-title">${term.term}</h3>
      <p class="term-definition">${term.definition}</p>
    </div>
  `).join('');
}

function initializeGlossarySearch() {
  const searchInput = document.getElementById('glossarySearch');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterGlossary(searchTerm);
  });
}

function filterGlossary(searchTerm = '', letter = '') {
  let filtered = glossaryData.terms;
  
  if (searchTerm) {
    filtered = filtered.filter(term =>
      term.term.toLowerCase().includes(searchTerm) ||
      term.definition.toLowerCase().includes(searchTerm)
    );
  }
  
  if (letter) {
    filtered = filtered.filter(term =>
      term.term.charAt(0).toUpperCase() === letter
    );
  }
  
  renderGlossaryTerms(filtered);
}

function filterByLetter(letter) {
  // Toggle letter filter
  const letterBtn = event.target;
  const isActive = letterBtn.classList.contains('active');
  
  // Remover ativo de todos
  document.querySelectorAll('.letter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  if (!isActive) {
    letterBtn.classList.add('active');
    filterGlossary('', letter);
  } else {
    filterGlossary('', '');
  }
}

function clearGlossaryFilters() {
  document.getElementById('glossarySearch').value = '';
  document.querySelectorAll('.letter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  renderGlossaryTerms();
}

// Dashboard
function loadDashboardPage() {
  updateDashboardStats();
  renderUserBadges();
  updateExportSection();
}

function updateDashboardStats() {
  const dashboardUserName = document.getElementById('dashboardUserName');
  const totalXP = document.getElementById('totalXP');
  const completedTrails = document.getElementById('completedTrails');
  const totalBadges = document.getElementById('totalBadges');
  const overallProgress = document.getElementById('overallProgress');
  const dashboardProgressFill = document.getElementById('dashboardProgressFill');
  
  const completed = appState.user.completedTrails.length;
  const total = courseData.trail.length;
  const percentage = Math.round((completed / total) * 100);
  
  dashboardUserName.textContent = appState.user.name || 'Aluno';
  totalXP.textContent = appState.user.xp;
  completedTrails.textContent = `${completed}/${total}`;
  totalBadges.textContent = appState.user.badges.length;
  overallProgress.textContent = `${percentage}%`;
  dashboardProgressFill.style.width = `${percentage}%`;
  
  // Mostrar mensagem de conclusão se completou tudo
  const completionMessage = document.getElementById('completionMessage');
  if (completed === total) {
    completionMessage.classList.remove('hidden');
  } else {
    completionMessage.classList.add('hidden');
  }
}

function renderUserBadges() {
  const badgesList = document.getElementById('badgesList');
  const badgesSection = document.getElementById('badgesSection');
  
  if (appState.user.badges.length === 0) {
    badgesSection.style.display = 'none';
    return;
  }
  
  badgesSection.style.display = 'block';
  
  badgesList.innerHTML = appState.user.badges.map(badgeId => {
    const badge = badgeData[badgeId];
    if (!badge) return '';
    
    return `
      <div class="badge-item">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-content">
          <div class="badge-name">${badge.name}</div>
          <div class="badge-description">${badge.description}</div>
        </div>
      </div>
    `;
  }).join('');
}

function updateExportSection() {
  const exportBtn = document.getElementById('exportPDF');
  const exportDescription = document.getElementById('exportDescription');
  
  const completed = appState.user.completedTrails.length;
  const total = courseData.trail.length;
  const isComplete = completed === total;
  
  exportBtn.disabled = !isComplete;
  
  if (isComplete) {
    exportDescription.textContent = 'Baixe seu Guia Express de IA como certificado de conclusão';
    exportBtn.onclick = generatePDF;
  } else {
    exportDescription.textContent = `Complete todas as fases para desbloquear o certificado (faltam ${total - completed} fase(s))`;
  }
}

function generatePDF() {
  showToast('Gerando PDF... 📄', 'info');
  
  // Simular geração de PDF (em uma implementação real, usaria jsPDF)
  setTimeout(() => {
    const pdfContent = generatePDFContent();
    downloadPDF(pdfContent, `Guia_Express_IA_${appState.user.name.replace(/\s+/g, '_')}.txt`);
    showToast('PDF gerado com sucesso! 🎉', 'success');
  }, 2000);
}

function generatePDFContent() {
  return `
GUIA EXPRESS DE IA
Certificado de Conclusão

Nome: ${appState.user.name}
XP Total: ${appState.user.xp}
Fases Concluídas: ${appState.user.completedTrails.length}/${courseData.trail.length}
Data de Conclusão: ${new Date().toLocaleDateString('pt-BR')}

BADGES CONQUISTADOS:
${appState.user.badges.map(badgeId => {
  const badge = badgeData[badgeId];
  return `• ${badge.name}: ${badge.description}`;
}).join('\n')}

RESUMO DO CONTEÚDO APRENDIDO:
• Inteligência Artificial e suas principais categorias
• Sistemas baseados em regras vs. Aprendizado de Máquina
• Aprendizado Profundo e redes neurais artificiais
• IA Generativa e suas aplicações
• Agentes de IA e automação
• Aplicações práticas da IA no dia a dia
• Ferramentas de IA: texto, imagem e áudio
• Engenharia de prompt e boas práticas
• Uso ético e responsável da IA
• Privacidade e segurança em IA

DICAS RÁPIDAS PARA USAR IA:
• Seja específico em seus prompts
• Forneça contexto adequado
• Verifique sempre as informações geradas
• Respeite a privacidade e direitos autorais
• Use a IA como ferramenta de apoio, não substituição
• Continue aprendendo e experimentando

IA Academy - Curso Gamificado de Inteligência Artificial
  `;
}

function downloadPDF(content, filename) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Utilitários
function updateUI() {
  // Atualizar nome do usuário em todos os lugares
  const userNameElements = document.querySelectorAll('[id*="userName"], [id*="UserName"]');
  userNameElements.forEach(element => {
    if (element.textContent !== undefined) {
      element.textContent = appState.user.name || 'Aluno';
    }
  });
}

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-message">${message}</span>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Remover após 3 segundos
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function showLoading() {
  document.getElementById('loadingSpinner').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingSpinner').classList.add('hidden');
}

// Event Listeners globais
document.addEventListener('click', (e) => {
  // Fechar modal clicando fora
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  // Fechar modal com ESC
  if (e.key === 'Escape') {
    closeModal();
  }
});
