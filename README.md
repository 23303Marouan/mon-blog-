# Mon portfolio

- `frontend/` : site React (Vite) avec deux pages, Blog (`/`) et Fruits et thèmes (`/fruits`)
- `backend/`  : API Express + Drizzle + PostgreSQL (port 3000)
- `docker-compose.yml` : PostgreSQL + Adminer

## Lancer le projet

Créer un fichier `.env` à la racine (jamais versionné) :

    POSTGRES_USER=...
    POSTGRES_PASSWORD=...
    POSTGRES_DB=...

Puis, dans trois terminaux :

    docker compose up            # base de données
    cd backend && npm install && node server.js
    cd frontend && npm install && npm run dev
