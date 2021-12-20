import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Disciplina from '../entities/Disciplina';
import Professor from '../entities/Professor';
import ProfessorDisciplina from '../entities/ProfessorDisciplina';
import Prova from '../entities/Prova'

export async function findOne (req: Request, res: Response) {
    const id = Number(req.params.id)
    const result = await getRepository(Prova).find({
        where: {
            professorDiciplinaId:  { professorId: id },
            },
        relations: ["professorDiciplinaId"],
     })
    res.send(result);
}

export async function findOneSemester(req: Request, res: Response) {
    const id = Number(req.params.id)
    const result = await getRepository(Prova).find({
        where: {
            NomeId:  { id: id },
            },
        relations: ["NomeId"],
     })
    res.send(result);
}

export async function listProfessorEDisciplina (req: Request, res: Response) {
    const id = Number(req.params.id)
    const result = await getRepository(ProfessorDisciplina).find({
			where: {
				professorId:  { id: id },
					},
			relations: ["professorId"],
     });
    res.send(result)
}

export async function findSemester(req: Request, res: Response) {
    const result = await getRepository(Disciplina).find()
    res.send(result);
}

export async function list (req: Request, res: Response) {
    const result = await getRepository(Professor).find();
    res.send(result)
}

