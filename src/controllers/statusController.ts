import { Request, Response } from 'express';

export async function statusController(req: Request, res: Response) {

    res.send('server online')
}

export async function statusController1(req: Request, res: Response) {
    res.send('server online rota 1')
}
