# AngloTech

Este repositório hospeda o backend (NestJS) e o frontend (Next.js) da plataforma AngloTech.

## Requisitos

- Node.js 18+
- Banco de dados MySQL (ou MariaDB) **ou** SQLite

## Configuração

1. Clone o repositório e acesse a pasta raiz.
2. Copie `backend/.env.example` para `backend/.env`. Por padrão usamos SQLite. Se quiser MySQL, defina `DB_TYPE=mysql` e ajuste as credenciais.
3. Edite `frontend/env.local` se precisar apontar para outra URL do backend. Por padrão, o frontend espera o backend em `http://localhost:3001`.

## Instalação

```bash
npm install --prefix backend
npm install --prefix frontend
```

Nao execute `npm install` na raiz; o arquivo `package.json` principal nao possui dependencias.

## Executando em desenvolvimento

Abra dois terminais:

```bash
# terminal 1 - API
npm run dev --prefix backend

# terminal 2 - Web
npm run dev --prefix frontend
```

A aplicação ficará disponível em `http://localhost:3000`.

## Usuários de demonstração

Execute o seed para criar contas administrativas de exemplo:

```bash
npm run seed --prefix backend
```

Se o login ainda mostrar "Credenciais inválidas", certifique-se de que o seed
foi executado e de que o arquivo `backend/database.sqlite` existe.

Todas utilizam a senha `admin`:

- admin1@anglotech.com
- admin2@anglotech.com
- admin3@anglotech.com
- admin4@anglotech.com
- admin5@anglotech.com

## Deploy no Vercel

A configuração de monorepo já está pronta no arquivo `vercel.json`. Ao criar um projeto no Vercel, a etapa de build executará:

```bash
npm --prefix backend install && npm --prefix backend run build \
  && npm --prefix frontend install && npm --prefix frontend run build
```

O Vercel servirá o frontend como app Next.js e disponibilizará a API pela área `/api`.
