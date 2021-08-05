import { request, Request, Response } from 'express';
import { daoMascotas } from '../dao/mascotasDao';

class MascotasController {
    public async lista(req: Request, res: Response) {
        try {
            const result = await daoMascotas.lista();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    public async insert (req: Request, res: Response) {
        try {
            const {nombreMascota, fechaAdopcion, cvePropietario, raza} = req.body;

            if(nombreMascota == null || fechaAdopcion == null || cvePropietario == null || raza  == null){
                return res.status(400).json({ meesage : "Los datos son requeridos" });
            }

            const mascota = {
                nombreMascota,
                fechaAdopcion,
                cvePropietario,
                raza,

            }

            const result = await daoMascotas.insert(mascota);

            if(result.affectedRows > 0){
                return res.json({ meesage : "Registro exitoso" });
            } else  {
                return res.status(400).json({ meesage : result.message });
            }

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }
}



export const mascotaController = new MascotasController();