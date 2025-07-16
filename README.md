# 🧪 Cypress Testes Automatizados ![CI](https://github.com/VictorHugoSiqueira/Test/actions/workflows/testPipe.js.yml/badge.svg?branch=master)


# 🧪 Cypress Testes Automatizados

Este repositório contém testes automatizados utilizando o **Cypress**, organizados com o padrão **Page Object Model (POM)** e cobrindo cenários de **interface gráfica (UI)** e **API REST**.

---

## 🚀 Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Padrão Page Object Model (POM)
- Testes de API com `cy.request`

---

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│ ├── login.cy.js # Testes de login
│ ├── cadastro.cy.js # Testes de cadastro
│ └── api/
│ └── produtos.cy.js # Testes de API de produtos
├── fixtures/
├── support/
│ ├── pages/
│ │ ├── LoginPage.js
│ │ └── CadastroPage.js
│ └── commands.js
cypress.config.js

---
🔄 Integração Contínua com GitHub Actions
Este projeto possui uma pipeline configurada no GitHub Actions que executa os testes automaticamente:

✅ Todos os dias pela manhã (agendado)

✅ A cada pull request aberto

✅ A cada merge na branch master

Isso garante que todos os testes estejam sempre rodando e atualizados com o estado mais recente do código.

🔐 Segurança com GitHub Secrets
As credenciais sensíveis utilizadas durante os testes (usuário, senha, etc.) não estão hardcoded. Em vez disso:

Utilizei GitHub Secrets para armazenar os dados sensíveis com segurança

Durante a execução da pipeline, um dos steps gera dinamicamente um arquivo cypress.env.json utilizando os valores desses secrets

Dessa forma, o projeto mantém boas práticas de segurança e segue os princípios da engenharia de software segura em pipelines CI/CD.



## ✅ Testes Automatizados

### Frontend

- Login com sucesso
- Login com credenciais inválidas
- Cadastro de novo usuário

### API

- Login via API com token
- Listagem de produtos
- Cadastro de produto
- Exclusão de produto

---

## ▶️ Como executar os testes

### 1. Clonar o repositório

```bash
git clone (https://github.com/VictorHugoSiqueira/Test)
cd Test

### 2. Rodar Automação

npx cypress run

