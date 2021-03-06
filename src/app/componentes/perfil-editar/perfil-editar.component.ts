import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

interface Fotos{
  valor: string;
  foto: string;
}

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.scss']
})

export class PerfilEditarComponent implements OnInit {

  fotoSeleccionada : string = "imagenPredeterminada.png";

    fotosConstructor: Fotos[] = [
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
        {valor: 'fotoPerfil12.jpg', foto: 'Foto 12'}
    ]

    constructor(private servicioAutenticacion:AutenticacionService,private servicioUsuario:UsuarioService, private router: Router) { }

    ngOnInit(): void {
        this.cargarDatosUsuario();
        this.fotoSeleccionada = this.servicioUsuario.imagenUsuarioActual();
    }

  public botonEliminarCuenta() {

    this.servicioUsuario.eliminarUsuarioActual().subscribe(res => {
        this.servicioAutenticacion.cerrarSesion();
        this.router.navigate(['/iniciar-sesion']);
    });
  }

  public botonGuardarCambios() {

    var infoUsuario = {
        imagen: this.fotoSeleccionada
    }
    
    this.servicioUsuario.editarUsuarioActual(<any>infoUsuario,<any>this.fotoSeleccionada).subscribe(res => {
        this.router.navigate(['/perfil']);
    });
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
    });
  }
}
