import { Request, Response } from 'express';
import { dao } from '../dao/mascotasDao';

class MascotasController {
    public async lista(req: Request, res: Response) {
        try {
            const result = await dao.lista();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const mascotaController = new MascotasController();