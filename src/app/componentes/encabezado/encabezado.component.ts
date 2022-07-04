import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

    constructor(private servicioUsuario:UsuarioService) {}

    ngOnInit(): void {
        if(!this.servicioUsuario.haySesion()) {
            document.getElementById("nombreUsuario")!.textContent = "Estudiante";
        }
        else {
            this.cargarDatosUsuario();
        }
    } 

    cargarDatosUsuario() {
        this.servicioUsuario.obtenerUsuarioActual().subscribe(datos => {
            var nombreAux = String(datos.nombre);
            var nombreCorto = nombreAux.split(" ");
            document.getElementById("nombreUsuario")!.textContent = nombreCorto[0];
            document.getElementById("imagenUsuario")!.textContent = nombreCorto[0];
        });
    }
}
