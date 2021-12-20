import express from "express";
import cors from "cors";
import "reflect-metadata";
import statusRouter from './routers/statusRouter'
import "./setup";
import connectDatabase from "./database/database";

import * as professorController from './controllers/professorController';
import * as provasController from './controllers/provasController';
import * as periodosController from './controllers/periodosController';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/status', statusRouter)

app.get('/professor/:id', professorController.findOne)
app.post('/professor', professorController.insert)
app.get('/professorEDisciplinas', professorController.listProfessorEDisciplina)

app.get('/semester/:id', professorController.findOneSemester)
//app.get('/semester', professorController.findSemester)

app.get('/provas/:id', provasController.findOne)
app.get('/provas', provasController.list)

app.get('/tipo/:professorId', provasController.listarPorTipoProfessorId)
app.get('/tipo/:disciplinaId', provasController.listarPorTipoDisciplinaId)

app.get('/semesters', periodosController.findAllSemesters)
app.get('/professor', professorController.list)
app.get('/tipo', provasController.listarPorTipo)


export async function init () {
  await connectDatabase();
}

export default app;
