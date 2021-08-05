import { Router } from 'express';
import { mascotaController } from "../controllers/mascotasController";
import { checkJwt } from '../middlewares/jwt';

class MascotasRoutes {

    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', mascotaController.lista);
        this.router.get('/listaByUsuario/:username', mascotaController.listaByUsuario);
        this.router.put('/', mascotaController.insert);
        this.router.post('/', mascotaController.update);
        this.router.delete('/:cveMascota', mascotaController.delete)
        
    }

}

const mascotaRoutes = new MascotasRoutes();
export default mascotaRoutes.router;