import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

}
