import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Prova from '../entities/Prova';

export async function findOne (req: Request, res: Response) {
    const id = Number(req.params.id)
    console.log(id)
    const result = await getRepository(Prova).find({ id: id }) //primeiro id é a propriedade, segundo e a constante
    console.log(result)
    res.send(result);
}

export async function list (req: Request, res: Response) {
    const result = await getRepository(Prova).find();
    res.send({
        ...result,
    })
}

// export async function insert (req: Request, res: Response) {
//     const nome: string = req.body.nome
//     const result = await getRepository(Prova).insert({
//         nome,
//     });
//     res.sendStatus(200)
// }
