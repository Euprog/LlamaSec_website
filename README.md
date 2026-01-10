# LLAMA SEC - TinyLlama Research Website 🦙🔒

## Sobre o Projeto

Este repositório contém o código-fonte do website de apresentação do Trabalho de Conclusão de Curso (TCC) do Mestrado em Cibersegurança da Universidade Federal de Uberlândia (UFU).

O projeto foca no **Fine-tuning do modelo TinyLlama 1.1B** para especialização em análise, detecção e explicação de vulnerabilidades de segurança cibernética, com ênfase em Logs de IDS (Snort) e injeções de código (SQL Injection).

## 🚀 Funcionalidades do Site

*   **Design Premium**: Interface moderna com tema "Cybersecurity Dark", utilizando Glassmorphism e gradientes animados.
*   **Resultados em Destaque**: Visualização clara das métricas de treinamento (ROUGE Score, Loss) e eficiência do modelo.
*   **Estudo de Caso**: Comparativo visual "Lado a Lado" demonstrando a capacidade do modelo de identificar SQL Injection vs. Ground Truth.
*   **Perfil dos Autores**: Seção dedicada aos pesquisadores com links profissionais (LinkedIn/GitHub).
*   **Recursos Acadêmicos**: Bloco de citação BibTeX com formatação para código e botão de cópia, além de links para Dataset e Modelo.
*   **Responsividade**: Layout totalmente adaptável para Desktop, Tablets e Mobile.

## 🛠️ Tecnologias Utilizadas

O website foi construído utilizando tecnologias web padrão, sem necessidade de frameworks pesados, garantindo alta performance e facilidade de manutenção:

*   **HTML5**: Estrutura semântica e acessível.
*   **CSS3**: Variáveis CSS (Custom Properties), Flexbox, Grid Layout e Animações Keyframe.
*   **JavaScript (Vanilla)**: Lógica para interatividade leve (Scroll suave, Lightbox de imagens, Copiar Citação).

NO code-dependencies (NPM/Yarn) são necessárias para rodar este site.

## 📦 Como Executar

Você pode visualizar o site de duas maneiras:

### Opção 1: Visualização Direta
Basta abrir o arquivo `index.html` em qualquer navegador web moderno (Chrome, Firefox, Edge).

### Opção 2: Servidor Local (Recomendado)
Para uma experiência mais próxima de produção (evitando bloqueios de CORS em alguns navegadores):

1.  Abra o terminal na pasta do projeto:
    ```bash
    cd site
    ```
2.  Inicie um servidor HTTP simples com Python:
    ```bash
    python3 -m http.server 8000
    ```
3.  Acesse `http://localhost:8000` no seu navegador.

## 👥 Autores

*   **Josean Mário Moreira Rodrigues** - *Mestrando em Cibersegurança & Full-Stack/Data Specialist* - [GitHub](https://github.com/Euprog) | [LinkedIn](https://www.linkedin.com/in/josean-moreira-40597828b/)
*   **Wadson Fernandes Alves** - *Orientador & Gerenciador de Redes*

## 🎓 Instituição

**Universidade Federal de Uberlândia (UFU)**
Faculdade de Computação (FACOM)
Programa de Pós-graduação em Cibersegurança

---
© 2025 LLAMA SEC Research. Developed by Josean Rodrigues.
