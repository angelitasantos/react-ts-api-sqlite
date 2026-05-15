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


## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).