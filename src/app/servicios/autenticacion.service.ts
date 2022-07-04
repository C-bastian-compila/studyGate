/*
Este servicio se encarga de administrar la autenticacion de cuentas y sesiones de usuario.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { UsuarioInterfaz } from '../models/usuario';
import { JwtResponseInterfaz } from '../models/jwt-response';
import { ThisReceiver } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

    AUTH_SERVER: string =  environment.AUTH_SERVER;
    authSubject = new BehaviorSubject(false);
    
    constructor(private httpClient: HttpClient) { }
  
    public registrarse(usuario: UsuarioInterfaz): Observable<JwtResponseInterfaz> {
        return this.httpClient.post<JwtResponseInterfaz>(`${this.AUTH_SERVER}/api/register`,
        usuario).pipe(tap(
            (res: JwtResponseInterfaz) => {
                if (res) {
                    this.crearSesion(res);// guardar token
                }
            })
        );
    }
  
    public iniciarSesion(usuario: UsuarioInterfaz): Observable<JwtResponseInterfaz> {
      return this.httpClient.post<JwtResponseInterfaz>(`${this.AUTH_SERVER}/api/login`,
      usuario).pipe(tap(
          (res: JwtResponseInterfaz) => {
            if (res) {
              this.crearSesion(res); // guardar token
            }
          })
        );
    }

    private crearSesion(sesion:JwtResponseInterfaz) {
        localStorage.setItem('sesion', JSON.stringify(sesion));
    }

    public haySesion(): boolean {
        if(localStorage.getItem("sesion") != null) return true;
        else return false;
    }

    public cerrarSesion(): void {
        localStorage.removeItem("sesion");
    }
  
    // logout(): void {
    //   localStorage.removeItem("ACCESS_TOKEN");
    //   localStorage.removeItem("EXPIRES_IN");
    // }
  
    // private saveToken(token: string, expiresIn: string): void {
    //   localStorage.setItem("ACCESS_TOKEN", token);
    //   localStorage.setItem("EXPIRES_IN", expiresIn);
    //   this.token = token;
    // }



    // public nombreUsuario(): string {
    //     if(!this.haySesion()) return 'Estudiante';
    //     var aux:any = localStorage.getItem("sesion");
    //     var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
    //     return sesion.infoUsuario.nombre;
    // }

    // public nombreUsuario(): string {
    //     if(!this.haySesion()) return 'Estudiante';
    //     var aux:any = localStorage.getItem("sesion");
    //     var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
    //     return sesion.infoUsuario.nombre;
    // }

    // cerrarSesion(): void {
    //     this.token = '';
    //     localStorage.removeItem("sesion");
    // }
  
    // private obtenerToken(): string {
    //     if(localStorage.getItem("sesion")){
    //         var aux:any = localStorage.getItem("sesion");
    //         var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);

    //         return this.token;
    //     }


    //   if (!this.token) {
    //     this.token = localStorage.getItem("ACCESS_TOKEN");
    //   }
    //   return this.token;
    // }
  
}
