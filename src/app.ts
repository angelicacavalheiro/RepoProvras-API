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

app.get('/semesters', periodosController.findAllSemesters)
app.get('/professor', professorController.list)
app.get('/tipo', provasController.listarPorTipo)
app.get('/professor-disciplina/:id', professorController.listProfessorEDisciplina)
app.post('/insertTest', provasController.insert)

export async function init () {
  await connectDatabase();
}

export default app;
