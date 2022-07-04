import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  mensajeAdminFormulario:FormGroup;

  constructor(private servicioUsuario:UsuarioService, private Form:FormBuilder) {
    this.mensajeAdminFormulario = this.Form.group({
      mensajeAdmin5:['',]
    });

  }

  tipoUsuario : boolean = false;

  mensaje : string = "Esta pagina esta creada con mucho amor para todos ustedes y aun esta en progreso. Esperamos su comprension y paciencia."

  ngOnInit(): void {

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })

    if(this.servicioUsuario.tipoUsuarioActual() == "admin"){
      this.tipoUsuario = true;
      this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
    }
    else{
      this.tipoUsuario = false;
      this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
    }
  }

  // guardarMensaje(){
  //   this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
  // }
}
