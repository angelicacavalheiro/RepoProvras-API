import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Professor from '../entities/Professor';
import ProfessorDisciplina from '../entities/ProfessorDisciplina';

export async function findOne (req: Request, res: Response) {
    const id = Number(req.params.id)
    console.log(id)
    const result = await getRepository(Professor).find({ id: id }) //primeiro id é a propriedade, segundo e a constante
    console.log(result)
    res.send(result);
}

export async function list (req: Request, res: Response) {
    const result = await getRepository(Professor).find();
    res.send({
        ...result,
    })
}

export async function insert (req: Request, res: Response) {
    const nome: string = req.body.nome
    const result = await getRepository(Professor).insert({
        nome,
    });
    res.sendStatus(200)
}

export async function listProfessorEDisciplina (req: Request, res: Response) {
    const result = await getRepository(ProfessorDisciplina).find();
    res.send({
        ...result,
    })
}