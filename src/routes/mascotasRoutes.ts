import { Router } from 'express';
import { mascotaController } from "../controllers/mascotasController";
import { checkJwt } from '../middlewares/jwt';

class MascotasRoutes {

    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', /*[checkJwt],*/ mascotaController.lista);
    }

}

const mascotaRoutes = new MascotasRoutes();
export default mascotaRoutes.router;