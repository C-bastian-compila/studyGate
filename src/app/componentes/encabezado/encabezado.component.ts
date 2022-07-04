import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

    imagenSeleccionada : string = "imagenPredeterminada.png";
    textoH4 : string = "Estudiante"

    constructor(private servicioUsuario:UsuarioService) { }

    ngOnInit(): void {
        if(this.servicioUsuario.haySesion()) {
            var nombreAux = String(this.servicioUsuario.nombreUsuarioActual());
            var nombreCorto = nombreAux.split(" ");
            this.textoH4 = String(nombreCorto[0]);
            this.imagenSeleccionada = this.servicioUsuario.imagenUsuarioActual();
        }
    } 
}
