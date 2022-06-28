export interface usuarioInterfaz {
    nombre:string;
    rut:string;
    correo:string;
    clave:string;
    imagenUrl:string;
    tags:string;
}

// para importar esta interaface un servicio.ts por ejemplo se usa import {usuarioInterfaz} from "../interfaces/usuarioInterfaz.ts"; CREO