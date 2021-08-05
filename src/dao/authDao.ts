import pool from '../database/database'

class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, password, cveMascota, nombreMascota, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza WHERE usuario.username = ?", [usuario]);
        });

        return result;
    }

    public async getUserById(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
        });

        return result;
    }

}

export const dao = new AuthDAO();