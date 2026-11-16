CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"theme_id" integer
);
--> statement-breakpoint
CREATE TABLE "themes" (
	"id" serial PRIMARY KEY,
	"title" varchar(255) NOT NULL UNIQUE
);
--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_theme_id_themes_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "themes"("id");