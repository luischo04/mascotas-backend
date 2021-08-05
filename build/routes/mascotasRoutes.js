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
        this.router.get('/', mascotasController_1.mascotaController.lista);
        this.router.get('/listaByUsuario/:username', mascotasController_1.mascotaController.listaByUsuario);
        this.router.put('/', mascotasController_1.mascotaController.insert);
        this.router.post('/', mascotasController_1.mascotaController.update);
        this.router.delete('/:cveMascota', mascotasController_1.mascotaController.delete);
    }
}
const mascotaRoutes = new MascotasRoutes();
exports.default = mascotaRoutes.router;
