import { Component, OnInit } from '@angular/core';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';


interface Fotos{
  valor: string;
  foto: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    
    constructor(private servicioAutenticacion:AutenticacionService,private servicioUsuario:UsuarioService, private router: Router) {
    }
    private infoUsuario:any;
    fotoSeleccionada: string = "imagenPredeterminada.png";
    

    fotosConstructor: Fotos[] = [
        {valor: 'fotoPredeterminada.png', foto: 'Por defecto'},
        {valor: 'fotoPerfil1.jpg', foto: 'Foto 1'},
        {valor: 'fotoPerfil2.jpg', foto: 'Foto 2'},
        {valor: 'fotoPerfil3.jpg', foto: 'Foto 3'},
        {valor: 'fotoPerfil4.jpg', foto: 'Foto 4'},
        {valor: 'fotoPerfil5.jpg', foto: 'Foto 5'},
        {valor: 'fotoPerfil6.jpg', foto: 'Foto 6'},
        {valor: 'fotoPerfil7.jpg', foto: 'Foto 7'},
        {valor: 'fotoPerfil8.jpg', foto: 'Foto 8'},
        {valor: 'fotoPerfil9.jpg', foto: 'Foto 9'},
        {valor: 'fotoPerfil10.jpg', foto: 'Foto 10'},
        {valor: 'fotoPerfil11.jpg', foto: 'Foto 11'},
        {valor: 'fotoPerfil12.jpg', foto: 'Foto 12'},
    ]

    usuarios = [
        {"nombre":"Francisco Leiva", "correo":"francisco.leiva@gmail.com", "rut":"20.542.805-5"},
        {"nombre":"Ignacio Morales", "correo":"ignacio.morales@gmail.com", "rut":"20.183.542-2"},
        {"nombre":"Erik Becerra", "correo":"erik.becerra@gmail.com", "rut":"20.483.945-K"},
        {"nombre":"Sebastian Valdebenito", "correo":"sebastian.valdebenito@gmail.com", "rut":"20.542.452-3"}
    ]

    ngOnInit(): void {
        this.cargarDatosUsuario();
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

            this.fotoSeleccionada = datos.imagen;
        });
    }
 
    //angel consejo: no usar observable, mejor traten de guardar los datos obtenidos con anterioridad dentro de session que el segundo parametro
    //sea un string de formato json con toda la informacion del usuario, asi es mas facil recuperar la informacion

}
