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
│ └── (dados de teste, se necessário)
├── support/
│ ├── pages/
│ │ ├── LoginPage.js
│ │ └── CadastroPage.js
│ └── commands.js
cypress.config.js

---

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
