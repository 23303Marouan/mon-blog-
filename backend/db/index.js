import dotenv from "dotenv";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config({ path: "../.env" });

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

// Connexion Drizzle avec l'API de la version 1.0.0-rc.5
export const db = drizzle({
  client: pool,
});