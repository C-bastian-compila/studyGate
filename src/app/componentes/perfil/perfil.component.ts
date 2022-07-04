import { Component, OnInit } from '@angular/core';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    
    constructor(private servicioAutenticacion:AutenticacionService,private servicioUsuario:UsuarioService, private router: Router) {
    }

    fotoSeleccionada: string = "imagenPredeterminada.png";

    ngOnInit(): void {
        this.cargarDatosUsuario();
        this.fotoSeleccionada = this.servicioUsuario.imagenUsuarioActual();
    }

    public botonCerrarSesion(): void {
        this.servicioAutenticacion.cerrarSesion();
        this.router.navigate(['/iniciar-sesion']);
    }

    cargarDatosUsuario() {
        this.servicioUsuario.obtenerUsuarioActual().subscribe(datos => {
            var aux = String(datos.nombre);
            var aux2 = aux.split(" ");
            document.getElementById("correoFotoEditado")!.textContent = datos.email;
            document.getElementById("nombreSimple")!.textContent = aux2[0];
            document.getElementById("nombreUsuario2")!.setAttribute("value",datos.nombre);
            document.getElementById("correoUsuario2")!.setAttribute("value",datos.email);
            document.getElementById("rutUsuario2")!.setAttribute("value",datos.rut);
            document.getElementById("floatingTextarea2")!.textContent = datos.tags;

            document.getElementById("nombreSimple")!.textContent = aux2[0];
        });
    }
 
    //angel consejo: no usar observable, mejor traten de guardar los datos obtenidos con anterioridad dentro de session que el segundo parametro
    //sea un string de formato json con toda la informacion del usuario, asi es mas facil recuperar la informacion

}
