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
| foto          | string   | Foto do produto                  |
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

## 💿 Como Acessar e Rodar o Projeto

Para executar este projeto localmente, você precisará ter o **Back-end** e o **Front-end** rodando em terminais separados.

### Pré-requisitos

Antes de começar, garanta que você tenha instalado:
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (para o Front-end)
* [Git](https://git-scm.com/)
* Um cliente de banco de dados **PostgreSQL** (como DBeaver ou PgAdmin).

### 🎲 Rodando o Back-end (Servidor)

1.  **Clone o repositório do Back-end:**
    ```bash
    git clone [https://github.com/Grupo-06-Turma-JavaScript-07/Devlivery](https://github.com/Grupo-06-Turma-JavaScript-07/Devlivery)
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd Devlivery
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure o Banco de Dados:**
    * Certifique-se de que seu servidor PostgreSQL está rodando.
    * Crie um banco de dados para o projeto.
    * As credenciais e o nome do banco são configurados no seu back-end, provavelmente em um arquivo de serviço de dados (`data/services/dev.service.ts`) ou em variáveis de ambiente.

5.  **Inicie o servidor:**
    ```bash
    npm run start:dev
    ```
    * O servidor estará rodando em `http://localhost:4000`.
    * Você pode acessar a documentação da API em `http://localhost:4000/swagger`.

## 👨‍💻 Equipe de Desenvolvedores

| [<img src="https://ik.imagekit.io/pedrolazzz/Juliana_Freddi_2_1.jpg?updatedAt=1754919604935" width="115" height="115"><br><sub>Juliana Freddi</sub>](https://github.com/ddifreju) | [<img src="https://ik.imagekit.io/pedrolazzz/Larissa.jpg?updatedAt=1754919604772" width="115" height="115"><br><sub>Larissa Santana</sub>](https://github.com/Santana-larissa) | [<img src="https://ik.imagekit.io/pedrolazzz/perfil20quadrado.jpg?updatedAt=1754919604936" width="115" height="115"><br><sub>Ludmily Oliveira</sub>](https://github.com/LudmilyS) | [<img src="https://ik.imagekit.io/pedrolazzz/Untitled-1.png?updatedAt=1754571230256" width="115" height="115"><br><sub>Matheus Schneider</sub>](https://github.com/matheusschneider1) | [<img src="https://ik.imagekit.io/pedrolazzz/Pedro%20Elias%20%20(3).jpg?updatedAt=1754566149442" width="115" height="115"><br><sub>Pedro Elias</sub>](https://github.com/pedro-eliasd) |
| :---: | :---: | :---: | :---: | :---: |

---

<p align="center">
  Projeto desenvolvido para o bootcamp de Pessoa Desenvolvedora Web Full Stack da Generation Brasil.
</p>

