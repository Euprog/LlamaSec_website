/**
 * LLAMA SEC - Translations
 * Portuguese (PT) and English (EN) translations
 */

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.abstract": "Resumo",
    "nav.methodology": "Metodologia",
    "nav.results": "Resultados",
    "nav.technical": "Detalhes Técnicos",
    "nav.resources": "Recursos",

    // Hero Section
    "hero.subtitle": "Fine-tuning do TinyLlama 1.1B para Análise de Vulnerabilidades em Cibersegurança",
    "hero.tagline": "Explorando o potencial de Large Language Models compactos para detecção e análise automatizada de vulnerabilidades",
    "hero.btn.research": "Ver Pesquisa",
    "hero.btn.github": "Acessar GitHub",

    // Abstract Section
    "abstract.title": "Resumo do Projeto",
    "abstract.objective.title": "Objetivo",
    "abstract.objective.text": "Este trabalho investiga a aplicação de Small Language Models (SLMs) em Inteligência Artificial Explicável (XAI) para Cibersegurança. O objetivo principal é desenvolver e validar um pipeline de fine-tuning para o modelo TinyLlama-1.1B, visando a interpretação automatizada de logs de segurança com baixo custo computacional.",
    "abstract.motivation.title": "Motivação",
    "abstract.motivation.text": "A dependência de alto poder computacional limita o uso de Large Language Models (LLMs) em ambientes locais e críticos. Modelos compactos oferecem uma alternativa viável para preservar a privacidade dos dados e reduzir a latência, permitindo que analistas de segurança obtenham explicações técnicas detalhadas sem depender de nuvens externas.",
    "abstract.contributions.title": "Principais Contribuições",

    // Methodology Section
    "methodology.title": "Metodologia",
    "methodology.model.title": "Modelo Base",
    "methodology.model.text": "Modelo compacto baseado na arquitetura Llama, com 1.1 bilhão de parâmetros, ideal para fine-tuning em hardware limitado mantendo performance competitiva.",
    "methodology.dataset.title": "Dataset",
    "methodology.dataset.text": "Dataset híbrido composto por logs reais do IDS Snort enriquecidos com interpretações de ameaças geradas sinteticamente pela API Gemini, criando pares de instrução-resposta de alta qualidade.",
    "methodology.training.title": "Técnica de Treinamento",
    "methodology.training.text": "Utilização de SFT para especializar o modelo na tarefa de XAI. O Gemini atuou como \"professor\" para gerar exemplos de treinamento, permitindo que o TinyLlama aprendesse a articular explicações técnicas.",
    "methodology.infrastructure.title": "Infraestrutura",
    "methodology.infrastructure.text": "Experimentos conduzidos em ambiente controlado na nuvem, garantindo reprodutibilidade e acesso a recursos de GPU para o processo de fine-tuning.",
    "methodology.pipeline.title": "Pipeline de Treinamento",
    "methodology.pipeline.step1": "Preparação: Conversão de logs Snort para formato textual estruturado.",
    "methodology.pipeline.step2": "Enriquecimento: Geração de explanations via API Gemini (Teacher).",
    "methodology.pipeline.step3": "Fine-Tuning: Treinamento do TinyLlama-1.1B com os dados sintéticos.",
    "methodology.pipeline.step4": "Validação: Monitoramento de Loss e métricas ROUGE.",
    "methodology.pipeline.step5": "Avaliação: Comparação qualitativa com limpeza de tokens.",
    "methodology.prompt.title": "Template de Prompt (Instrução)",
    "methodology.prompt.text": "O modelo foi treinado para seguir rigorosamente este formato de raciocínio:",

    // Results Section
    "results.title": "Resultados",
    "results.metrics.title": "Métricas de Performance",
    "results.metrics.loss": "Convergência (Loss)",
    "results.metrics.quality": "Qualidade (ROUGE)",
    "results.metrics.text": "Os gráficos acima ilustram a estabilidade do treinamento (esquerda) e a qualidade das explicações geradas (direita). Observa-se que o modelo evita overfitting mantendo a loss de validação controlada, enquanto atinge seu pico de performance ROUGE com janelas de 512 tokens.",
    "results.stats.params": "Parâmetros (B)",
    "results.stats.epochs": "Épocas Treinamento",
    "results.casestudy.title": "Estudo de Caso: SQL Injection",
    "results.casestudy.desc": "Comparação direta entre o output gerado pelo TinyLlama 1.1B (Fine-tuned) e a Referência (Teacher).",
    "results.casestudy.input": "Entrada (Log Snort)",
    "results.casestudy.generated": "TinyLlama 1.1B (Gerado)",
    "results.casestudy.reference": "Referência (Ideal)",
    "results.casestudy.threat": "Ameaça Provável:",
    "results.casestudy.actions": "Ações Recomendadas:",
    "results.casestudy.threat.gen": "SQL Injection/SQL Inspeção. O alerta sugere que um atacante está tentando explorar uma falha na aplicação para inserir texto malicioso.",
    "results.casestudy.action1.gen": "Isolar o Servidor: Imediatamente, isole o servidor web (192.168.13.10).",
    "results.casestudy.action2.gen": "Investigar Logs: Analise logs do servidor (Apache/Nginx).",
    "results.casestudy.action3.gen": "Analisar Tráfego: Verifique conexão HTTP 83.170.101.10.",
    "results.casestudy.threat.ref": "Tentativa de SQL Injection. O servidor está respondendo com erros SQL (mysql_query) em páginas HTTP 200, indicando falha no tratamento de input.",
    "results.casestudy.action1.ref": "Resposta Imediata: Isole o servidor e bloqueie o IP 83.170.101.10.",
    "results.casestudy.action2.ref": "Análise Forense: Analise logs e código da aplicação.",
    "results.casestudy.action3.ref": "Remediação: Use prepared statements.",
    "results.findings.title": "Principais Descobertas",
    "results.findings.item1": "Importância do Contexto: Janelas de 512 tokens são cruciais para a qualidade das explicações XAI.",
    "results.findings.item2": "Viabilidade do SLM: Modelos compactos podem substituir LLMs em nuvem para tarefas específicas.",
    "results.findings.item3": "Ponto de Quebra: Janelas menores que 128 tokens degradam severamente a coerência.",
    "results.findings.item4": "Estabilidade: Convergência de aprendizado rápida e estável (4 épocas).",
    "results.strengths.title": "Pontos Fortes",
    "results.strengths.item1": "Independência de APIs pagas e conexão com internet",
    "results.strengths.item2": "Privacidade total dos dados (processamento local)",
    "results.strengths.item3": "Especialização em vocabulário de segurança (Snort)",
    "results.strengths.item4": "Baixo custo de implementação e inferência",
    "results.limitations.title": "Limitações",
    "results.limitations.item1": "Dependência crítica de janelas de contexto amplas (>256 tokens)",
    "results.limitations.item2": "Necessidade de dados de treinamento sintéticos de alta qualidade",
    "results.limitations.item3": "Menor capacidade de generalização 'zero-shot' que LLMs massivos",
    "results.limitations.item4": "Risco de alucinação em cenários muito fora do padrão de treino",

    // Technical Section
    "technical.title": "Detalhes Técnicos",
    "technical.hyperparams.title": "Hiperparâmetros",
    "technical.log.title": "Log de Treinamento Real",
    "technical.architecture.title": "Arquitetura do Modelo (QLoRA)",
    "technical.inference.title": "Configuração de Inferência",
    "technical.requirements.title": "Requisitos do Sistema",
    "technical.requirements.training": "Treinamento (Google Colab)",
    "technical.requirements.inference": "Inferência",
    "technical.requirements.gpu.train": "GPU: NVIDIA Tesla T4 (15GB VRAM)",
    "technical.requirements.stack": "Stack: Transformers, TRL, Accelerate",
    "technical.requirements.eval": "Avaliação: Evaluate, NLTK, ROUGE",
    "technical.requirements.time": "Tempo Total: ~2h 10m (131 min)",
    "technical.requirements.gpu.inf": "GPU: RTX 3060 12GB+",
    "technical.requirements.ram": "RAM: 16GB+",
    "technical.requirements.storage": "Storage: 10GB+",
    "technical.requirements.latency": "Latência: <100ms",
    "technical.dependencies.title": "Dependências Principais",

    // Resources Section
    "resources.title": "Recursos",
    "resources.paper.title": "Paper / TCC",
    "resources.paper.text": "Leia o trabalho completo com todos os detalhes da pesquisa, metodologia, experimentos e resultados.",
    "resources.paper.btn": "Download PDF",
    "resources.github.title": "Repositório GitHub",
    "resources.github.text": "Acesse o código-fonte completo, notebooks de treinamento, datasets e documentação técnica.",
    "resources.github.btn": "Ver no GitHub",
    "resources.huggingface.title": "Modelo no Hugging Face",
    "resources.huggingface.text": "Modelo fine-tuned disponível para download e uso imediato através da plataforma Hugging Face.",
    "resources.huggingface.btn": "Ver Modelo",
    "resources.dataset.title": "Dataset",
    "resources.dataset.text": "Dataset curado utilizado para o fine-tuning, incluindo exemplos de vulnerabilidades e análises.",
    "resources.dataset.btn": "Acessar Dataset",
    "resources.authors.title": "Sobre os Autores",
    "resources.authors.josean.role": "Especialista em Segurança Cibernética",
    "resources.authors.wadson.role": "Especialista em Segurança Cibernética",
    "resources.authors.wadson.subrole": "Gerenciador de Redes",
    "resources.authors.university": "Universidade Federal de Uberlândia",
    "resources.citation.title": "Citação",
    "resources.citation.text": "Se você utilizar este trabalho em sua pesquisa, por favor cite:",

    // Footer
    "footer.copyright": "© 2025 Josean Rodrigues - Wadson Alves - Pós-graduação em Cibersegurança",
    "footer.developed": "Desenvolvido como parte do Trabalho de Conclusão de Curso"
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.abstract": "Abstract",
    "nav.methodology": "Methodology",
    "nav.results": "Results",
    "nav.technical": "Technical Details",
    "nav.resources": "Resources",

    // Hero Section
    "hero.subtitle": "Fine-tuning TinyLlama 1.1B for Vulnerability Analysis in Cybersecurity",
    "hero.tagline": "Exploring the potential of compact Large Language Models for automated vulnerability detection and analysis",
    "hero.btn.research": "View Research",
    "hero.btn.github": "Access GitHub",

    // Abstract Section
    "abstract.title": "Project Abstract",
    "abstract.objective.title": "Objective",
    "abstract.objective.text": "This work investigates the application of Small Language Models (SLMs) in Explainable Artificial Intelligence (XAI) for Cybersecurity. The main goal is to develop and validate a fine-tuning pipeline for the TinyLlama-1.1B model, aimed at automated interpretation of security logs with low computational cost.",
    "abstract.motivation.title": "Motivation",
    "abstract.motivation.text": "The dependency on high computational power limits the use of Large Language Models (LLMs) in local and critical environments. Compact models offer a viable alternative to preserve data privacy and reduce latency, allowing security analysts to obtain detailed technical explanations without relying on external clouds.",
    "abstract.contributions.title": "Main Contributions",

    // Methodology Section
    "methodology.title": "Methodology",
    "methodology.model.title": "Base Model",
    "methodology.model.text": "Compact model based on the Llama architecture, with 1.1 billion parameters, ideal for fine-tuning on limited hardware while maintaining competitive performance.",
    "methodology.dataset.title": "Dataset",
    "methodology.dataset.text": "Hybrid dataset composed of real IDS Snort logs enriched with threat interpretations synthetically generated by the Gemini API, creating high-quality instruction-response pairs.",
    "methodology.training.title": "Training Technique",
    "methodology.training.text": "Using SFT to specialize the model in the XAI task. Gemini acted as a \"teacher\" to generate training examples, allowing TinyLlama to learn to articulate technical explanations.",
    "methodology.infrastructure.title": "Infrastructure",
    "methodology.infrastructure.text": "Experiments conducted in a controlled cloud environment, ensuring reproducibility and access to GPU resources for the fine-tuning process.",
    "methodology.pipeline.title": "Training Pipeline",
    "methodology.pipeline.step1": "Preparation: Conversion of Snort logs to structured text format.",
    "methodology.pipeline.step2": "Enrichment: Generation of explanations via Gemini API (Teacher).",
    "methodology.pipeline.step3": "Fine-Tuning: Training TinyLlama-1.1B with synthetic data.",
    "methodology.pipeline.step4": "Validation: Monitoring Loss and ROUGE metrics.",
    "methodology.pipeline.step5": "Evaluation: Qualitative comparison with token cleanup.",
    "methodology.prompt.title": "Prompt Template (Instruction)",
    "methodology.prompt.text": "The model was trained to strictly follow this reasoning format:",

    // Results Section
    "results.title": "Results",
    "results.metrics.title": "Performance Metrics",
    "results.metrics.loss": "Convergence (Loss)",
    "results.metrics.quality": "Quality (ROUGE)",
    "results.metrics.text": "The charts above illustrate training stability (left) and the quality of generated explanations (right). The model avoids overfitting by keeping validation loss controlled, while reaching peak ROUGE performance with 512-token windows.",
    "results.stats.params": "Parameters (B)",
    "results.stats.epochs": "Training Epochs",
    "results.casestudy.title": "Case Study: SQL Injection",
    "results.casestudy.desc": "Direct comparison between the output generated by TinyLlama 1.1B (Fine-tuned) and the Reference (Teacher).",
    "results.casestudy.input": "Input (Snort Log)",
    "results.casestudy.generated": "TinyLlama 1.1B (Generated)",
    "results.casestudy.reference": "Reference (Ideal)",
    "results.casestudy.threat": "Probable Threat:",
    "results.casestudy.actions": "Recommended Actions:",
    "results.casestudy.threat.gen": "SQL Injection/SQL Inspection. The alert suggests an attacker is trying to exploit an application flaw to insert malicious text.",
    "results.casestudy.action1.gen": "Isolate the Server: Immediately isolate the web server (192.168.13.10).",
    "results.casestudy.action2.gen": "Investigate Logs: Analyze server logs (Apache/Nginx).",
    "results.casestudy.action3.gen": "Analyze Traffic: Check HTTP connection 83.170.101.10.",
    "results.casestudy.threat.ref": "SQL Injection attempt. The server is responding with SQL errors (mysql_query) in HTTP 200 pages, indicating input handling failure.",
    "results.casestudy.action1.ref": "Immediate Response: Isolate the server and block IP 83.170.101.10.",
    "results.casestudy.action2.ref": "Forensic Analysis: Analyze logs and application code.",
    "results.casestudy.action3.ref": "Remediation: Use prepared statements.",
    "results.findings.title": "Key Findings",
    "results.findings.item1": "Context Importance: 512-token windows are crucial for XAI explanation quality.",
    "results.findings.item2": "SLM Viability: Compact models can replace cloud LLMs for specific tasks.",
    "results.findings.item3": "Breaking Point: Windows smaller than 128 tokens severely degrade coherence.",
    "results.findings.item4": "Stability: Fast and stable learning convergence (4 epochs).",
    "results.strengths.title": "Strengths",
    "results.strengths.item1": "Independence from paid APIs and internet connection",
    "results.strengths.item2": "Complete data privacy (local processing)",
    "results.strengths.item3": "Specialization in security vocabulary (Snort)",
    "results.strengths.item4": "Low implementation and inference cost",
    "results.limitations.title": "Limitations",
    "results.limitations.item1": "Critical dependency on wide context windows (>256 tokens)",
    "results.limitations.item2": "Need for high-quality synthetic training data",
    "results.limitations.item3": "Lower 'zero-shot' generalization capacity than massive LLMs",
    "results.limitations.item4": "Hallucination risk in scenarios far from training patterns",

    // Technical Section
    "technical.title": "Technical Details",
    "technical.hyperparams.title": "Hyperparameters",
    "technical.log.title": "Real Training Log",
    "technical.architecture.title": "Model Architecture (QLoRA)",
    "technical.inference.title": "Inference Configuration",
    "technical.requirements.title": "System Requirements",
    "technical.requirements.training": "Training (Google Colab)",
    "technical.requirements.inference": "Inference",
    "technical.requirements.gpu.train": "GPU: NVIDIA Tesla T4 (15GB VRAM)",
    "technical.requirements.stack": "Stack: Transformers, TRL, Accelerate",
    "technical.requirements.eval": "Evaluation: Evaluate, NLTK, ROUGE",
    "technical.requirements.time": "Total Time: ~2h 10m (131 min)",
    "technical.requirements.gpu.inf": "GPU: RTX 3060 12GB+",
    "technical.requirements.ram": "RAM: 16GB+",
    "technical.requirements.storage": "Storage: 10GB+",
    "technical.requirements.latency": "Latency: <100ms",
    "technical.dependencies.title": "Main Dependencies",

    // Resources Section
    "resources.title": "Resources",
    "resources.paper.title": "Paper / Thesis",
    "resources.paper.text": "Read the complete work with all research details, methodology, experiments and results.",
    "resources.paper.btn": "Download PDF",
    "resources.github.title": "GitHub Repository",
    "resources.github.text": "Access the complete source code, training notebooks, datasets and technical documentation.",
    "resources.github.btn": "View on GitHub",
    "resources.huggingface.title": "Model on Hugging Face",
    "resources.huggingface.text": "Fine-tuned model available for download and immediate use through the Hugging Face platform.",
    "resources.huggingface.btn": "View Model",
    "resources.dataset.title": "Dataset",
    "resources.dataset.text": "Curated dataset used for fine-tuning, including examples of vulnerabilities and analyses.",
    "resources.dataset.btn": "Access Dataset",
    "resources.authors.title": "About the Authors",
    "resources.authors.josean.role": "Cybersecurity Specialist",
    "resources.authors.wadson.role": "Cybersecurity Specialist",
    "resources.authors.wadson.subrole": "Network Manager",
    "resources.authors.university": "Federal University of Uberlândia",
    "resources.citation.title": "Citation",
    "resources.citation.text": "If you use this work in your research, please cite:",

    // Footer
    "footer.copyright": "© 2025 Josean Rodrigues - Wadson Alves - Cybersecurity Graduate Program",
    "footer.developed": "Developed as part of the Final Course Project"
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'pt';

// Set language function
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  
  // Update toggle button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Auto-detect browser language on first visit
  if (!localStorage.getItem('lang')) {
    const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
    currentLang = browserLang;
  }
  
  // Apply saved/detected language
  setLanguage(currentLang);
  
  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
