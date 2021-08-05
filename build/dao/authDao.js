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
exports.dao = void 0;
const database_1 = __importDefault(require("../database/database"));
class AuthDAO {
    getUser(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT cveUsuario, nombre, apellidos, username, password, cveMascota, nombreMascota, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza WHERE usuario.username = ?", [usuario]);
            }));
            return result;
        });
    }
    getUserById(cveUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
            }));
            return result;
        });
    }
}
exports.dao = new AuthDAO();
