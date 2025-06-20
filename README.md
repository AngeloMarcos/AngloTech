# AngloTech

This repository contains a Next.js frontend and a NestJS backend used for experiments with a simple course platform.  The projects live inside the `frontend` and `backend` folders respectively.

## Deploying the Frontend to Vercel

A `vercel.json` configuration is included so Vercel can build the Next.js application without additional settings.  To deploy:

1. Push this repository to GitHub or another Git provider.
2. Sign in to [Vercel](https://vercel.com/) and import the project.
3. When prompted for Environment Variables, add `NEXT_PUBLIC_API_URL` pointing to the public URL of the backend (e.g. `https://api.example.com`).
4. Trigger the deploy.  Vercel will detect `vercel.json` and build the app automatically.

## Required Environment Variables

### Frontend

Set the following variable in Vercel or in a local `.env.local` file:

- `NEXT_PUBLIC_API_URL` – base URL of the backend API.  An example local file is available at `frontend/env.local`.

### Backend

Create a `.env` file in `backend` (you can copy `backend/.env.example`) and provide:

- `DB_HOST` – database host
- `DB_PORT` – database port
- `DB_USER` – database user
- `DB_PASS` – database password
- `DB_NAME` – database name
- `JWT_SECRET` – secret used when signing JWT tokens
- `CORS_ORIGIN` – URL allowed to access the API (e.g. your Vercel domain)

## Running or Deploying the Backend

The backend can run on any server or container that supports Node.js and MySQL.  Typical steps:

```bash
cd backend
npm install
npm run start
```

Ensure your `.env` file is populated with the variables described above and that the service is reachable from the frontend via `NEXT_PUBLIC_API_URL`.
