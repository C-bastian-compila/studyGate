import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { IniciarSesionService } from 'src/app/servicios/iniciar-sesion.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { Router } from '@angular/router';
import {Sesion} from './Sesion';

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

    formularioIniciarSesion:FormGroup;
    // mensaje:string = ""
    datos:Sesion
    // token:string = ""
    // logueado:Boolean = false

    constructor(private Form:FormBuilder, private servicio:IniciarSesionService, private storage:StorageService, private router: Router) {
        this.formularioIniciarSesion = this.Form.group({
            email:['',[
                Validators.required
            ]],
            clave:['',[
                Validators.required
            ]],
            recuerdame:['',]
        });
        this.datos = new Sesion("","")
    }

    ngOnInit(): void {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        // Valida que el usuario se encuentra logueado para no mostrar el formulario de nuevo
        if(this.storage.obtenerUsuarioActual()) {
            console.log("YA SE ENCUENTRA LOGEADO")
            // this.logueado = true;
            // this.mensaje = "Usted ya ha iniciado sesion";
            this.router.navigate(['/perfil']);
            return;
        }
        this.formularioIniciarSesion.controls['recuerdame'].setValue("magia") //casilla mantener sesion iniciada por defecto. Esto creo que funciona pero debe estar terrible malo
    }

    onSubmit() {
        // console.log(this.formularioIniciarSesion.get("mantener")?.value);
        this.servicio.validarLogin(this.formularioIniciarSesion.get("email")?.value, this.formularioIniciarSesion.get("clave")?.value).subscribe(datos => {
            if(datos.length == 0) { // Caso get no devuelve un usuario de la bd
                this.formularioIniciarSesion.controls['email'].setValue("")
                this.formularioIniciarSesion.controls['clave'].setValue("")
            }else {
                datos = {token:datos[0]._id, usuario:datos[0].correo};
                if(this.formularioIniciarSesion.get("recuerdame")?.value) {
                    console.log(this.formularioIniciarSesion.get("recuerdame")?.value)
                    this.storage.crearSesion(datos);
                }
                this.router.navigate(['/perfil']);
                return;
            }
        });
    } 
}
