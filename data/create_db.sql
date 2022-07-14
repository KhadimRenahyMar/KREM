BEGIN;

DROP TABLE IF EXISTS "projects", "techs", "tags", "texts", "screenshots", "PROJ_TECH", "PROJ_TAGS", "TECH_TAGS";

CREATE TABLE IF NOT EXISTS "projects"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "repoURL" TEXT NOT NULL,
    "url" TEXT DEFAULT '',
    "projectSize" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "cover" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "texts"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "title" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL  DEFAULT '',
    "position" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "screenshots"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "url" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "techs"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "fullname" TEXT NOT NULL DEFAULT '',
    "shortname" TEXT DEFAULT '',
    "logoURL" TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS "tags"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL DEFAULT '',
    "category" TEXT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS "PROJ_TECH"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "tech_id" INTEGER NOT NULL REFERENCES "techs"("id")
);

CREATE TABLE IF NOT EXISTS "PROJ_TAGS"(
    "project_id" INTEGER NOT NULL REFERENCES "projects"("id"),
    "tag_id" INTEGER NOT NULL REFERENCES "tags"("id")
);

CREATE TABLE IF NOT EXISTS "TECH_TAGS"(
    "tech_id" INTEGER NOT NULL REFERENCES "techs"("id"),
    "tag_id" INTEGER NOT NULL REFERENCES "tags"("id")
);

INSERT INTO "projects" ("title", "repoURL", "projectSize", "desc", "cover")
VALUES  ('Portfolio', 'https://github.com/KhadimRenahyMar/Portfolio', 'M', 'Site portfolio visant à présenter mes projets web.', 'portfolio'),
        ('Arch-IQ', 'https://github.com/KhadimRenahyMar/Arch-iQ', 'S', 'Site vitrine de l''entreprise fictive Arch-IQ.', 'archIQ'),
        ('oFood', 'https://github.com/KhadimRenahyMar/oFood', 'M', 'Application de rééquillibrage alimentaire développée en équipe.', 'ofood');


INSERT INTO "texts" ("project_id", "title", "text", "position")
VALUES  (1, 'Introduction', 'portfolio/texts/introduction', 1),
        (2, 'Introduction', 'archIQ/texts/introduction', 1),
        (3, 'Introduction', 'ofood/texts/introduction', 1);

INSERT INTO "screenshots" ("project_id", "url", "position")
VALUES  (1 ,'portfolio/screenshots/1', 1),
        (2 ,'archIQ/screenshots/1', 1),
        (3 ,'ofood/screenshots/1', 1);

INSERT INTO "techs" ("fullname", "shortname", "logoURL")
VALUES  ('HyperText Markup Language', 'HTML', 'html'), --1
        ('Cascading Style Sheets', 'CSS', 'css'), --2
        ('JavaScript', 'JS', 'javascript'),--3
        ('SASS/SCSS', 'SASS/SCSS', 'sass'),--4
        ('NodeJS', 'NJS', 'nodejs'),--5
        ('SQL', 'SQL', 'sql'),--6
        ('PostgreSQL', 'PG', 'pgsql'),--7
        ('ReactJS', 'React', 'react'),--8
        ('TypeScript', 'TS', 'typescript');--9

INSERT INTO "tags" ("name", "type", "category") 
VALUES  ('slideJS', 'package', 'Frontend'),--1
        ('Express', 'package', 'Backend'),--2
        ('ESlint', 'package', 'Fullstack'),--3
        ('node-dev', 'package', 'Backend'),--4

        ('Navigation', 'component', 'UI'),--5
        ('Chart', 'component', 'UI'),--6
        ('Drag&Drop', 'component', 'UI'),--7
        ('Formulaires', 'component', 'UI'),--8
        ('github API', 'component', 'APIs'),--9

        ('SSR', 'design pattern', 'Rendu'),--10
        ('CSR', 'design pattern', 'Rendu'),--11
        ('MVC', 'design pattern', 'Architecture'), --12
        ('POO', 'design pattern', 'Code'),--13

        ('Insomnia', 'tool', 'Backend design'),--14
        ('AdobeXD', 'tool', 'Graphisme'),--15
        ('DrawIO', 'tool', 'Backend design'),--16
        ('Kanban', 'tool', 'Workflow'),--17
        ('Scrum', 'tool', 'Workflow');--18


INSERT INTO "PROJ_TECH" ("project_id", "tech_id")
VALUES  (1, 1),
        (1, 2),
        (1, 3),
        (1, 4),
        (1, 5),
        (1, 6),
        (1, 7),
        (1, 8),
        (1, 9),
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
        (3, 7),
        (3, 8);

INSERT INTO "PROJ_TAGS" ("project_id", "tag_id")
VALUES  (1, 1),
        (1, 2),
        (1, 4),
        (1, 5),
        (1, 6),
        (1, 8),
        (1, 9),
        (1, 11),
        (1, 13),
        (1, 15),
        (1, 16),
        (1, 17),
        (2, 1),
        (2, 5),
        (3, 2),
        (3, 3),
        (3, 5),
        (3, 8),
        (3, 11),
        (3, 12),
        (3, 13),
        (3, 14),
        (3, 15),
        (3, 17),
        (3, 18);
-- A COMPLETER SUR LA BDD HEROKU !
INSERT INTO "TECH_TAGS" ("tech_id", "tag_id")
VALUES  (1, 5),
        (1, 6),
        (1, 7),
        (1, 8),
        (,),
        (),


COMMIT;