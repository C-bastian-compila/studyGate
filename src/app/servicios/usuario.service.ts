import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { JwtResponseInterfaz } from '../models/jwt-response';
import { UsuarioInterfaz } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private http:HttpClient) { }

    AUTH_SERVER:string = environment.AUTH_SERVER;

    obtenerUsuarioActual():Observable<any>{
        var email = this.emailUsuarioActual();
        const params = new HttpParams();
        params.set("email", email);
        return this.http.get(`${this.AUTH_SERVER}/api/usuario/obtener/${email}`);
    }

    eliminarUsuarioActual():Observable<any> {
        var email = this.emailUsuarioActual();
        const params = new HttpParams();
        params.set("email", email);
        return this.http.delete(`${this.AUTH_SERVER}/api/usuario/eliminar/${email}`);
    }


    public editarUsuarioActual(infoUsuario:string, imagenNueva:string): Observable<UsuarioInterfaz> {
        // De momento solo se editara la imagen

        var email = this.emailUsuarioActual();
        const params = new HttpParams();
        params.set("email", email);
        //IMAGEN NUEVA EN LA FUNCION NO HACE NADA PERO LO DEJO PORQUE FUNCIONA
        return this.http.put<UsuarioInterfaz>(`${this.AUTH_SERVER}/api/usuario/editarImagen/${email}`,infoUsuario).pipe(tap( 
            (res: any) => {
                this.actualizarSesion(imagenNueva);
            })
        );
    }

    private actualizarSesion(imagenNueva:string) {
        var aux:any = localStorage.getItem("sesion");
        var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
        sesion.infoUsuario.imagen = imagenNueva;
        localStorage.removeItem("sesion");
        localStorage.setItem('sesion', JSON.stringify(sesion));
    }

    private emailUsuarioActual(): string {
        // QUIZAS SEA NECESARIO VALIDAR SI HAY SESION, EN CASO DE VOLVER A USAR ESTE
        var aux:any = localStorage.getItem("sesion");
        var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
        return sesion.infoUsuario.email;
    }

    public nombreUsuarioActual() {
        var aux:any = localStorage.getItem("sesion");
        var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
        return sesion.infoUsuario.nombre;
    }

    public imagenUsuarioActual() {
        var aux:any = localStorage.getItem("sesion");
        var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
        return sesion.infoUsuario.imagen;
    }

    public tipoUsuarioActual() {
        var aux:any = localStorage.getItem("sesion");
        var sesion: JwtResponseInterfaz = <JwtResponseInterfaz> JSON.parse(aux);
        return sesion.infoUsuario.tipo;
    }

    public haySesion(): boolean {
        if(localStorage.getItem("sesion") != null) return true;
        else return false;
    }

}
