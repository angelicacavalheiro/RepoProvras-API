CREATE TABLE "disciplinas" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	"periodo_id" integer NOT NULL,
	CONSTRAINT "disciplinas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "periodo" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "periodo_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "professores" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	CONSTRAINT "professores_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tipos" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	CONSTRAINT "tipos_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "nomes" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	CONSTRAINT "nomes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "professor_disciplina" (
	"id" serial NOT NULL,
	"professor_id" integer NOT NULL,
	"disciplina_id" integer NOT NULL,
	CONSTRAINT "professor_disciplina_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "provas" (
	"id" serial NOT NULL,
	"url" TEXT NOT NULL,
	"tipo_id" integer NOT NULL,
	"professores_id" integer NOT NULL,
	"nome_id" integer NOT NULL,
	"disciplina_id" integer NOT NULL,
	CONSTRAINT "provas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "disciplinas" ADD CONSTRAINT "disciplinas_fk0" FOREIGN KEY ("periodo_id") REFERENCES "periodo"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk0" FOREIGN KEY ("tipo_id") REFERENCES "tipos"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk1" FOREIGN KEY ("professores_id") REFERENCES "professores"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk2" FOREIGN KEY ("nome_id") REFERENCES "nomes"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk3" FOREIGN KEY ("disciplina_id") REFERENCES "disciplinas"("id");
ALTER TABLE "professor_disciplina" ADD CONSTRAINT "professor_disciplina_fk0" FOREIGN KEY ("professor_id") REFERENCES "professores"("id");
ALTER TABLE "professor_disciplina" ADD CONSTRAINT "professor_disciplina_fk1" FOREIGN KEY ("disciplina_id") REFERENCES "disciplinas"("id");




INSERT INTO periodo (name) VALUES ('1º período');
INSERT INTO periodo (name) VALUES ('2º período');
INSERT INTO periodo (name) VALUES ('3º período');
INSERT INTO periodo (name) VALUES ('4º período');

INSERT INTO disciplinas (nome, periodo_id) VALUES ('bases matemáticas', 1);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('geometria analítica', 1);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('funções de uma variável', 2);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('fenômenos mecânicos', 2);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('funções de várias variáveis', 3);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('fenômenos térmicos', 3);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('funções de várias variáveis', 4);
INSERT INTO disciplinas (nome, periodo_id) VALUES ('fenômenos eletromagnéticos', 4);

INSERT INTO professores (nome) VALUES ('Pedro Pereira');
INSERT INTO professores (nome) VALUES ('Joana Maria');
INSERT INTO professores (nome) VALUES ('Jacira Almeida');
INSERT INTO professores (nome) VALUES ('Daniel Rodrigues');
INSERT INTO professores (nome) VALUES ('Mariele da Silva');
INSERT INTO professores (nome) VALUES ('Rodrigo Pavani');
INSERT INTO professores (nome) VALUES ('Pedro da Silva');
INSERT INTO professores (nome) VALUES ('Maria Pereira');

INSERT INTO tipos (nome) VALUES ('Prova 1');
INSERT INTO tipos (nome) VALUES ('Prova 2');
INSERT INTO tipos (nome) VALUES ('Prova 3');
INSERT INTO tipos (nome) VALUES ('Prova Final');
INSERT INTO tipos (nome) VALUES ('2ª Chamada');

INSERT INTO nomes (nome) VALUES ('2020.1');
INSERT INTO nomes (nome) VALUES ('2020.2');
INSERT INTO nomes (nome) VALUES ('2020.3');
INSERT INTO nomes (nome) VALUES ('2021.1');
INSERT INTO nomes (nome) VALUES ('2021.2');
INSERT INTO nomes (nome) VALUES ('2021.3');

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (1, 1);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (2, 1);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (3, 1);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (4, 1);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (5, 1);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (1, 2);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (2, 2);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (3, 2);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (4, 2);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (5, 2);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (1, 4);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (2, 4);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (3, 4);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (4, 4);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (5, 4);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (1, 6);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (2, 6);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (3, 6);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (4, 6);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (5, 6);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (1, 8);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (2, 8);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (3, 8);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (4, 8);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (5, 8);


INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (6, 3);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (7, 3);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (8, 3);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (6, 5);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (7, 5);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (8, 5);

INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (6, 7);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (7, 7);
INSERT INTO professor_disciplina (professor_id, disciplina_id) VALUES (8, 7);


INSERT INTO provas (url, professores_id, nome_id, disciplina_id, tipo_id) VALUES ('teste.pdf', 1, 1, 1, 1);
