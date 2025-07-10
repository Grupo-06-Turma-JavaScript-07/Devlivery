# 🥗 DevLivery - Deploy de sabor e saúde no seu dia

Bem-vindo ao repositório do **DevLlivery** — uma plataforma de **delivery de comida saudável** desenvolvida com foco em praticidade, organização e bem-estar! 💚

Este repositório contém o **backend** da aplicação, desenvolvido com **Node.js**, **NestJS** e **TypeScript**, que oferece uma API segura para gerenciar produtos, categorias e usuários.

---

## ✨ Funcionalidades

- ✅ Cadastro de produtos com:
  - Nome 📝
  - Preço 💲
  - Descrição 📃
  - Data de validade 📅
  - Categoria 🍱

- 🔍 Pesquisa de produtos:
  - Por nome 🧠
  - Por categoria 📂

- 🧠 Sistema de recomendações saudáveis:
  - Sugestões automáticas de produtos saudáveis

- 👤 Cadastro e autenticação de usuários:
  - Registro com e-mail e senha
  - Autenticação com JWT

---

## 🛠️ Tecnologias Utilizadas

- 🔧 **Node.js**
- 🧠 **TypeScript**
- 🚀 **NestJS**
- 🧪 **Jest** (testes)
- 📖 **Swagger** (documentação de API)

---

## 🧱 Estrutura da Aplicação

### 🥙 Produto

| Campo         | Tipo     | Descrição                        |
|---------------|----------|----------------------------------|
| nome          | string   | Nome do produto                  |
| descricao     | string   | Ingredientes do produto          |
| preco         | number   | Preço do produto                 |
| validade      | Date     | Data de validade                 |
| categoria     | Categoria| Categoria associada              |

### 🍱 Categoria

| Campo         | Tipo     | Descrição                        |
|---------------|----------|----------------------------------|
| id            | number   | Identificador da categoria       |
| nome          | string   | Nome da categoria (ex: Saladas) |

### 👤 Usuário

| Campo         | Tipo     | Descrição                        |
|---------------|----------|----------------------------------|
| email         | string   | E-mail do usuário                |
| senha         | string   | Senha criptografada              |

---

