import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

    nombreEstudiante : string = "Estudiante";

    constructor(private servicioUsuario:UsuarioService) {}

    ngOnInit(): void {
        console.log("hola")
        document.getElementById("nombreUsuario")!.innerHTML = this.nombreEstudiante;
        if(this.servicioUsuario.haySesion()) this.cargarDatosUsuario();
        else document.getElementById("nombreUsuario")!.innerHTML = this.nombreEstudiante;
    }

    
    fotoSeleccionada : string = "imagenPredeterminada.png"
    cargarDatosUsuario() {
        this.servicioUsuario.obtenerUsuarioActual().subscribe(datos => {
            var nombreAux = String(datos.nombre);
            var nombreCorto = nombreAux.split(" ");
            document.getElementById("nombreUsuario")!.textContent = nombreCorto[0];
        });
    }
}
