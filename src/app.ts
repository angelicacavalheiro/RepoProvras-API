import express from "express";
import cors from "cors";
import statusRouter from './routers/statusRouter'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/status', statusRouter)

export default app;
