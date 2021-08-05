import pool from "../database/database";

class MascotaDao {
    public async listaByUsuario(username: string) {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, fechaAdopcion, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza WHERE usuario.username = ?", [username]);
        });

        return result;
    }

    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, idRaza, nomRaza, descripcion  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN razas ON mascota.raza = razas.idRaza");
        });

        return result;
    }

    public async insert(mascota: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO mascota SET ?", [mascota]);
        });
        return result;
        
    }

    public async update(mascota: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("UPDATE mascota SET ? WHERE cveMascota = ?", [mascota, mascota.cveMascota]);
        });
        return result;
        
    }

}

export const daoMascotas = new MascotaDao();