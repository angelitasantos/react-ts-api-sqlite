# Projeto Full Stack
- React + TypeScript + Node.js + Express + SQLite3 + Jest + JWT
- Arquitetura MVC + Programação Orientada a Objetos

---

## Visão do projeto

Este projeto é uma aplicação full stack organizada em arquitetura **MVC (Controller, Model, Routes, Service)** com **Programação Orientada a Objetos**, dividida em backend e frontend.

### Stack principal

- **Backend**
  - Node.js v18
  - TypeScript
  - Express
  - SQLite3
  - JWT
  - Jest
- **Frontend**
  - React
  - TypeScript
  - Vite
- **Arquitetura**
  - MVC
  - Serviços por módulo
  - Organização por domínio

### Módulos principais

- **web-home**
  - páginas públicas: `Home`, `About`, `Contact`
  - gerenciamento do conteúdo das páginas
- **web-auth**
  - autenticação com JWT
- **web-users**
  - gerenciamento de usuários
- **web-manager**
  - dashboard e páginas de administração

---

## Tecnologias utilizadas

### Backend

- Node.js v18
- TypeScript
- Express
- SQLite3
- JWT (`jsonwebtoken`)
- Hash de senha (`bcrypt`)
- Variáveis de ambiente (`dotenv`)
- Testes com Jest + Supertest

### Frontend

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Jest / Testing Library

---

## Pré-requisitos

Antes de começar, instale:

- **Node.js v18**
- **npm**
- **Git**

### Verificar versões

```bash
node -v
npm -v
git --version
```

---

## Como rodar o frontend

### 1. Criar o projeto com Vite

```bash
npm create vite@5 frontend -- --template react-ts
```

### 2. Entrar na pasta do frontend

```bash
cd frontend
npm install
```

### 3. Instalar dependências

```bash
npm install react-router-dom axios
```

### 4. Instalar dependências de desenvolvimento

```bash
npm install -D jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

### 5. Rodar em desenvolvimento

```bash
npm run dev
```

---


## Objetivo funcional

O módulo `web-home` será composto por 3 páginas:

- `Home`
- `About`
- `Contact`

Cada página terá sua própria organização em MVC no backend.

No banco de dados existirão as tabelas:

- `home`
- `about`
- `contact`

Essas tabelas armazenam os conteúdos que serão exibidos no frontend. A regra principal é:

- quando um novo registro for criado como ativo nas tabelas `home` e `about`, os registros anteriores daquela tabela devem ser desativados
- cada tabela terá operações de **CRUD**
- apenas um registro pode estar ativo por vez nas tabelas `home` e `about`
- tabela `contact` serão armazenados os contatos efetuados pelo formulario da pagina

---

## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).