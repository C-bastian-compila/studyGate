import { Component, OnInit } from '@angular/core';

interface Asignaturas{
  valor: string;
  asignatura: string;
}

@Component({
  selector: 'app-crear-foro',
  templateUrl: './crear-foro.component.html',
  styleUrls: ['./crear-foro.component.scss']
})
export class CrearForoComponent implements OnInit {

  activeId=1;

  matematica=[
    {"pregunta":"Pregunta matematica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta matematica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta matematica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta matematica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta matematica","descripcion":"Descripcion de la pregunta"}
  ]

  literatura=[
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta literatura","descripcion":"Descripcion de la pregunta"}
  ]

  quimica=[
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta quimica","descripcion":"Descripcion de la pregunta"}
  ]
  
  historia=[
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta historia","descripcion":"Descripcion de la pregunta"}
  ]

  biologia=[
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta biologia","descripcion":"Descripcion de la pregunta"}
  ]
  ingles=[
    {"pregunta":"Pregunta ingles","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta ingles","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta ingles","descripcion":"Descripcion de la pregunta"}
  ]

  algebra=[
    {"pregunta":"Pregunta algebra","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta algebra","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta algebra","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta algebra","descripcion":"Descripcion de la pregunta"}
  ]

  otros=[
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"},
    {"pregunta":"Pregunta otros","descripcion":"Descripcion de la pregunta"}
  ]

  asignaturasCrearForo: Asignaturas[] = [
    {valor: 'mat', asignatura: 'Matematica'},
    {valor: 'lit', asignatura: 'Literatura'},
    {valor: 'quim', asignatura: 'Quimica'},
    {valor: 'hist', asignatura: 'Historia'},
    {valor: 'bio', asignatura: 'Biologia'},
    {valor: 'ing', asignatura: 'Ingles'},
    {valor: 'alg', asignatura: 'Algebra'},
    {valor: 'otro', asignatura: 'Otro'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}