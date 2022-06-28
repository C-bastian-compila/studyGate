import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
// import { UsuarioInterfaz } from 'src/app/models/usuario';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

    // constructor() { }

    usuarioRegistrado: Boolean = false;

    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private rutPattern: any = /^(\d{1,2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/; // Revisar si funciona esto

    formularioRegistro:FormGroup;
    constructor(private router: Router, private Form:FormBuilder, public dialog: MatDialog) {
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
            // ['', [Validators.required]],validators: this.password.bind(this)
        });
    }

    ngOnInit(): void {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
        this.usuarioRegistrado = false;
    }

    onSubmit() {
        // if(this.formularioRegistro.invalid) {
        //     console.log("Formulario de registro invalido");
        //     return;
        // }
        console.log("REGISTRADO CORRECTAMENTE.")
        this.retroceder();
        this.usuarioRegistrado = true;
        this.openDialog();
    }

    retroceder() {
        this.router.navigate(['/iniciar-sesion']);
        return; // ESTO NO SE SI ESTARA CORRECTO
    }

    openDialog() {
        this.dialog.open(dialogoUsuarioRegistrado);
    }
    
    validacion(){
        
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
    }

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


// El component y export de abajo para hacer el dialogo

@Component({
    selector: 'app-dialogoUsuarioRegistrado',
    templateUrl: 'dialogoUsuarioRegistrado.html',
})

export class dialogoUsuarioRegistrado {
    constructor(public dialog: MatDialog) {}
}
