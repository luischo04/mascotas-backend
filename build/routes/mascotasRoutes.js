"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascotasController_1 = require("../controllers/mascotasController");
class MascotasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', /*[checkJwt],*/ mascotasController_1.mascotaController.lista);
        this.router.put('/', /*[checkJwt],*/ mascotasController_1.mascotaController.insert);
        this.router.post('/', /*[checkJwt],*/ mascotasController_1.mascotaController.update);
    }
}
const mascotaRoutes = new MascotasRoutes();
exports.default = mascotaRoutes.router;
