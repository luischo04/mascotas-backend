"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mascotaController = void 0;
const mascotasDao_1 = require("../dao/mascotasDao");
class MascotasController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield mascotasDao_1.daoMascotas.lista();
                res.json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    listaByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = req.params;
                if (username == null) {
                    return res.status(400).json({ message: "No se puede eliminar" });
                }
                const result = yield mascotasDao_1.daoMascotas.listaByUsuario(username);
                res.json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombreMascota, fechaAdopcion, cvePropietario, raza } = req.body;
                if (nombreMascota == null || fechaAdopcion == null || cvePropietario == null || raza == null) {
                    return res.status(400).json({ meesage: "Los datos son requeridos" });
                }
                const mascota = {
                    nombreMascota,
                    fechaAdopcion,
                    cvePropietario,
                    raza,
                };
                const result = yield mascotasDao_1.daoMascotas.insert(mascota);
                if (result.affectedRows > 0) {
                    return res.json({ message: "Registro exitoso" });
                }
                else {
                    return res.status(400).json({ message: result.message });
                }
            }
            catch (ex) {
                res.status(500).json({ message: ex.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mascota = req.body;
                if (mascota.cveMascota == null) {
                    return res.status(400).json({ message: "No se puede actualizar" });
                }
                const result = yield mascotasDao_1.daoMascotas.update(mascota);
                if (result.affectedRows > 0) {
                    return res.json({ message: "Actualizado correctamente" });
                }
                else {
                    return res.status(400).json({ message: result.message });
                }
            }
            catch (ex) {
                res.status(500).json({ message: ex.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cveMascota } = req.params;
                if (cveMascota == null) {
                    return res.status(400).json({ message: "No se puede eliminar" });
                }
                const result = yield mascotasDao_1.daoMascotas.delete(parseInt(cveMascota));
                if (result.affectedRows > 0) {
                    res.json({ message: "Borrado exitosamente" });
                }
                else {
                    res.status(400).json({ message: result.message });
                }
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.mascotaController = new MascotasController();
