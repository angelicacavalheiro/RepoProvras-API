import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Periodo from '../entities/Periodo';

export async function findAllSemesters (req: Request, res: Response) {
    const result = await getRepository(Periodo).find();
    res.send(result);
}