import { Router } from 'express';
import { mascotaController } from "../controllers/mascotasController";
import { checkJwt } from '../middlewares/jwt';

class MascotasRoutes {

    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', [checkJwt], mascotaController.lista);
        this.router.put('/', /*[checkJwt],*/ mascotaController.insert);
        
    }

}

const mascotaRoutes = new MascotasRoutes();
export default mascotaRoutes.router;