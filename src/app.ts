import express from "express";
import cors from "cors";
import "reflect-metadata";
import statusRouter from './routers/statusRouter'
import "./setup";
import connectDatabase from "./database/database";

import * as professorController from './controllers/professorController';
import * as provasController from './controllers/provasController'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/status', statusRouter)
app.get('/professor/:id', professorController.findOne)
app.get('/professor', professorController.list)
app.post('/professor', professorController.insert)
app.get('/professorEDisciplinas', professorController.listProfessorEDisciplina)

app.get('/provas/:id', provasController.findOne)
app.get('/provas', provasController.list)

export async function init () {
  await connectDatabase();
}

export default app;
