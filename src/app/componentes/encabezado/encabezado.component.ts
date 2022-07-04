import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

    constructor(private servicioUsuario:UsuarioService) { }

    ngOnInit(): void {
        if(this.servicioUsuario.haySesion()) {
            var nombreAux = String(this.servicioUsuario.nombreUsuarioActual());
            var nombreCorto = nombreAux.split(" ");
            document.getElementById("nombreUsuario")!.textContent = nombreCorto[0];
        }
        else {
            document.getElementById("nombreUsuario")!.textContent = "Estudiante";
        }
    } 
}
