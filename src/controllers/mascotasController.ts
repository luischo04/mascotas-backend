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

    public async listaByUsuario(req: Request, res: Response) {
        try {
            const { username } = req.params;

            if(username == null){
                return res.status(400).json({ message : "No se puede eliminar" });
            }

            const result = await daoMascotas.listaByUsuario(username);
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

    public async update (req:  Request, res: Response){
        try {
            const mascota = req.body;

            if(mascota.cveMascota == null){
                return res.status(400).json({ meesage : "No se puede actualizar" });
            }

            const result = await daoMascotas.update(mascota);

            if(result.affectedRows > 0){
                return res.json({ meesage : "Actualizado correctamente" });
            } else  {
                return res.status(400).json({ meesage : result.message });
            }

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

    public async delete(req: Request, res: Response){
        try {
            const { cveMascota } = req.params;

            if(cveMascota == null){
                return res.status(400).json({ message : "No se puede eliminar" });
            }

            const result = await daoMascotas.delete(parseInt(cveMascota));

            if(result.affectedRows > 0){
                res.json({ message : "Borrado exitosamente" })
            } else  {
                res.status(400).json({ message : result.message });
            }
        } catch (error) {
            res.status(400).json({ message : error.message });
        }
    }

}



export const mascotaController = new MascotasController();