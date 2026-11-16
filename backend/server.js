
import express from "express";
import cors from "cors";
import { eq } from "drizzle-orm";

import { db } from "./db/index.js";
import { themes, tasks } from "./db/schema.js";

const app = express();

app.use(cors());
app.use(express.json());

// Vérifier le serveur
app.get("/", (req, res) => {
  res.send("Mon serveur fonctionne !");
});

// ========================
// THEMES
// ========================

// Récupérer tous les thèmes
app.get("/themes", async (req, res) => {
  try {
    const result = await db.select().from(themes);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur récupération thèmes" });
  }
});

// Ajouter un thème
app.post("/themes", async (req, res) => {
  try {
    const { title } = req.body;

    const result = await db
      .insert(themes)
      .values({ title })
      .returning();

    res.status(201).json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur ajout thème" });
  }
});

// Supprimer un thème
app.delete("/themes/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    // Détacher les tâches du thème
    await db
      .update(tasks)
      .set({ themeId: null })
      .where(eq(tasks.themeId, id));

    // Supprimer le thème
    await db
      .delete(themes)
      .where(eq(themes.id, id));

    res.json({ message: "Thème supprimé" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur suppression thème" });
  }
});

// ========================
// TACHES
// ========================

// Récupérer toutes les tâches
app.get("/tasks", async (req, res) => {
  try {
    const result = await db.select().from(tasks);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur récupération tâches" });
  }
});

// Ajouter une tâche
app.post("/tasks", async (req, res) => {
  try {
    const { title, themeId } = req.body;

    const result = await db
      .insert(tasks)
      .values({ title, themeId })
      .returning();

    res.status(201).json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur ajout tâche" });
  }
});

// Modifier une tâche
app.put("/tasks/:id", async (req, res) => {
  try {
    const { title, themeId } = req.body;

    const result = await db
      .update(tasks)
      .set({ title, themeId })
      .where(eq(tasks.id, Number(req.params.id)))
      .returning();

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur modification tâche" });
  }
});

// Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
  try {
    await db
      .delete(tasks)
      .where(eq(tasks.id, Number(req.params.id)));

    res.json({ message: "Tâche supprimée" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur suppression tâche" });
  }
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
