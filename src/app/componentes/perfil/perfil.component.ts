import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
  }

}
