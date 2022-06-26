import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

    //   constructor() { }

    ngOnInit(): void {
        window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
        })
    }

    formularioIniciarSesion:FormGroup;
    constructor(public Form:FormBuilder) {
        this.formularioIniciarSesion = this.Form.group({
            email:['',[
                Validators.required,
            ]],
            clave:['',[
                Validators.required,
            ]],
        });
    }

    onSubmit() {
        console.log("Iniciardo SESION CORRECTAMENTE.")
    } 
}
