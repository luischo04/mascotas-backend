"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascotasController_1 = require("../controllers/mascotasController");
const jwt_1 = require("../middlewares/jwt");
class MascotasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', [jwt_1.checkJwt], mascotasController_1.mascotaController.lista);
        this.router.put('/', /*[checkJwt],*/ mascotasController_1.mascotaController.insert);
    }
}
const mascotaRoutes = new MascotasRoutes();
exports.default = mascotaRoutes.router;
