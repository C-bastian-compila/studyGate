import { Injectable } from '@angular/core';

import {Sesion} from '../componentes/iniciar-sesion/Sesion';
// import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    private localStorageService;
    private currentSession:Sesion;

    constructor() { //private router:Router
        this.localStorageService = localStorage;
        this.currentSession = this.cargarDatos();
    }

    cargarDatos():Sesion {
        let datos = this.localStorageService.getItem("datos");
        return (datos) ? <Sesion> JSON.parse(datos):new Sesion("","");
    }

    obtenerUsuarioActual() {
        var sesion: Sesion = this.cargarDatos();
        return (sesion && sesion.token) ? sesion.token : null;
    };

    crearSesion(sesion:Sesion) {
        this.currentSession = sesion;
        this.localStorageService.setItem('datos', JSON.stringify(sesion));
        console.log("aqui va el crear sesion")
        console.log(this.currentSession)
    }

    // CerrarSession() {
    //     this.localStorageService.removeItem('datos');
    //     this.currentSession = new Sesion("","");
    //     this.router.navigate(['/home']);
    // }

    // Autenticado(): boolean {
    //  return (this.getCurrentUser() != null) ? true : false;
    // };
}
