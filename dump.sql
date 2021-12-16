CREATE TABLE "provas" (
	"id" serial NOT NULL,
	"link" TEXT NOT NULL,
	"nome_id" integer NOT NULL,
	"tipo_id" integer NOT NULL,
	"professor_disciplina_id" integer NOT NULL,
	CONSTRAINT "provas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "disciplinas" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	CONSTRAINT "disciplinas_pk" PRIMARY KEY ("id")
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



CREATE TABLE "semestres" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	CONSTRAINT "semestres_pk" PRIMARY KEY ("nome")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professor_disciplina" (
	"id" serial NOT NULL,
	"professor_id" integer NOT NULL,
	"disciplina_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



ALTER TABLE "provas" ADD CONSTRAINT "provas_fk0" FOREIGN KEY ("nome_id") REFERENCES "semestres"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk1" FOREIGN KEY ("tipo_id") REFERENCES "tipos"("id");
ALTER TABLE "provas" ADD CONSTRAINT "provas_fk2" FOREIGN KEY ("professor_disciplina_id") REFERENCES "professor_disciplina"("id");





ALTER TABLE "professor_disciplina" ADD CONSTRAINT "professor_disciplina_fk0" FOREIGN KEY ("professor_id") REFERENCES "professores"("id");
ALTER TABLE "professor_disciplina" ADD CONSTRAINT "professor_disciplina_fk1" FOREIGN KEY ("disciplina_id") REFERENCES "disciplinas"("id");






