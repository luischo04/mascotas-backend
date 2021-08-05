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
        this.router.put('/', /*[checkJwt],*/ mascotaController.insert);
        this.router.post('/', /*[checkJwt],*/ mascotaController.update);
        
    }

}

const mascotaRoutes = new MascotasRoutes();
export default mascotaRoutes.router;