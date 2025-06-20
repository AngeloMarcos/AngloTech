# AngloTech

Este repositório hospeda o backend (NestJS) e o frontend (Next.js) da plataforma AngloTech.

## Requisitos

- Node.js 18+
- Banco de dados MySQL (ou MariaDB)

## Configuração

1. Clone o repositório e acesse a pasta raiz.
2. Copie `backend/.env.example` para `backend/.env` e ajuste as credenciais do banco.
3. Edite `frontend/env.local` se precisar apontar para outra URL do backend.

## Instalação

```bash
npm install --prefix backend
npm install --prefix frontend
```

## Executando em desenvolvimento

Abra dois terminais:

```bash
# terminal 1 - API
npm run dev --prefix backend

# terminal 2 - Web
npm run dev --prefix frontend
```

A aplicação ficará disponível em `http://localhost:3000`.

## Deploy no Vercel

A configuração de monorepo já está pronta no arquivo `vercel.json`. Ao criar um projeto no Vercel, a etapa de build executará:

```bash
npm --prefix backend install && npm --prefix backend run build \
  && npm --prefix frontend install && npm --prefix frontend run build
```

O Vercel servirá o frontend como app Next.js e disponibilizará a API pela área `/api`.
