import { Component, OnInit } from '@angular/core';

import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ReCaptchaV3Service } from 'ng-recaptcha';

import { UsuarioInterfaz } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})

export class IniciarSesionComponent implements OnInit {

    formularioIniciarSesion:FormGroup;

    token: string|undefined;

    public robot: boolean | undefined;

    constructor(private Form:FormBuilder, private servicio:AutenticacionService, private router: Router) {
        this.formularioIniciarSesion = this.Form.group({
            email:['',[
                Validators.required
            ]],
            clave:['',[
                Validators.required
            ]],
            recaptcha:['',[
                Validators.required
            ]]
        });
        // this.datos = new Sesion("","")
        this.token = undefined;
    }

    public send(form: NgForm): void {
        if (form.invalid) {
          for (const control of Object.keys(form.controls)) {
            form.controls[control].markAsTouched();
          }
          return;
        }
    
        console.debug(`Token [${this.token}] generated`);
    }

    ngOnInit(): void {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        //Valida que el usuario se encuentra logueado para no mostrar el formulario de nuevo
        if(this.servicio.haySesion()) {
            this.router.navigate(['/perfil']);
        }
    }

    // onSubmit() {
    //     this.servicio.validarLogin(this.formularioIniciarSesion.get("email")?.value, this.formularioIniciarSesion.get("clave")?.value).subscribe(datos => {
    //         if(datos.length == 0) { // Caso get no devuelve un usuario de la bd
    //             this.formularioIniciarSesion.controls['email'].setValue("")
    //             this.formularioIniciarSesion.controls['clave'].setValue("")
    //         }else {
    //             datos = {token:datos[0]._id, usuario:datos[0].correo};
    //             if(this.formularioIniciarSesion.get("recuerdame")?.value) {
    //                 this.storage.crearSesion(datos);
    //             }
    //             this.router.navigate(['/perfil']);
    //         }
    //     });
    // } 
    onSubmit() {
        var infoUsuario = {
            email: this.formularioIniciarSesion.get("email")?.value,
            clave: this.formularioIniciarSesion.get("clave")?.value
        }

        this.servicio.iniciarSesion(<any>infoUsuario).subscribe(res => {
            this.router.navigate(['/perfil']);
        });

        if(!this.servicio.haySesion()) { // Caso get no devuelve un usuario de la bd
            this.formularioIniciarSesion.controls['email'].setValue("")
            this.formularioIniciarSesion.controls['clave'].setValue("")
        }
    } 
}
