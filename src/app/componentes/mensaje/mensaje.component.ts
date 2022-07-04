import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {

  mensajeAdminFormulario:FormGroup;

  tipoUsuario : boolean = false;

  mensaje : string = "Esta pagina esta creada con mucho amor para todos ustedes y aun esta en progreso. Esperamos su comprension y paciencia."


  constructor(private servicioUsuario:UsuarioService, private Form:FormBuilder) { 
    this.mensajeAdminFormulario = this.Form.group({
      mensajeAdmin5:['',]
    });
  }

  ngOnInit(): void {
    this.reconocerUsuario();
  }

  reconocerUsuario(){
    if (localStorage.getItem("sesion") != null){
      if(this.servicioUsuario.tipoUsuarioActual() == "admin"){
        this.tipoUsuario = true;
        this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
      }
      else if (this.servicioUsuario.tipoUsuarioActual() == "usuario" || localStorage.getItem("sesion") == null){
        this.tipoUsuario = false;
        this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
      }
    } else {
      this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
    }
  }

}
