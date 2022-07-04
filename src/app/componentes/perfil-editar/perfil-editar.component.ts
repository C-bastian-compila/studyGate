import { Component, OnInit } from '@angular/core';

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

  fotoSeleccionada: string = "fotoPerfil1";

  fotosConstructor: Fotos[] = [
    {valor: 'fotoPerfil1', foto: 'Foto 1'},
    {valor: 'fotoPerfil2', foto: 'Foto 2'},
    {valor: 'fotoPerfil3', foto: 'Foto 3'},
    {valor: 'fotoPerfil4', foto: 'Foto 4'},
    {valor: 'fotoPerfil5', foto: 'Foto 5'},
    {valor: 'fotoPerfil6', foto: 'Foto 6'},
    {valor: 'fotoPerfil7', foto: 'Foto 7'},
    {valor: 'fotoPerfil8', foto: 'Foto 8'},
    {valor: 'fotoPerfil9', foto: 'Foto 9'},
    {valor: 'fotoPerfil10', foto: 'Foto 10'},
    {valor: 'fotoPerfil11', foto: 'Foto 11'},
    {valor: 'fotoPerfil12', foto: 'Foto 12'}
  ]

  usuarios=[
    {"nombre":"Francisco Leiva", "correo":"francisco.leiva@gmail.com", "rut":"20.542.805-5"},
    {"nombre":"Ignacio Morales", "correo":"ignacio.morales@gmail.com", "rut":"20.183.542-2"},
    {"nombre":"Erik Becerra", "correo":"erik.becerra@gmail.com", "rut":"20.483.945-K"},
    {"nombre":"Sebastian Valdebenito", "correo":"sebastian.valdebenito@gmail.com", "rut":"20.542.452-3"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  funcionGuardar(){
    console.log("guardar");
  }
}
