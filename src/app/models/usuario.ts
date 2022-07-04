
// ESTO NO SE USA Y SERA BORRADO


export interface UsuarioInterfaz {
    nombre:string;
    rut:string;
    email:string;
    clave:string;
    imagen:string;
    tags:string;
}

// para importar esta interaface un servicio.ts por ejemplo se usa import {usuarioInterfaz} from "../interfaces/usuarioInterfaz.ts"; CREO