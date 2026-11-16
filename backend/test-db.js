import dotenv from "dotenv";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config({ path: "../.env" });

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const db = drizzle({ client: pool });

try {
  const result = await db.execute("SELECT 1");
  console.log("Drizzle fonctionne :", result);
} catch (error) {
  console.error("Erreur Drizzle :", error);
} finally {
  await pool.end();
}