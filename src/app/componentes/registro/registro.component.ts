import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'; // FormControl QUITADO
import { CustomValidators } from './validator';
// import { UsuarioInterfaz } from 'src/app/models/usuario';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

    // constructor() { }

    // usuarioRegistrado: Boolean = false;

    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private rutPattern: any = /^(\d{1,2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/; // Revisar si funciona esto

    formularioRegistro:FormGroup;
    constructor(private router: Router, private Form:FormBuilder, private servicio:AutenticacionService) {
        this.formularioRegistro = this.Form.group({
            nombre:['',[
                Validators.required,
                Validators.maxLength(40)
            ]],
            email:['',[
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]],
            rut:['',[
                Validators.required,
                 Validators.pattern(this.rutPattern)
                ]],
            clave:['',[
                Validators.required, Validators.minLength(4),
                Validators.maxLength(20)
            ]],
            claveRepetida:['',[
                Validators.required
            ]]
        // }, {
        //     validator: [<any>CustomValidators.MatchValidator('clave', 'claveRepetida')] 
        });
    }

    ngOnInit(): void {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
        // this.usuarioRegistrado = false;
    }

    onSubmit(): void {
        // if(this.formularioRegistro.invalid) {
        //     console.log("Formulario de registro invalido");
        //     return;
        // }
        var infoUsuario = {
            nombre: this.formularioRegistro.get("nombre")?.value,
            email: this.formularioRegistro.get("email")?.value,
            rut: this.formularioRegistro.get("rut")?.value,
            clave: this.formularioRegistro.get("clave")?.value,
            tags:"",
            imagen:"imagenPredeterminada.png",
            tipo: "normal"
        }

        this.servicio.registrarse(<any>infoUsuario).subscribe(res => {
            this.router.navigate(['/perfil']);
        });

        if(!this.servicio.haySesion()) { // Caso email repetido
            this.formularioRegistro.controls['email'].setValue("")
        }
        
        // this.openDialog();
    }

   //
        
        // // this.estado=true;
        // if()

        // let datos:UsuarioInterfaz;
        
        // datos.nombre = this.formularioRegistro.get("nombre")?.value;
      
        // console.log("Los datos que se reciben son "+datos[0].nombre);
    

        // let UsuarioInterfaz: any=[{
        //     "nombre": value.nombre,
        //     "asunto": value.,
        //     "comentarios": value.comentarios
        // }];
      
        // console.log("Los datos que se reciben son "+datos[0].nombre);
   // }

    // validacion2(){
    //     this.estado=true;
    //     let datos:any=[{
    //       "nombre": this.formulario.get("nombre")?.value,
    //       "asunto": this.formulario.get("asunto")?.value,
    //       "comentarios": this.formulario.get("comentarios")?.value,
    //     }];
      
    //     console.log("Los datos que se reciben son "+datos[0].nombre);
    
    
    
    //   }
}