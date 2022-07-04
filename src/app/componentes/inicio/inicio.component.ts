import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })

  }

  // guardarMensaje(){
  //   this.mensajeAdminFormulario.setValue({mensajeAdmin5:this.mensaje});
  // }
}
