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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daoMascotas = void 0;
const database_1 = __importDefault(require("../database/database"));
class MascotaDao {
    listaByUsuario(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, fechaAdopcion, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza WHERE usuario.username = ?", [username]);
            }));
            return result;
        });
    }
    lista() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza");
            }));
            return result;
        });
    }
    insert(mascota) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("INSERT INTO mascota SET ?", [mascota]);
            }));
            return result;
        });
    }
    update(mascota) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("UPDATE mascota SET ? WHERE cveMascota = ?", [mascota, mascota.cveMascota]);
            }));
            return result;
        });
    }
    delete(cveMascota) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("DELETE FROM mascota WHERE cveMascota = ?", [cveMascota]);
            }));
            return result;
        });
    }
}
exports.daoMascotas = new MascotaDao();
