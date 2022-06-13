BEGIN;

DROP TABLE IF EXISTS "projects", "techs", "packages", "components", "designPatterns", "texts", "screenshots", "PROJ_TECH", "PROJ_PACK", "PROJ_COMP", "PROJ_DESPATT";

CREATE TABLE "projects"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "githubLink" TEXT NOT NULL,
    "siteLink" TEXT DEFAULT '',
    "projectSize" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "cover" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "texts"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "title" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL  DEFAULT '',
    "position" INTEGER NOT NULL
);

CREATE TABLE "screenshots"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "adress" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL
);

CREATE TABLE "techs"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "fullname" TEXT NOT NULL DEFAULT '',
    "shortname" TEXT DEFAULT '',
    "logo" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE "packages"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE "components"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE "designPatterns"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE "PROJ_TECH"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "tech_id" INTEGER NOT NULL REFERENCES "techs"("id")
);

CREATE TABLE "PROJ_PACK"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "package_id" INTEGER NOT NULL REFERENCES "packages"("id")
);

CREATE TABLE "PROJ_COMP"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "component_id" INTEGER NOT NULL REFERENCES "components"("id")
);

CREATE TABLE "PROJ_DESPATT"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "desPatt_id" INTEGER NOT NULL REFERENCES "designPatterns"("id")
);

INSERT INTO "projects" ("title", "githubLink", "projectSize", "desc", "cover")
VALUES  ('Portfolio', 'https://github.com/KhadimRenahyMar/Portfolio', 'M', 'Site portfolio visant à présenter mes projets web.', 'portfolio'),
        ('Arch-IQ', 'https://github.com/KhadimRenahyMar/Arch-iQ', 'S', 'Site vitrine de l''entreprise fictive Arch-IQ.', 'archIQ'),
        ('oFood', 'https://github.com/KhadimRenahyMar/oFood', 'M', 'Application de rééquillibrage alimentaire déveloptttttpée en équipe.', 'ofood');

INSERT INTO "techs" ("fullname", "shortname", "logo")
VALUES  ('JavaScript', 'JS', 'javascript'),
        ('HyperText Markup Language', 'HTML', 'html'),
        ('Cascading Style Sheets', 'CSS', 'css'),
        ('SASS/SCSS', 'SASS/SCSS', 'sass'),
        ('NodeJS', 'NJS', 'nodejs'),
        ('SQL', 'SQL', 'sql'),
        ('ReactJS', 'React', 'react'),
        ('TypeScript', 'TS', 'typescript');

INSERT INTO "packages" ("name") 
VALUES  ('slideJS'),
        ('Express');

INSERT INTO "components" ("name")
VALUES  ('Navigation'),
        ('Chart'),
        ('Drag&Drop'),
        ('Parallax');

INSERT INTO "designPatterns" ("name")
VALUES  ('SSR'),
        ('CSR'),
        ('Factory'), 
        ('POO');

INSERT INTO "texts" ("project_id", "title", "text", "position")
VALUES  (1, 'Introduction', 'portfolio/texts/introduction', 1),
        (2, 'Introduction', 'archIQ/texts/introduction', 1),
        (3, 'Introduction', 'ofood/texts/introduction', 1);

INSERT INTO "screenshots" ("project_id", "adress", "position")
VALUES  (1 ,'portfolio/screenshots/1', 1),
        (2 ,'archIQ/screenshots/1', 1),
        (3 ,'ofood/screenshots/1', 1);

INSERT INTO "PROJ_TECH" ("project_id", "tech_id")
VALUES  (1, 1),
        (1, 2),
        (1, 3),
        (1, 4),
        (1, 5),
        (1, 6),
        (1, 7),
        (1, 8),
        (2, 1),
        (2, 2),
        (2, 3),
        (2, 4),
        (3, 1),
        (3, 2),
        (3, 3),
        (3, 4),
        (3, 5),
        (3, 6),
        (3, 7);

INSERT INTO "PROJ_PACK" ("project_id", "package_id")
VALUES  (1, 1),
        (1, 2),
        (2, 1),
        (3, 2);

INSERT INTO "PROJ_COMP" ("project_id", "component_id")
VALUES  (1, 1),
        (1, 2),
        (2, 1),
        (3, 1);

INSERT INTO "PROJ_DESPATT" ("project_id", "desPatt_id")
VALUES  (1, 2),
        (1, 4),
        (2, 2),
        (3, 2),
        (3, 4);

COMMIT;