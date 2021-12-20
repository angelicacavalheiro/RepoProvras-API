import { Request, Response } from 'express';
import { getRepository, getManager } from 'typeorm';
import Prova from '../entities/Prova';
import Tipo from '../entities/Tipo';

export async function findOne (req: Request, res: Response) {
    const id = Number(req.params.id)
    console.log(id)
    const result = await getRepository(Prova).find({ id: id })
    console.log(result)
    res.send(result);
}

export async function insert (req: Request, res: Response) {
    const {
        url,
        tipo_id,
        professores_id,
        nome,
        disciplina_id
    } = req.body
		if(!url || !tipo_id || !professores_id || !nome || !disciplina_id){
			return res.sendStatus(400)
		}
		let nomeId

		const resultNomeId = await getManager().query(
			`SELECT id FROM nomes WHERE nome = $1`,
			[nome]);
		if(resultNomeId.length === 0){
			const result = await getManager().query(
				`INSERT INTO nomes (nome) VALUES ($1) RETURNING id`, [nome]);
					nomeId = result[0].id
		} else {
			nomeId = resultNomeId[0].id
		}

    try{
			await getManager().query(
				`INSERT
					INTO provas
						(url, professores_id, nome_id, disciplina_id, tipo_id)
					VALUES
						($1, $2, $3, $4, $5);`,
					[url, professores_id, nomeId, disciplina_id, tipo_id]);
			res.sendStatus(200)
		} catch (err){
			return res.status(500).send(err)
		}
}

export async function list (req: Request, res: Response) {
    const result = await getRepository(Prova).find()
    res.send({
        ...result,
    })
}

export async function listarPorTipo (req: Request, res: Response) {
    const result = await getRepository(Tipo).find()
    res.send(result)
}

export async function listarPorTipoProfessorId (req: Request, res: Response) {
    const id = Number(req.params.professorId)
    const result = await getRepository(Tipo).find({
        where: {
            prova: { professorId: id },
            },
        relations: ["prova"],
     })
    res.send({
        ...result,
    })
}

export async function listarPorTipoDisciplinaId (req: Request, res: Response) {
    const id = Number(req.params.disciplinaId)
    const result = await getRepository(Tipo).find({
        where: {
            NomeId:  { id: id },
            },
        relations: ["NomeId"],
     })
    res.send({
        ...result,
    })
}
