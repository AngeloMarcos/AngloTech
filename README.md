# AngloTech

<<<<<<< HEAD
Copie os arquivos de variáveis de ambiente antes de iniciar o projeto:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/env.local
```

Altere os valores conforme sua configuração local.
=======
AngloTech is a demo platform for technology courses. The backend is built with **NestJS** and exposes a REST API while the frontend uses **Next.js** with Tailwind CSS for the UI. Together they showcase user registration, login and a dashboard with example metrics and course content.

## Backend Setup

```bash
cd backend
npm install
```

The API expects a MySQL database. Configure the following environment variables (shown with their defaults):

- `DB_HOST` (default `localhost`)
- `DB_PORT` (default `3306`)
- `DB_USER` (default `root`)
- `DB_PASS` (default `root`)
- `DB_NAME` (default `plataforma`)
- `JWT_SECRET` secret used to sign tokens

Start the development server:

```bash
npm run dev
```

To populate demo users run the seed script:

```bash
npm run seed
```

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file (or edit `env.local`) with the API URL:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Then launch the Next.js dev server:

```bash
npm run dev
```

Access `http://localhost:3000` in your browser.

## Seeding the Database

Run `npm run seed` inside the **backend** directory to create demo accounts if the database is empty. This helps during local development.
>>>>>>> temp-codex/document-setup-steps-for-backend-and-frontend
