import express from "express";
import cors from "cors";
import "reflect-metadata";
import statusRouter from './routers/statusRouter'
import "./setup";
import connectDatabase from "./database/database";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/status', statusRouter)

export async function init () {
  await connectDatabase();
}

export default app;
