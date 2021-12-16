import express from "express";
import cors from "cors";
import "reflect-metadata";
import statusRouter from './routers/statusRouter'
import "./setup";
import connectDatabase from "./database/database";

import * as controller from './controllers/professorController';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/status', statusRouter)
app.get('/professor/:id', controller.findOne)
app.get('/professor', controller.list)
app.post('/professor', controller.insert)

export async function init () {
  await connectDatabase();
}

export default app;
