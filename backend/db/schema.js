import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
} from "drizzle-orm/pg-core";

// Table des thèmes
export const themes = pgTable("themes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull().unique(),
});

// Table des tâches
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  themeId: integer("theme_id").references(() => themes.id),
});